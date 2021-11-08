import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">

const Home: React.VFC<Props> = (props: Props) => {

  return (
    <SafeAreaView>
      <View>
        <Text>Homepageeeeee</Text>
        <Text>1 secondo</Text>

        <Button title="Vai all'esercitazione" onPress={() => props.navigation.navigate("Esercitazione")} />
        <Button title="Listaaaa" onPress={() => props.navigation.navigate("Lista")} />
        <Button title="Vedi risultati quiz" onPress={() => props.navigation.navigate("DatiQuiz")} />
        <Button title="MARCO" onPress={() => props.navigation.navigate("PaginaConParametriGrazieMarco", {
          parametro: 'Ciccio'
        })} />
        <Button title="MARCO senza Ciccio" onPress={() => props.navigation.navigate("PaginaConParametriGrazieMarco", {
          parametro: 'Pinco pallino'
        })} />

      </View>
    </SafeAreaView>
  )
}

export default Home;