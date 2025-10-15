import Button from '@/components/ui/Button'
import React from 'react'
import { Text, View } from 'react-native'

const AuthScreen = () => {
  return (
    <View className='flex-1 justify-center items-center gap-4'>
      <Text className='text-3xl bold'>AuthScreen</Text>
      <Button category='primary' size='sm'>
        <Text>Hola</Text>
      </Button>
      <Button category='primary' size='sm' disabled>
        <Text>Hola</Text>
      </Button>
      <Button category='secondary'>
        <Text>Hola</Text>
      </Button>
      <Button category='success'>
        <Text>Hola</Text>
      </Button>
      <Button category='warning'>
        <Text>Hola</Text>
      </Button>
      <Button category='danger'>
        <Text>Hola</Text>
      </Button>
    </View>
  )
}

export default AuthScreen