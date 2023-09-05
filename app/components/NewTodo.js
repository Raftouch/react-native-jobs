import React, { useState } from 'react'
import { Alert, Button, TextInput, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const NewTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('')

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value)
      setValue('')
    } else {
      Alert.alert('Please add a todo')
    }
  }

  return (
    <View style={tw`flex-row justify-between p-4`}>
      <TextInput
        style={tw`w-60 border px-2`}
        placeholder="type your todo here"
        value={value}
        onChangeText={setValue}
        autoCorrect={false}
      />
      <Button title=" + " onPress={pressHandler} />
    </View>
  )
}

export default NewTodo
