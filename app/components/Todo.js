import React from 'react'
import { Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Todo = ({ todo }) => {
  return (
    <View style={tw`mx-4 my-1 p-2 bg-pink-700`}>
      <Text style={tw`text-white font-bold`}>{todo.value}</Text>
    </View>
  )
}

export default Todo
