import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import SalutoComponent from "../components/Saluto";
import TitoloSottotitoloComponent from "../components/TitoloSottotitolo";

type Props = NativeStackScreenProps<RootStackParamList, "Esercitazione">

const Esercitazione: React.VFC<Props> = (props: Props) => {

    return (
        <SafeAreaView>
            <View>
                <Text>Questa è la pagina dell'esercitazione</Text>

                <TitoloSottotitoloComponent titolo={'Apulia Digital Maker'} sottotitolo={'Questo è il sottotitolo'} />
                <TitoloSottotitoloComponent titolo={'Secondo titolo'} sottotitolo={'Secondo sottotitolo'} />

                <SalutoComponent nome="Gabriele" color='red' />
                <SalutoComponent nome={"Simone"} />

            </View>
        </SafeAreaView>
    )
}

export default Esercitazione;