"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "../utils/cn";

export default function CustomLink({ children, path, className }) {
  const pathname = usePathname();
  return (
    <Link
      className={cn("link", ` ${pathname === path ? "active" : ""}`, className)}
      href={path}
    >
      {children}
    </Link>
  );
}

/**
className={cn(
        "btn",
        {
          "border-2 border-red-400": outline,
        },
        className
      )} 


 */
