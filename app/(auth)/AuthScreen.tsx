import ButtonText from '@/components/ui/ButtonText'
import CustomText from '@/components/ui/CustomText'
import React from 'react'
import { View } from 'react-native'

const AuthScreen = () => {
  return (
    <View className='flex-1 justify-center items-center gap-4'>
      <CustomText category='h1' className='font-bold'>AuthScreen</CustomText>
      <ButtonText category='primary' text="Primario"/>
      <ButtonText category='primary' disabled text="Primario"/>
      <ButtonText category='secondary' text="Secundario"/>
      <ButtonText category='success' text="Success"/>
      <ButtonText category='warning' text="Warning"/>
      <ButtonText category='danger' text="Danger"/>
      <ButtonText category='primary' variant='outline' text="Primario outline"/>
      <ButtonText category='secondary' variant='outline' text="Secundario outline"/>
      <ButtonText category='success' variant='outline' text="Success outline"/>
      <ButtonText category='warning' variant='outline' text="Warning outline"/>
      <ButtonText category='danger' variant='outline' text="Danger outline"/>
    </View>
  )
}

export default AuthScreen