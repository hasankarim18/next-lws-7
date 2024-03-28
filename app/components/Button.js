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
