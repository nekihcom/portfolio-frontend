import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getApiBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'https://portfolio-backend.ddev.site';
  }
  return 'https://api.mchkn.com';
}
