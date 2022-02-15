import React from "react";
import { StyleSheet, View, Text} from 'react-native'
// import Feature from "./feature";

function Item(props) {
    const {dog, index} = props
    const { breed } = dog

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{index}: {breed}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        color: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },

    propContainer: {
        width: '100%',
        display:"flex",
        justifyContent: "center",
        alignItems:"center"
    },

});
export default Item;