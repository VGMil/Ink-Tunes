import Button from '@/components/ui/Button'
import CustomText from '@/components/ui/CustomText'
import React from 'react'
import { View } from 'react-native'

const AuthScreen = () => {
  return (
    <View className='flex-1 justify-center items-center gap-4'>
      <CustomText category='h1' className='font-bold'>AuthScreen</CustomText>
      <Button category='primary' size='sm'>
        <CustomText color='white' category='span'>Hola</CustomText>
      </Button>
      <Button category='primary' disabled>
        <CustomText color='gray' category='span'>Hola</CustomText>
      </Button>
      <Button category='secondary'>
        <CustomText color='black' category='span'>Hola</CustomText>
      </Button>
      <Button category='success'>
        <CustomText color='white' category='span'>Hola</CustomText>
      </Button>
      <Button category='warning'>
        <CustomText color='white' category='span'>Hola</CustomText>
      </Button>
      <Button category='danger'>
        <CustomText color='white' category='span'>Hola</CustomText>
      </Button>
    </View>
  )
}

export default AuthScreen