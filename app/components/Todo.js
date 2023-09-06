import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Todo = ({ todo, onRemove }) => {
  const longPressHandler = () => {
    onRemove(todo.id)
  }

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => console.log('Hello', todo.id)}
      onLongPress={longPressHandler}
    >
      <View style={tw`mx-4 my-1 p-2 bg-pink-700`}>
        <Text style={tw`text-white font-bold`}>{todo.value}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Todo
