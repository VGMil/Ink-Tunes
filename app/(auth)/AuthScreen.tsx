import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import CustomText from '@/components/ui/CustomText';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const AuthScreen = () => {

  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
      <SafeAreaView className='flex-1 justify-start items-center gap-4 p-6 -mt-4'>
        {/* header */}
      <View className='bg-teal-50 rounded-full p-4 items-center justify-center border-teal-500 border-2'>
         {/* // 24 en register / 96 en login */}
        <Ionicons name="musical-notes-outline" size={isLogin?96:24} color="teal" />
      </View>
       {/* // h2 en register / h1 en login */}
      <CustomText category={(isLogin)?'h1':'h2'} color='black' className='font-bold'>inkTunes</CustomText>
      {/* // span en register / p en login */}
      <CustomText category={(isLogin)?'p':'span'} color='gray' className='-mt-4'>Tu Musica empieza Aqui</CustomText> 
      {/* Form */}
      {
        (isLogin)?
          <LoginForm 
          changeToRegister={() => setIsLogin(false)}
          />
        :
          <RegisterForm
          changeToLogin={() => setIsLogin(true)}
          />
      }
    </SafeAreaView>
  )
}

export default AuthScreen