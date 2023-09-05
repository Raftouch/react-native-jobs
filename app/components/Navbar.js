import React from 'react'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Navbar = () => {
  return (
    <View style={tw`h-16 bg-gray-800 items-center justify-center`}>
      <Text style={tw`text-white font-bold`}>Todo App</Text>
    </View>
  )
}

export default Navbar
