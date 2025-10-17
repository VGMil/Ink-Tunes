import React from 'react';
import Button from './Button';
import CustomText from './CustomText';

type ButtonCategory = "primary" | "secondary" | "success" | "danger" | "warning";
type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline";
type ColorText = "white" | "black" | "teal" | "gold" | "gray";

interface ButtonTextProps{
    text:string;
    category?:ButtonCategory;
    size?:ButtonSize;
    variant?:ButtonVariant;
    onPress?:()=>void;
    disabled?:boolean;
    fullWidth?:boolean;
    className?:string
}

const ButtonText = ({
    text,
    category = "primary",
    size = "md",
    variant = "solid",
    onPress,
    disabled = false,
    fullWidth = false,
    className
}:ButtonTextProps) => {
  return (
    <Button 
        category={category}
        size={size}
        variant={variant}
        onPress={onPress}
        disabled={disabled}
        fullWidth={fullWidth}
        className={className}
    >
        <CustomText
            category='span'
            color={getAutoTextColor(category, variant)}
        >
            {text}
        </CustomText>
    </Button>
  )
}


 
  // Auto-select text color based on button category and variant
  const getAutoTextColor = (category: ButtonCategory, variant: ButtonVariant): ColorText => {
    
    if (variant === "outline") {
      switch (category) {
        case "secondary":
            return "black";
        case "warning":
            return "gold";
        default:
            return "teal";
      }
    } else {
      // Solid variant
      switch (category) {
        case "secondary": 
            return "black";
        default: 
            return "white";
      }
    }
  };

export default ButtonText