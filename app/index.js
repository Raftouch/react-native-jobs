import { FlatList, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Navbar from './components/Navbar'
import NewTodo from './components/NewTodo'
import { useState } from 'react'
import Todo from './components/Todo'

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, value: 'Walk my dog' },
    { id: 2, value: 'Bake a cake' },
    { id: 3, value: 'Search for jobs' },
    { id: 4, value: 'Call mom' },
    { id: 5, value: 'Buy tea & rice' },
    { id: 6, value: 'Finish my project' },
    { id: 7, value: 'Go swimming' },
    { id: 8, value: 'Prepare dinner' },
    { id: 9, value: 'Buy a table' },
    { id: 10, value: 'Read all emails' },
  ])

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
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
        keyExtractor={(todo) => todo.id}
      />
    </View>
  )
}

export default Home
