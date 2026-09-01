import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "petroleum" | "navy" | "gradient" | "outline";
  glow?: boolean;
}

export function Card({
  className,
  variant = "petroleum",
  glow = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    petroleum: "bg-brand-petroleum-card/90 border border-brand-slate/30 text-white",
    navy: "bg-brand-navy-card/90 border border-brand-sky/20 text-white",
    gradient: "bg-gradient-brand text-white border border-brand-sky/40",
    outline: "bg-transparent border border-brand-slate/40 text-white",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm",
        variantStyles[variant],
        glow && "hover:border-brand-sky/60 hover:shadow-lg hover:shadow-brand-sky/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-2 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-bold tracking-tight text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-gray-300 leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("", className)} {...props}>{children}</div>;
}
