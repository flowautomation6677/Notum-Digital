import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  target?: string;
  rel?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      target,
      rel,
      isExternal,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2 focus-visible:ring-offset-brand-petroleum disabled:pointer-events-none disabled:opacity-50 select-none group";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-2 rounded-md gap-1.5",
      md: "text-sm px-5 py-2.5 rounded-lg gap-2",
      lg: "text-base px-7 py-3.5 rounded-lg gap-2.5 shadow-lg",
      xl: "text-lg px-8 py-4 rounded-xl gap-3 shadow-xl font-bold",
    };

    const variantStyles = {
      primary:
        "bg-brand-sky text-brand-petroleum hover:bg-[#9de0fa] active:bg-[#72b8d4] shadow-md shadow-brand-sky/20 hover:shadow-brand-sky/35 border border-brand-sky/40",
      secondary:
        "bg-brand-petroleum-card text-brand-white border border-brand-slate/30 hover:border-brand-sky/50 hover:bg-[#253842] active:bg-[#1b2b33]",
      outline:
        "bg-transparent text-brand-sky border-2 border-brand-sky/70 hover:bg-brand-sky/10 active:bg-brand-sky/20",
      navy:
        "bg-brand-navy text-brand-white border border-brand-sky/30 hover:border-brand-sky/70 hover:bg-[#212347]",
      ghost:
        "bg-transparent text-gray-300 hover:text-brand-white hover:bg-brand-slate/20",
    };

    const combinedClassName = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : target}
          rel={isExternal ? "noopener noreferrer" : rel}
          className={combinedClassName}
        >
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && (
            <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
              {rightIcon}
            </span>
          )}
        </a>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && (
          <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
