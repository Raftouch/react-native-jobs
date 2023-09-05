import { View } from 'react-native'
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

  return (
    <View style={tw`h-full`}>
      <Navbar />
      <NewTodo onSubmit={addTodo} />
      <View>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </View>
    </View>
  )
}

export default Home
