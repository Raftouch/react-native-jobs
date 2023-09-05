import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Navbar from './components/Navbar'
import NewTodo from './components/NewTodo'

const Home = () => {
  return (
    <View style={tw`h-full`}>
      <Navbar />
      <NewTodo />
    </View>
  )
}

export default Home
