import { Text, StyleSheet ,View } from "react-native";
import { useUser } from "@clerk/clerk-expo"
import { Link } from "expo-router";
 
export default function Home(){
    const { user } = useUser();


    return(
        <View>
            <Text>Pagina Home</Text>
            <Text>Email: {user?.emailAddresses[0].emailAddress}</Text>

            <Link href='/profile'>
            Meu perfil
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
})


