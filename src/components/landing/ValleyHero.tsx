import React, { useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, SkipForward } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

// Simple noise implementation
class SimplexNoise {
  private grad3: number[][];
  private p: number[];
  private perm: number[];

  constructor() {
    this.grad3 = [
      [1, 1, 0],
      [-1, 1, 0],
      [1, -1, 0],
      [-1, -1, 0],
      [1, 0, 1],
      [-1, 0, 1],
      [1, 0, -1],
      [-1, 0, -1],
      [0, 1, 1],
      [0, -1, 1],
      [0, 1, -1],
      [0, -1, -1],
    ];
    this.p = [];
    for (let i = 0; i < 256; i++) {
      this.p[i] = Math.floor(Math.random() * 256);
    }
    this.perm = [];
    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255];
    }
  }

  dot(g: number[], x: number, y: number): number {
    return g[0] * x + g[1] * y;
  }

  noise2D(xin: number, yin: number): number {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);

    const G2 = (3 - Math.sqrt(3)) / 6;
    const t = (i + j) * G2;
    const X0 = i - t;
    const Y0 = j - t;
    const x0 = xin - X0;
    const y0 = yin - Y0;

    let i1, j1;
    if (x0 > y0) {
      i1 = 1;
      j1 = 0;
    } else {
      i1 = 0;
      j1 = 1;
    }

    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;

    const ii = i & 255;
    const jj = j & 255;
    const gi0 = this.perm[ii + this.perm[jj]] % 12;
    const gi1 = this.perm[ii + i1 + this.perm[jj + j1]] % 12;
    const gi2 = this.perm[ii + 1 + this.perm[jj + 1]] % 12;

    let t0 = 0.5 - x0 * x0 - y0 * y0;
    let n0 = 0;
    if (t0 >= 0) {
      t0 *= t0;
      n0 = t0 * t0 * this.dot(this.grad3[gi0], x0, y0);
    }

    let t1 = 0.5 - x1 * x1 - y1 * y1;
    let n1 = 0;
    if (t1 >= 0) {
      t1 *= t1;
      n1 = t1 * t1 * this.dot(this.grad3[gi1], x1, y1);
    }

    let t2 = 0.5 - x2 * x2 - y2 * y2;
    let n2 = 0;
    if (t2 >= 0) {
      t2 *= t2;
      n2 = t2 * t2 * this.dot(this.grad3[gi2], x2, y2);
    }

    return 70 * (n0 + n1 + n2);
  }
}

