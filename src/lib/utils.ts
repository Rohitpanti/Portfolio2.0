import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// We're using a simple cn implementation without tailwind-merge
// to avoid an extra dependency since we control our class names
