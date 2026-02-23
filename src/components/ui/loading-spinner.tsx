"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({
  className,
  size = "md",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-36 h-36",
  };

  const logoSizes = {
    sm: 32,
    md: 48,
    lg: 72,
  };

  const borderWidth = {
    sm: "border-2",
    md: "border-4",
    lg: "border-4",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
    >
      {/* Spinning border div - top and left borders are gold/accent */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border-transparent animate-spin",
          borderWidth[size],
          "border-t-accent border-l-accent",
        )}
        style={{ animationDuration: "1s" }}
      />

      {/* Logo in center - static, does not spin */}
      <Image
        src="/logo-black.svg"
        alt="Loading"
        width={logoSizes[size]}
        height={logoSizes[size]}
        className="relative z-10 object-contain"
        priority
      />
    </div>
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <LoadingSpinner size="lg" />
    </div>
  );
}
