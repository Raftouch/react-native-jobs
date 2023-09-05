import { View, Text } from 'react-native'
import tw from 'tailwind-react-native-classnames'

const Home = () => {
  return (
    <View style={tw`h-full flex items-center justify-center bg-black`}>
      <Text style={tw`text-white`}>Hi there</Text>
    </View>
  )
}

export default Home