const ValleyHero: React.FC = () => {
  const { setTheme } = useTheme();
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [loading, setLoading] = React.useState(true);
  const [whiteMode, setWhiteMode] = React.useState(false);
  const [journeyComplete, setJourneyComplete] = React.useState(false);
  const [showSkipButton, setShowSkipButton] = React.useState(false);
  const [skipButtonVisible, setSkipButtonVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const scrollPositionRef = useRef(0);
  const journeyPositionRef = useRef(0);

  // Make these accessible to event handlers
  let hoverPulse = 0;
  let greenLightPulse = 0;

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update theme based on journey position
  useEffect(() => {
    const updateTheme = () => {
      const position = journeyPositionRef.current;
      if (position < 5) {
        setTheme('orange');
      } else if (position < 10) {
        setTheme('purple');
      } else if (position < 15) {
        setTheme('pink');
      } else {
        setTheme('blue');
      }
    };

    const interval = setInterval(updateTheme, 100);
    return () => clearInterval(interval);
  }, [setTheme]);

  // Timer for skip button
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!journeyComplete) {
        setShowSkipButton(true);
        // Slight delay for fade-in effect
        setTimeout(() => setSkipButtonVisible(true), 100);
      }
    }, 12000); // Show after 12 seconds

    return () => clearTimeout(timer);
  }, [journeyComplete]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Lock mobile viewport if on mobile
    if (isMobile) {
      // Store current scroll position
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      
      // Lock the body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    // Initialize Three.js scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 100, 600);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 50);
    camera.lookAt(0, -10, -50);

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      alpha: true,
      powerPreference: isMobile ? "low-power" : "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2)); // Lower pixel ratio on mobile
    renderer.shadowMap.enabled = !isMobile; // Disable shadows on mobile
    if (!isMobile) {
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    }
    mountRef.current.appendChild(renderer.domElement);

    // Journey state
    let journeyPosition = 0;
    let targetJourneyPosition = 0;
    let scrollSpeed = 1;
    let pulsePhase = 0;
    let hasCompletedJourney = false;

    // Noise generator
    const simplex = new SimplexNoise();

    // Create valley segments for infinite generation
    const valleySegments: any[] = [];
    const SEGMENT_LENGTH = 400;
    const SEGMENT_COUNT = 5;
    const valleyGroup = new THREE.Group();

    // Valley dimensions - reduced for mobile
    const valleyWidth = isMobile ? 400 : 800;
    const segments = isMobile ? 50 : 150;
    const lengthSegments = isMobile ? 50 : 150;

    // Function to create a valley segment
    function createValleySegment(zOffset: number) {
      const geometry = new THREE.PlaneGeometry(
        valleyWidth,
        SEGMENT_LENGTH,
        segments,
        lengthSegments
      );

      const vertices = geometry.attributes.position.array;
      const uvs = geometry.attributes.uv.array;
      const elevationData: number[] = [];

      for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const localZ = vertices[i + 1];
        const worldZ = localZ + zOffset;

        const distanceFromCenter = Math.abs(x);
        const normalizedDistance = distanceFromCenter / (valleyWidth / 2);

        let elevation = 0;

        if (normalizedDistance < 0.06) {
          elevation = -5 + simplex.noise2D(x * 0.01, worldZ * 0.01) * 1;
          elevation += Math.sin(worldZ * 0.005) * 0.5;
        } else {
          const wallProgress = (normalizedDistance - 0.06) / 0.94;
          elevation = Math.pow(wallProgress, 1.2) * 150;

          const curveFactor =
            Math.sin(worldZ * 0.0005) * 0.15 + Math.cos(worldZ * 0.0003) * 0.1;

          if (x > 0) {
            elevation *= 1 + curveFactor;
          } else {
            elevation *= 1 - curveFactor;
          }

          let detail = 0;
          let amplitude = 8;
          let frequency = 0.02;

          for (let j = 0; j < 3; j++) {
            detail +=
              simplex.noise2D(x * frequency, worldZ * frequency) * amplitude;
            amplitude *= 0.5;
            frequency *= 2;
          }

          elevation += detail;
        }

        vertices[i + 2] = elevation;
        elevationData.push(elevation);
      }

      for (let i = 0; i < uvs.length; i += 2) {
        const vertexIndex = Math.floor(i / 2);
        const elevation = elevationData[vertexIndex];
        uvs[i + 1] = (elevation + 5) / 155;
      }

      geometry.computeVertexNormals();
      geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));

      const valleyMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vElevation;
          
          void main() {
            vUv = uv;
            vPosition = position;
            vElevation = position.z;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform float glowIntensity;
          uniform float pulsePhase;
          uniform vec3 fogColor;
          uniform float fogNear;
          uniform float fogFar;
          uniform float timeOfDay;
          uniform bool whiteMode;
          uniform float hoverPulse;
          uniform float greenLightPulse;
          
          varying vec2 vUv;
          varying vec3 vPosition;
          varying float vElevation;
          
          void main() {
            vec3 baseOrange = vec3(1.0, 0.42, 0.21);
            vec3 baseBlue = vec3(0.0, 0.83, 1.0);
            vec3 basePink = vec3(1.0, 0.0, 0.43);
            vec3 baseGreen = vec3(0.0, 1.0, 0.53);
            
            float dayPhase = mod(timeOfDay, 1.0);
            
            if (dayPhase < 0.3) {
              float t = dayPhase / 0.3;
              baseOrange = mix(vec3(0.5, 0.2, 0.8), vec3(1.0, 0.42, 0.21), t);
              baseBlue = mix(vec3(0.8, 0.6, 1.0), vec3(0.0, 0.83, 1.0), t);
            } else if (dayPhase > 0.7) {
              float t = (dayPhase - 0.7) / 0.3;
              baseOrange = mix(vec3(1.0, 0.42, 0.21), vec3(0.8, 0.2, 0.1), t);
              baseBlue = mix(vec3(0.0, 0.83, 1.0), vec3(0.4, 0.1, 0.6), t);
            }
            
            float heightFactor = smoothstep(0.0, 1.0, vUv.y);
            vec3 color = baseOrange;
            
            if (heightFactor < 0.1) {
              float wavePosition = vPosition.y * 0.05 + pulsePhase;
              float pulse = sin(wavePosition) * 0.5 + 0.5;
              color = mix(baseOrange, baseBlue, pulse * glowIntensity);
              
              float centerGlow = 1.0 - abs(vPosition.x) / 20.0;
              centerGlow = clamp(centerGlow, 0.0, 1.0);
              color += baseGreen * centerGlow * 0.3 * pulse;
              
              if (greenLightPulse > 0.0) {
                float greenWave = 1.0 - abs(vPosition.y + greenLightPulse * 500.0) / 100.0;
                greenWave = clamp(greenWave, 0.0, 1.0);
                color = mix(color, baseGreen, greenWave * greenLightPulse);
              }
            } else if (heightFactor < 0.5) {
              float t = (heightFactor - 0.1) / 0.4;
              color = mix(baseOrange, basePink, t * 0.8);
            } else {
              float t = (heightFactor - 0.5) / 0.5;
              color = mix(basePink, baseBlue, t);
              
              float edgeFactor = pow(heightFactor, 2.0);
              vec3 rimColor = baseGreen;
              
              float rimIntensity = pow(1.0 - dot(normalize(vPosition), vec3(0.0, 0.0, 1.0)), 2.0);
              color = mix(color, rimColor, edgeFactor * rimIntensity * 0.15);
            }
            
            if (hoverPulse > 0.0) {
              color = mix(color, vec3(1.0, 1.0, 1.0), hoverPulse * 0.5);
            }
            
            float depth = gl_FragCoord.z / gl_FragCoord.w;
            float fogFactor = smoothstep(fogNear, fogFar, depth);
            
            vec3 fogColorAdjusted = whiteMode ? vec3(1.0) : fogColor;
            color = mix(color, fogColorAdjusted * 0.1, fogFactor * 0.8);
            
            float wireframeOpacity = 0.9 - fogFactor * 0.7;
            
            if (depth > 300.0) {
              wireframeOpacity *= 0.6;
            }
            
            if (whiteMode) {
              color = 1.0 - color;
              color *= 0.8;
              wireframeOpacity *= 0.7;
            }
            
            gl_FragColor = vec4(color * wireframeOpacity, wireframeOpacity);
          }
        `,
        uniforms: {
          time: { value: 0 },
          glowIntensity: { value: 0 },
          pulsePhase: { value: 0 },
          fogColor: { value: new THREE.Color(0x000000) },
          fogNear: { value: 100 },
          fogFar: { value: 600 },
          timeOfDay: { value: 0 },
          whiteMode: { value: false },
          hoverPulse: { value: 0 },
          greenLightPulse: { value: 0 },
        },
        wireframe: true,
        transparent: true,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(geometry, valleyMaterial);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.y = -30;
      mesh.position.z = zOffset;

      return {
        mesh: mesh,
        material: valleyMaterial,
        zOffset: zOffset,
      };
    }

    // Create initial valley segments
    for (let i = 0; i < SEGMENT_COUNT; i++) {
      const segment = createValleySegment(
        i * SEGMENT_LENGTH - SEGMENT_LENGTH * 2
      );
      valleySegments.push(segment);
      valleyGroup.add(segment.mesh);
    }

    // Milestone system
    const milestoneTypes = [
      { geometry: new THREE.ConeGeometry(12, 18, 4), name: "MILESTONE" },
      { geometry: new THREE.BoxGeometry(5, 30, 5), name: "CHECKPOINT" },
      { geometry: new THREE.IcosahedronGeometry(10, 0), name: "WAYPOINT" },
    ];

    const activeMilestones: any[] = [];
    let nextMilestoneZ = -200;
    let milestoneCount = 0;

    function createMilestone(type: number, zPosition: number) {
      const milestoneData = milestoneTypes[type % milestoneTypes.length];
      const milestoneGroup = new THREE.Group();

      const material = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vPosition;
          void main() {
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color;
          uniform float activation;
          uniform float time;
          varying vec3 vPosition;
          
          void main() {
            vec3 baseColor = vec3(1.0, 0.42, 0.21);
            vec3 activeColor = vec3(0.0, 1.0, 0.53);
            
            vec3 finalColor = mix(baseColor, activeColor, activation);
            float pulse = sin(time * 3.0) * 0.2 + 0.8;
            float opacity = 0.3 + activation * 0.7 * pulse;
            
            gl_FragColor = vec4(finalColor, opacity);
          }
        `,
        uniforms: {
          color: { value: new THREE.Color(0xff6b35) },
          activation: { value: 0 },
          time: { value: 0 },
        },
        wireframe: true,
        transparent: true,
      });

      const mesh = new THREE.Mesh(milestoneData.geometry.clone(), material);
      const xPos = (Math.random() - 0.5) * 40;
      mesh.position.set(xPos, 0, 0);
      milestoneGroup.add(mesh);

      // Add text sprite
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = 512;
        canvas.height = 128;

        const isSprintMilestone = milestoneCount % 2 === 0;
        const text = isSprintMilestone ? "3 MONTH SPRINT" : "6 MONTH STRETCH";
        milestoneCount++;

        context.font = "bold 48px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillStyle = "#00FF88";
        context.fillText(text, canvas.width / 2, canvas.height / 2);

        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;

        const spriteMaterial = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          opacity: 0,
          depthTest: false,
          depthWrite: false,
        });

        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(40, 10, 1);
        sprite.position.set(xPos, 15, 0);
        milestoneGroup.add(sprite);

        milestoneGroup.position.set(0, -30, zPosition);
        milestoneGroup.userData = {
          name: milestoneData.name,
          originalZ: zPosition,
          mesh: mesh,
          material: material,
          sprite: sprite,
          spriteMaterial: spriteMaterial,
          isSprintMilestone: isSprintMilestone,
        };
      }

      return milestoneGroup;
    }

    scene.add(valleyGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00d4ff, 0.5);
    directionalLight.position.set(0, 50, 50);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const rimLight = new THREE.DirectionalLight(0x00ff88, 0.2);
    rimLight.position.set(100, 100, 0);
    scene.add(rimLight);

    // Handle resize
    function handleResize() {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scaleX = Math.max(1, aspect / 1.77);
      valleyGroup.scale.x = scaleX;
    }

    // Function to complete the journey
    function completeJourney() {
      hasCompletedJourney = true;
      setJourneyComplete(true);
      setShowSkipButton(false);
      
      // Fade out the valley scene for smoother transition
      if (mountRef.current) {
        mountRef.current.style.transition = 'opacity 1.5s ease-out';
        mountRef.current.style.opacity = '0.5';
      }
      
      // Fix mobile body scroll
      if (isMobile) {
        // Remove the fixed positioning
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        
        // Restore the scroll position
        window.scrollTo(0, scrollPositionRef.current);
        
        // Ensure scrolling is enabled after a short delay
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
          document.body.style.position = 'relative';
          
          // Then scroll to next section
          setTimeout(() => {
            window.scrollTo({ 
              top: window.innerHeight, 
              behavior: 'smooth' 
            });
          }, 100);
        }, 100);
      } else {
        // Desktop scroll
        setTimeout(() => {
          window.scrollTo({ 
            top: window.innerHeight, 
            behavior: 'smooth' 
          });
        }, 1500);
      }
    }

    // Expose complete journey function to the component
    (window as any).completeValleyJourney = completeJourney;

    // Scroll handling
    let scrollTimeout: NodeJS.Timeout;
    
    function handleWheel(e: WheelEvent) {
      // Always prevent default scroll during valley experience
      if (!hasCompletedJourney) {
        e.preventDefault();
        const delta = e.deltaY * 0.0005;

        scrollSpeed = Math.min(scrollSpeed * 1.05, 3);
        targetJourneyPosition += delta * scrollSpeed;
        targetJourneyPosition = Math.max(0, targetJourneyPosition);

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          scrollSpeed = 1;
        }, 200);
        
        // Remove auto-completion - journey continues indefinitely
      }
    }

    // Touch support
    let touchStartY = 0;
    function handleTouchStart(e: TouchEvent) {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    }

    function handleTouchMove(e: TouchEvent) {
      if (e.touches.length === 1 && !hasCompletedJourney) {
        e.preventDefault();
        const deltaY = touchStartY - e.touches[0].clientY;
        targetJourneyPosition += deltaY * 0.001 * scrollSpeed;
        targetJourneyPosition = Math.max(0, targetJourneyPosition);
        touchStartY = e.touches[0].clientY;
      }
    }

    // Animation loop
    let scrollVelocity = 0;

    function animate(time: number) {
      animationIdRef.current = requestAnimationFrame(animate);

      const scrollDiff = targetJourneyPosition - journeyPosition;
      scrollVelocity = scrollDiff * 0.1;
      journeyPosition += scrollVelocity;
      
      // Update the ref for theme context
      journeyPositionRef.current = journeyPosition;

      camera.position.z = 50 - journeyPosition * 100;
      camera.position.y = 10 + Math.sin(time * 0.0005) * 2;
      camera.position.x = 0;

      camera.lookAt(0, -10, camera.position.z - 100);

      // Update valley segments
      valleySegments.forEach((segment) => {
        if (segment.mesh.position.z > camera.position.z + SEGMENT_LENGTH * 2) {
          const frontmostZ = Math.min(
            ...valleySegments.map((s: any) => s.mesh.position.z)
          );
          segment.mesh.position.z = frontmostZ - SEGMENT_LENGTH;
          segment.zOffset = segment.mesh.position.z;
        }

        if (segment.material) {
          segment.material.uniforms.time.value = time * 0.001;
          segment.material.uniforms.timeOfDay.value = time * 0.00005;
          segment.material.uniforms.pulsePhase.value = pulsePhase;
          segment.material.uniforms.glowIntensity.value =
            Math.sin(time * 0.001) * 0.3 + 0.7;
          segment.material.uniforms.whiteMode.value = whiteMode;
          segment.material.uniforms.hoverPulse.value = hoverPulse;
          segment.material.uniforms.greenLightPulse.value = greenLightPulse;
        }
      });

      pulsePhase += 0.02 + Math.abs(scrollVelocity) * 0.1;

      if (hoverPulse > 0) {
        hoverPulse *= 0.95;
        if (hoverPulse < 0.01) hoverPulse = 0;
      }

      if (greenLightPulse > 0) {
        greenLightPulse -= 0.015;
        if (greenLightPulse < -2) greenLightPulse = 0;
      }

      // Spawn new milestones
      while (nextMilestoneZ > camera.position.z - 800) {
        const milestone = createMilestone(
          activeMilestones.length,
          nextMilestoneZ
        );
        activeMilestones.push(milestone);
        valleyGroup.add(milestone);
        nextMilestoneZ -= 150 + Math.random() * 200;
      }

      // Update milestones
      for (let i = activeMilestones.length - 1; i >= 0; i--) {
        const milestoneGroup = activeMilestones[i];

        if (milestoneGroup.position.z > camera.position.z + 200) {
          valleyGroup.remove(milestoneGroup);
          milestoneGroup.userData.mesh.geometry.dispose();
          milestoneGroup.userData.material.dispose();
          milestoneGroup.userData.spriteMaterial.map.dispose();
          milestoneGroup.userData.spriteMaterial.dispose();
          activeMilestones.splice(i, 1);
          continue;
        }

        const distance = Math.abs(
          camera.position.z - milestoneGroup.position.z
        );
        const activationRange = 300;
        const activation = Math.max(0, 1 - distance / activationRange);

        milestoneGroup.userData.material.uniforms.activation.value = activation;
        milestoneGroup.userData.material.uniforms.time.value = time * 0.001;
        milestoneGroup.userData.spriteMaterial.opacity = activation * 0.8;
        milestoneGroup.userData.sprite.lookAt(camera.position);
      }

      renderer.setClearColor(whiteMode ? 0xffffff : 0x000000);
      renderer.render(scene, camera);
    }

    // Event listeners
    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    // Start animation
    animate(0);

    // Hide loader
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);

      // Clean up global function
      delete (window as any).completeValleyJourney;

      // Always restore mobile scroll on cleanup
      if (isMobile) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        window.scrollTo(0, scrollPositionRef.current);
      }

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [whiteMode, isMobile]);

  // Handle skip button click
  const handleSkipJourney = () => {
    if ((window as any).completeValleyJourney) {
      (window as any).completeValleyJourney();
    }
  };

  return (
    <div className="valley-container relative w-full h-screen overflow-hidden bg-black isolate">
      {/* Loading Screen */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: whiteMode ? "white" : "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
          opacity: loading ? 1 : 0,
          pointerEvents: loading ? "auto" : "none",
          transition: "opacity 0.5s",
        }}
      >
        <div
          style={{
            color: whiteMode ? "black" : "white",
            letterSpacing: "0.3em",
            fontSize: "14px",
            textTransform: "uppercase",
          }}
        >
          INITIALIZING JOURNEY
        </div>
      </div>

      {/* Skip Journey Button */}
      {showSkipButton && !journeyComplete && (
        <button
          onClick={handleSkipJourney}
          className="fixed z-50"
          style={{
            bottom: "8rem",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 32px",
            background: "transparent",
            border: "1px solid rgba(0, 255, 136, 0.5)",
            color: "#00FF88",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "all 0.5s",
            opacity: skipButtonVisible ? 1 : 0,
            boxShadow: skipButtonVisible ? "0 0 20px rgba(0, 255, 136, 0.2)" : "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = "1px solid #00FF88";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(0, 255, 136, 0.4)";
            e.currentTarget.style.transform = "translateX(-50%) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = "1px solid rgba(0, 255, 136, 0.5)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.2)";
            e.currentTarget.style.transform = "translateX(-50%) scale(1)";
          }}
        >
          <span style={{ position: "relative", zIndex: 10, fontSize: isMobile ? "0.75rem" : "0.875rem" }}>
            Flown Enough Yet?
          </span>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, transparent, rgba(0, 255, 136, 0.1), transparent)",
              transform: "skewX(-12deg) translateX(-200%)",
              transition: "transform 0.7s",
            }}
            className="skip-button-shine"
          />
        </button>
      )}

      {/* Three.js Mount Point */}
      <div ref={mountRef} className="absolute inset-0 z-10" />

      {/* Hero Content */}
      <div
        id="hero-content"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 40,
          pointerEvents: "none",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.8s",
        }}
      >
        <img
          ref={logoRef}
          id="oracle-logo"
          src="/images/logos/oracle-logo.svg"
          alt="Oracle Consulting.ai"
          style={{
            display: "block",
            marginBottom: "0rem",
            width: isMobile ? "300px" : "800px",
            height: isMobile ? "94px" : "250px",
            maxWidth: "90vw",
            filter:
              "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(356deg) brightness(101%) contrast(102%)",
            transition: "filter 0.3s ease",
          }}
        />
        <p
          style={{
            fontSize: isMobile ? "0.875rem" : "1rem",
            opacity: 0.8,
            marginBottom: "1.5rem",
            marginTop: isMobile ? "-1rem" : "-2rem",
            letterSpacing: "0.1em",
            color: "white",
            transition: "color 0.5s",
            padding: "0 1rem",
          }}
        >
          Your journey through the entrepreneurial valley
        </p>
        <a
          href="/auth"
          className="cta-button"
          style={{
            display: "inline-block",
            pointerEvents: "auto",
            padding: isMobile ? "0.75rem 1.5rem" : "0.5rem 1rem",
            background: "transparent",
            border: "1px solid rgba(255, 107, 53, 0.5)",
            color: "#FF6B35",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            fontSize: isMobile ? "0.875rem" : "1rem",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.3s",
            cursor: "pointer",
            width: isMobile ? "250px" : "300px",
            maxWidth: "90vw",
            textAlign: "center",
            textDecoration: "none",
          }}
          onMouseEnter={() => {
            hoverPulse = 1;
            if (logoRef.current) {
              logoRef.current.style.filter = "brightness(0) invert(1)";
            }
          }}
          onMouseLeave={() => {
            if (logoRef.current) {
              logoRef.current.style.filter =
                "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(356deg) brightness(101%) contrast(102%)";
            }
          }}
          onClick={(e) => {
            e.preventDefault();
            greenLightPulse = 1;
            setTimeout(() => {
              if (logoRef.current) {
                logoRef.current.style.filter =
                  "brightness(0) saturate(100%) invert(85%) sepia(30%) saturate(1000%) hue-rotate(80deg) brightness(1.2) contrast(100%)";
              }
            }, 800);
            setTimeout(() => {
              window.location.href = "/auth";
            }, 1500);
          }}
        >
          <span style={{ position: "relative", zIndex: 10 }}>
            BEGIN YOUR JOURNEY
          </span>
          <div
            className="cta-button-shine"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, transparent, rgba(255, 107, 53, 0.2), transparent)",
              transform: "skewX(-12deg) translateX(-200%)",
              transition: "transform 0.7s",
            }}
          />
        </a>
      </div>

      {/* Scroll Indicator */}
      <div
        id="scroll-indicator"
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          zIndex: 20,
          opacity: journeyComplete ? 0 : 0.5,
          transition: "opacity 0.5s"
        }}
      >
        <div
          style={{
            fontSize: isMobile ? "0.7rem" : "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            color: "white",
            transition: "color 0.5s",
          }}
        >
          {isMobile ? "Swipe to navigate" : "Scroll to navigate"}
        </div>
        <svg
          width="24"
          height="30"
          fill="none"
          stroke="#FF6B35"
          strokeWidth="1.5"
        >
          <rect x="1" y="1" width="22" height="28" rx="11" opacity="0.5" />
          <circle cx="12" cy="10" r="3" fill="#FF6B35" />
        </svg>
      </div>

      {/* Theme Toggle - Moved to bottom of hero section */}
      <button
        onClick={() => setWhiteMode(!whiteMode)}
        className="fixed z-50"
        style={{
          bottom: "1rem",
          right: "1rem",
          padding: "10px 20px",
          background: whiteMode
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 255, 255, 0.1)",
          border: `1px solid ${
            whiteMode ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"
          }`,
          color: whiteMode ? "black" : "white",
          textTransform: "uppercase",
          fontSize: "12px",
          letterSpacing: "0.1em",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        Toggle Theme
      </button>

      {/* Mobile-optimized CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .cta-button:hover {
          border-color: #FF6B35 !important;
          box-shadow: 0 0 30px rgba(255, 107, 53, 0.3);
        }
        
        .cta-button:hover .cta-button-shine {
          transform: skewX(-12deg) translateX(200%) !important;
        }
        
        .skip-button:hover .skip-button-shine {
          transform: skewX(-12deg) translateX(200%) !important;
        }
        
        body.white-mode .subtitle {
          color: black;
        }
        
        body.white-mode #scroll-text {
          color: black;
        }
        
        body.white-mode #mouse-icon {
          stroke: #000;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.2); }
          50% { box-shadow: 0 0 30px rgba(0, 255, 136, 0.4); }
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          /* Prevent pull-to-refresh but don't lock body here */
          .valley-container {
            touch-action: none;
          }
          
          /* Disable hover effects on mobile */
          @media (hover: none) {
            .cta-button:hover {
              border-color: rgba(255, 107, 53, 0.5) !important;
              box-shadow: none;
            }
          }
        }
      `,
        }}
      />
    </div>
  );
};

export default ValleyHero;
