import React from 'react'
import { Text } from 'react-native'

type CategoryText = 'h1'|'h2'|'h3'|'p'|'span'|'link'
type ColorText = 'white'|'black'|'teal'|'gold'|'gray'


interface CustomTextProps{
    children:React.ReactNode
    category?:CategoryText
    color?:ColorText
    className?:string
}

const CustomText = ({
    children,
    category = 'p',
    color = 'black',
    className
}:CustomTextProps) => {
  return (
      <Text className={getStylesText(category,color,className)}>{children}</Text>
  )
}

const getStylesText = (category:CategoryText,color:ColorText, className?:string)=> {
    return `${className} ${setCategoryStyle(category)} ${setColorStyle(color)}`
}

const setCategoryStyle = (category:CategoryText)=>{
    switch(category){
        case 'h1':
            return 'text-4xl'
        case 'h2':
            return 'text-3xl'
        case 'h3':
            return 'text-2xl'
        case 'p':
            return 'text-xl'
        case 'span':
            return 'text-lg'
        case 'link':
            return 'text-md'
        default:
            return 'text-xl'
    }
}

const setColorStyle = (color:ColorText)=>{
    switch(color){
        case 'white':
            return 'text-white'
        case 'black':
            return 'text-black'
        case 'teal':
            return 'text-teal-500'
        case 'gold':
            return 'text-gold'
        case 'gray':
            return 'text-gray-500'
        default:
            return 'text-white'
    }
}



export default CustomText

