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
