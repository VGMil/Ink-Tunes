import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useRef } from 'react';
import { Pressable, TextInput, TextInputProps, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import CustomText from './CustomText';

interface InputFieldProps extends TextInputProps {
    label: string;
    error?: string;
    touched?: boolean;
    icon?: string;
}

const InputField = ({
    label,
    error = '',
    touched = false,
    icon = '',
    ...props
}: InputFieldProps) => {
    const shakeText = useSharedValue(0);
    const inputRef = useRef<TextInput>(null);

    useEffect(() => {
        if (error && touched) {
            shakeText.value = withSequence(
                withRepeat(
                    withTiming(5, { duration: 100 }),
                    5,
                    true
                ),
                withTiming(0),
            )
        } else {
            shakeText.value = withTiming(0);
        }
    }, [error, touched]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: shakeText.value }]
    }));

    function selectStyleField(touched: boolean, error: string) {
        if (error && touched) return 'border-red-500';
        if (touched) return 'border-black';
        return 'border-gray-400';
    }
    function selectIconColor(touched: boolean, error: string) {
        if (error && touched) return 'red';
        if (touched) return 'black';
        return 'gray';
    }
    return (
        <View className="justify-start">
            <CustomText color={error ? 'error' : 'black'} category="span">
                {label}
            </CustomText>
            
            <Pressable 
                onPress={() => inputRef.current?.focus()}
                className={`px-4 py-0 flex-row items-center border-2 ${selectStyleField(touched, error)}`}
            >
                {icon && icon.length > 0 &&
                    <Ionicons
                        name={icon as any}
                        size={24}
                        color={selectIconColor(touched, error)}
                        className="mr-2"
                    />
                }
                <TextInput
                    ref={inputRef}
                    {...props}
                    className={`flex-1 py-4 ${error && touched ? 'text-red-500' : 'text-black'}`}
                />
            </Pressable>
            
            {error && touched && (
                <Animated.View style={animatedStyle} className="w-full mt-0">
                    <CustomText color="error" category="span">
                        {error}
                    </CustomText>
                </Animated.View>
            )}
        </View>
    )
}

export default InputField