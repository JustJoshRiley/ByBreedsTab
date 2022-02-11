import React from "react";
import { StyleSheet, View, Text} from 'react-native'
import Feature from "./feature";

function Item(props) {
    const {dog, index} = props
    const { breed } = dog
    const keys = Object.keys(dog).filter(key => key != 'breed')

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{index}: {breed}</Text>
            <View style={styles.propContainer}>
                {keys.map(key => { 
                let rate = "";
                for(let i = 0; i < dog[key]; i += 1) {
                    rate += "⭐️"
                }
                return (
                <Feature name={key} value={rate} />
                // <Text>{key}: {rate}</Text>
                )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        paddingTop: 20,
        paddingBottom: 20,
        width: 390,
    },

    header: {
        width: '100%',
        color: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        fontSize: 25,
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