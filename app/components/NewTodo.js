import React from 'react'
import { Button, TextInput, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const NewTodo = () => {
  return (
    <View style={tw`flex-row justify-between p-4`}>
      <TextInput style={tw`w-60 border px-2`} value="type your todo here" />
      <Button title=" + " />
    </View>
  )
}

export default NewTodo
