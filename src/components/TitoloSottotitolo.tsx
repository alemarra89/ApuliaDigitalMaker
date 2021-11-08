import React from "react";
import { StyleSheet, Text } from "react-native";

interface Props {
    titolo: string
    sottotitolo: string
}

const TitoloSottotitoloComponent = (props: Props) => {

    return (
        <>
            <Text style={styles.titolo}>{props.titolo}</Text>
            <Text style={styles.sottotitolo}>{props.sottotitolo}</Text>
        </>
    );

};



const styles = StyleSheet.create({
    titolo: {
        fontSize: 24,
        color: '#000'
    },
    sottotitolo: {
        fontSize: 18,
        fontStyle: 'italic'
    }
});



export default TitoloSottotitoloComponent;