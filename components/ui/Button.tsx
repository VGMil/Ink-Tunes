import React from "react";
import { TouchableOpacity } from "react-native";

type ButtonCategory =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline";

interface ButtonProps {
  category?: ButtonCategory;
  children?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  onPress?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  category = "primary",
  children,
  size = "md",
  variant = "solid",
  onPress,
  disabled = false,
  fullWidth = false,
  className
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`border-2 p-3 size-fit 
        ${getButtonStyles(
            category,
            variant,
            size,
            disabled,
            fullWidth
        )}
        ${className}`}
    >
      {children}
    </TouchableOpacity>
  );
};

function getButtonStyles(
  category: ButtonCategory,
  variant: ButtonVariant,
  size: ButtonSize,
  disabled: boolean,
  fullWidth: boolean
): string {
  const sizeStyles = getSizeStyles(size);
  const widthStyle = fullWidth ? "w-full" : "min-w-[80px]";
  const disabledStyle = disabled ? "opacity-20" : ""
  const baseStyles = `items-center justify-center ${sizeStyles} ${widthStyle} ${disabledStyle}`;

  if (variant === "outline") {
    return `${baseStyles} border-2 bg-transparent ${getOutlineStyles(category)}`;
  }

  // Solid variant (default)
  return `${baseStyles} ${getSolidStyles(category)}`;
}

function getSizeStyles(size: ButtonSize): string {
  switch (size) {
    case "sm":
      return "px-3 py-2";
    case "lg":
      return "px-6 py-4";
    default:
      return "px-4 py-3"; // md
  }
}

function getSolidStyles(category: ButtonCategory): string {
  switch (category) {
    case "primary":
      return "bg-teal-500 active:bg-teal-600";
    case "secondary":
      return "bg-white active:bg-gray-300";
    case "success":
      return "bg-green-500 active:bg-green-600";
    case "danger":
      return "bg-red-500 active:bg-red-600";
    case "warning":
      return "bg-orange-400 active:bg-orange-500";
    default:
      return "bg-teal-500 active:bg-teal-600";
  }
}

function getOutlineStyles(category: ButtonCategory): string {
  switch (category) {
    case "primary":
      return "border-teal-500 active:border-teal-600";
    case "secondary":
      return "border-gray-200 active:border-gray-300";
    case "success":
      return "border-green-500 active:border-green-600";
    case "danger":
      return "border-red-500 active:border-red-600";
    case "warning":
      return "border-orange-400 active:border-orange-500";
    default:
      return "border-teal-500 active:border-teal-600";
  }
}

export default Button;
