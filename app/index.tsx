import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size={40} color={'blue'}/>
      <Text>Carregando...</Text>
    </View>
  );
}