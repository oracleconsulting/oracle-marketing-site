# Oracle AI Marketing Site

A Next.js-based marketing website for Oracle AI, featuring SEO-optimized landing pages, blog, and public-facing content.

## 🚀 Features

- **SEO Optimized**: Server-side rendering and static generation for better search engine visibility
- **Modern Design**: Beautiful, responsive design with Framer Motion animations
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Blog Ready**: Structured for content marketing and SEO
- **Mobile First**: Responsive design that works on all devices

## 📁 Project Structure

```
oracle-marketing-site/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── blog/              # Blog pages
│   │   ├── pricing/           # Pricing page
│   │   ├── beanstalk-test/    # Beanstalk Test page
│   │   └── layout.tsx         # Root layout
│   └── components/            # Reusable components
├── public/                    # Static assets
│   └── images/               # Images and logos
└── package.json
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository** (if separate repo):
   ```bash
   git clone <repository-url>
   cd oracle-marketing-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Purple gradient (`from-purple-400 to-pink-400`)
- **Secondary**: Green gradient (`from-green-400 to-emerald-400`)
- **Background**: Light gradients with glassmorphism effects

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large scale
- **Body**: Clean, readable text

### Components
- **Navigation**: Fixed header with backdrop blur
- **Cards**: Glassmorphism with hover effects
- **Buttons**: Gradient backgrounds with animations
- **Footer**: Dark theme with organized links

## 📄 Pages

### Homepage (`/`)
- Hero section with value proposition
- Problem identification
- Trust signals
- Call-to-action buttons

### Beanstalk Test (`/beanstalk-test`)
- Interactive beanstalk visualization
- Assessment introduction
- What the test reveals

### Pricing (`/pricing`)
- Three-tier pricing structure
- Feature comparison
- FAQ section
- Trust signals

### Blog (`/blog`)
- Blog post grid
- Category filtering
- Newsletter signup
- SEO-optimized structure

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=https://oracleconsulting.ai
NEXT_PUBLIC_API_URL=https://api.oracleconsulting.ai
```

### SEO Configuration
Each page includes proper metadata:
- Title and description
- Open Graph tags
- Twitter cards
- Keywords

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Can host Next.js apps
- **AWS/GCP**: Use with custom configuration

## 📊 Analytics & SEO

### Google Analytics
Add your GA4 tracking ID to track user behavior.

### Search Console
Submit your sitemap to Google Search Console for better indexing.

### Performance Monitoring
- Core Web Vitals optimization
- Lighthouse scores
- Page load times

## 🔗 Integration Points

### Backend API
- Connect to your FastAPI backend for dynamic content
- API routes for blog posts, testimonials, etc.

### CMS Integration
- Consider integrating with a headless CMS (Strapi, Contentful)
- For blog content management

### Email Marketing
- Newsletter signup integration
- Lead capture forms

## 🎯 SEO Strategy

### On-Page SEO
- Meta titles and descriptions
- Structured data markup
- Internal linking
- Image optimization

### Content Strategy
- Blog posts for keyword targeting
- Case studies and testimonials
- Educational content
- Founder stories

### Technical SEO
- Fast loading times
- Mobile optimization
- Clean URL structure
- XML sitemap

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For questions or support:
- Check the documentation
- Review existing issues
- Create a new issue with details

## 📄 License

This project is proprietary to Oracle AI.

---

**Built with ❤️ for UK founders building life-first businesses.**
