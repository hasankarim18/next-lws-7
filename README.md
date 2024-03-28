# Lws Next.js Module 7

### Custom Link Reusable component with tailwind cn function

```"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "../utils/cn";

export default function CustomLink({ children, path, className }) {
  const pathname = usePathname();
  return (
    <Link
      className={cn("link",
      `${pathname === path ? "active" : ""}`,     className
      )}
      href={path}
    >
      {children}
    </Link>
  );
}


```

- [For `cn` functin visit this repository ](https://github.com/hasankarim18/react-reusable-component-typescript)
  : https://github.com/hasankarim18/react-reusable-component-typescript
