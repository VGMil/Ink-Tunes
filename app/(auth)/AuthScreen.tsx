import LoginForm from '@/components/auth/LoginForm';
import CustomText from '@/components/ui/CustomText';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const AuthScreen = () => {
  return (
    <SafeAreaView className='flex-1 justify-start items-center gap-4 p-4'>
      {/* header */}
      <View className='bg-teal-50 rounded-full p-4 items-center justify-center border-teal-500 border-2'>
        <Ionicons name="musical-notes-outline" size={96} color="teal" />
      </View>
      <CustomText category='h1' color='black' className='font-bold'>inkTunes</CustomText>
      <CustomText category="p" color='gray'>Tu Musica empieza Aqui</CustomText>
      {/* Form */}
      <LoginForm></LoginForm>

    </SafeAreaView>
  )
}

export default AuthScreen