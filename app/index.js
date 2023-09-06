import { FlatList, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Navbar from './components/Navbar'
import NewTodo from './components/NewTodo'
import { useState } from 'react'
import Todo from './components/Todo'

const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (value) => {
    const newTodo = {
      id: Date.now().toString(),
      value,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <View style={tw`h-full`}>
      <Navbar />
      <NewTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  )
}

export default Home
