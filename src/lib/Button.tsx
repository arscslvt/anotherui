import React, { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";

interface ButtonPropss {
  children: ReactNode;
  type?: "filled" | "outlined" | "transparent";
  isLoading?: boolean;
  //   icon:
}
/**
 * Pre-built simple button.
 * You can use it like HTML, write its content as children.
 *
 * @see https://www.w3schools.com/tags/tag_button.asp
 */

const variants = cva("text-sm font-medium transition-colors", {
  variants: {
    variant: {
      default:
        "bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 shadow-sm",
      outline:
        "bg-transparent border border-slate-200 hover:border-slate-300 text-slate-700",
      transparent: "bg-transparent text-slate-700 hover:bg-slate-100",
    },
    size: {
      default: "px-4 py-2 rounded-md",
      medium: "px-5 py-2.5 rounded-md",
      large: "px-6 py-3 rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={variants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, variants };
