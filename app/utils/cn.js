import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn function for react-tailwind+typescript-- for js type ClassValue[] will be omited

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cn;
