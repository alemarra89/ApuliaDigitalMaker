import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "DatiQuiz">

const DatiQuiz: React.VFC<Props> = (props: Props) => {

    return (
        <SafeAreaView>
            <View>
                <Text>Dati Quiz</Text>

            </View>
        </SafeAreaView>
    )
}

export default DatiQuiz;