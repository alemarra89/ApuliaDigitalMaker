import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Lista">

const Lista: React.VFC<Props> = (props: Props) => {

    // const [elementi, setElementi] = useState<string[]>([]);
    const [elementi, setElementi] = useState<Array<string>>([]);

    const [value, setValue] = useState<string>('');


    const aggiungiElemento = () => {
        setElementi([...elementi, value]);
        setValue('');
    }

    return (
        <SafeAreaView style={styles.container}>


            <TextInput style={styles.input} value={value}
                onChangeText={setValue}
                // onChangeText={(text: string) => setValue(text)}
                placeholder="Inserire Fabio"
            />

            <Button title="Aggiungi alla lista" onPress={() => aggiungiElemento()} disabled={!value} />

            <View style={{ borderTopWidth: 1, marginTop: 10 }}>

                <ScrollView>
                    {elementi.map((elemento: string, index: number) => (
                        <View key={'elemento_' + index}>
                            <Text style={styles.elemento}>{index + 1}. {elemento}</Text>
                        </View>
                    ))}
                </ScrollView>

            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    input: {
        backgroundColor: '#FFF',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        fontSize: 24
    },
    elemento: {
        marginTop: 5,
        fontSize: 20
    }
});

export default Lista;