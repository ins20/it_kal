import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAvailable(day: number) {
  const fullYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  return (
    new Date(fullYear, currentMonth, day).getTime() <= new Date().getTime()
  );
}
