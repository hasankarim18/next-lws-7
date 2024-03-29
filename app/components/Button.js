/* eslint-disable react/display-name */
"use client";
import { useRouter } from "next/navigation";
import { forwardRef } from "react";
import cn from "../utils/cn";

const Button = forwardRef(
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
        case "danger":
          return "btn-danger";
        default:
          return "btn";
      }
    };

    if (path) {
      return (
        <button
          varient={varient}
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
    } else {
      return (
        <button
          varient={varient}
          ref={ref}
          onClick={onClick}
          {...rest}
          className={cn("btn", getVarient(varient), className)}
        >
          {children}
        </button>
      );
    }
  }
);

export default Button;
