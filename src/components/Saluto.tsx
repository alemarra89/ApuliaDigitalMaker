import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

interface Props {
    nome: string
    color?: string
}

const SalutoComponent: React.VFC<Props> = (props: Props) => {

    const [showNome, setShowNome] = useState<boolean>(true);

    const toggle = () => {
        setShowNome(!showNome);
    }

    return (
        <View style={styles.salutoContainer}>

            <Text style={[
                styles.salutoText, {
                    color: props.color || styles.salutoText.color
                }
            ]}>Ciao {showNome ? props.nome : ''}</Text>

            <Button title="Mostra/Nascondi nome" onPress={toggle} />

        </View>
    );
}

const styles = StyleSheet.create({
    salutoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        borderStyle: "dashed",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCC'
    },
    salutoText: {
        fontSize: 40,
        // color: '#'
        color: '#00F'
    }
});

export default SalutoComponent;