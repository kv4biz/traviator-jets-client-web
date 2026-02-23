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

  const strokeWidth = {
    sm: 3,
    md: 4,
    lg: 6,
  };

  const circleRadius = {
    sm: 28,
    md: 42,
    lg: 64,
  };

  const viewBox = {
    sm: 64,
    md: 96,
    lg: 144,
  };

  // Half circumference for half-circle arc
  const circumference = 2 * Math.PI * circleRadius[size];
  const halfCircumference = circumference / 2;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
    >
      {/* Static background ring */}
      <svg
        className="absolute inset-0"
        viewBox={`0 0 ${viewBox[size]} ${viewBox[size]}`}
        fill="none"
      >
        <circle
          cx={viewBox[size] / 2}
          cy={viewBox[size] / 2}
          r={circleRadius[size]}
          stroke="hsl(var(--primary))"
          strokeWidth={strokeWidth[size]}
          strokeOpacity={0.2}
        />
      </svg>

      {/* Rotating half-circle arc */}
      <svg
        className="absolute inset-0 animate-spin"
        style={{ animationDuration: "1.2s" }}
        viewBox={`0 0 ${viewBox[size]} ${viewBox[size]}`}
        fill="none"
      >
        <circle
          cx={viewBox[size] / 2}
          cy={viewBox[size] / 2}
          r={circleRadius[size]}
          stroke="hsl(var(--primary))"
          strokeWidth={strokeWidth[size]}
          strokeLinecap="round"
          strokeDasharray={`${halfCircumference} ${halfCircumference}`}
        />
      </svg>

      {/* Logo in center */}
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
