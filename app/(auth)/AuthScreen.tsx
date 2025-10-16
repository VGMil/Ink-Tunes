import RegisterForm from '@/components/auth/RegisterForm';
import CustomText from '@/components/ui/CustomText';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const AuthScreen = () => {
  return (
      <SafeAreaView className='flex-1 justify-start items-center gap-4 p-6 -mt-4'>
        {/* header */}
      <View className='bg-teal-50 rounded-full p-4 items-center justify-center border-teal-500 border-2'>
        <Ionicons name="musical-notes-outline" size={24} color="teal" /> // 24 en register / 96 en login
      </View>
      <CustomText category='h2' color='black' className='font-bold'>inkTunes</CustomText> // h2 en register / h1 en login
      <CustomText category="span" color='gray' className='-mt-4'>Tu Musica empieza Aqui</CustomText> // span en register / p en login
      {/* Form */}
      {/* <LoginForm></LoginForm> */}
      <RegisterForm></RegisterForm>
    </SafeAreaView>
  )
}

export default AuthScreen