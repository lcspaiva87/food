import { Image, Text, View } from "react-native";

export function Header(){
  return(
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image 
        source={require('../assets/logo.png')}
        className="h-6 w-6"
        />
        <Text className="text-white text-lg font-bold">Cardápio</Text>
      </View>
      </View>
  )
}