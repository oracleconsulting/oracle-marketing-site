
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Simple toast function as fallback
export function showToast(message: string) {
  console.log('Toast:', message);
  // Fallback to browser alert if needed
  if (typeof window !== 'undefined') {
    // Could implement a simple toast here if needed
  }
}
