# Lws Next.js Module 7

- [Custom Link Reusable component with tailwind cn function](#Custom-Link-Reusable-component-with-tailwind-cn-function)
- [How to create Routing Button](#routing-button)
- [General Reusable Button](#General-Reusable-Button)

### #Custom Link Reusable component with tailwind cn function

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

---

## Routing Button

- Routing button design with cn function and forward ref

```
/* eslint-disable react/display-name */
"use client";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import cn from "../utils/cn";

const RoutingButton = forwardRef(
  ({ varient, children, className, onClick, path, ...rest }, ref) => {
    const router = useRouter();

    const getVarient = (varient) => {
      switch (varient) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        case "solid":
          return "btn-solid";
        default:
          return "btn";
      }
    };

    return (
      <button
        // varient={varient}
        ref={ref}
        onClick={() => {
          router.push(path);
        }}
        {...rest}
        className={cn("btn", getVarient(varient), className)}
      >
        {children}
      </button>
    );
  }
);

export default RoutingButton;

```

- How to use it in component
- path indicating the where it should go
- it is special case make the button client

```
"use client";
import RoutingButton from "@/app/components/RoutingButton";


export default function Settings() {
  const router = useRouter();

  return (
    <div>
      <div className="mt-4">
        <RoutingButton
          varient="solid"
          path="/dashboard/analytics"
          className="rounded-md"
        >
          Go to analytices
        </RoutingButton>
      </div>
    </div>
  );
}

```

---

## General Reusable Button

```
/* eslint-disable react/display-name */
"use client";
import { forwardRef } from "react";
import cn from "../utils/cn";

const Button = forwardRef(
  ({ varient, children, className, onClick, path, ...rest }, ref) => {
    const getVarient = (varient) => {
      switch (varient) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";
        case "solid":
          return "btn-solid";
        default:
          return "btn";
      }
    };

    return (
      <button
        // varient={varient}
        ref={ref}
        onClick={onClick}
        {...rest}
        className={cn("btn", getVarient(varient), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;

```
