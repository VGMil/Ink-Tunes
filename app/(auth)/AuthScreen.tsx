import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import CustomText from '@/components/ui/CustomText';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const AnimatedIonicon = Animated.createAnimatedComponent(Ionicons);

const AuthScreen = () => {
  const [handleForm, setHandleForm] = useState<boolean>(false);
  const translate = useSharedValue(2000);
  const iconFont = useSharedValue(24);

  useEffect(() => {
    translate.value = withTiming(0, {
      duration: 500,
      easing: Easing.inOut(Easing.quad)
    })
    iconFont.value = withTiming(handleForm ? 96 : 24, {
      duration: 500,
      easing: Easing.inOut(Easing.quad)
    })

    return () => {
      translate.value = 2000;
    }
  }, [handleForm])

  const handleTranslate = useAnimatedStyle(() => {return {transform: [{translateY: translate.value}]}});
  const handleIconFont = useAnimatedStyle(() => {return {fontSize: iconFont.value}});;

  return (
    <SafeAreaView className='flex-1 justify-start items-center gap-4 p-6 -mt-4'>
      {/* header */}
      <View className='bg-teal-50 rounded-full p-4 items-center justify-center border-teal-500 border-2'>
        {/* // 24 en register / 96 en login */}
        <AnimatedIonicon name="musical-notes-outline" color="teal" style={handleIconFont} />
      </View>
      {/* // h2 en register / h1 en login */}
      <CustomText category={(handleForm) ? 'h1' : 'h2'} color='black' className='font-bold'>inkTunes</CustomText>
      {/* // span en register / p en login */}
      <CustomText category={(handleForm) ? 'p' : 'span'} color='gray' className='-mt-4'>Tu Musica empieza Aqui</CustomText>
      {/* Form */}
      <Animated.View style={handleTranslate}>
        {
          (handleForm) ?
            <LoginForm
              changeToRegister={() => setHandleForm(false)}
            />
            :
            <RegisterForm
              changeToLogin={() => setHandleForm(true)}
            />
        }
      </Animated.View>
    </SafeAreaView>
  )
}

export default AuthScreen