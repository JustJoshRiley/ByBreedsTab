import React from "react";

import {View, Text, StyleSheet} from 'react-native'

function Feature({name, value}) {
    return (
        <View style={styles.keysContainer}>
            <Text style={styles.featureName}>{name}</Text>
            <Text style={styles.featureValue}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    keysContainer: {
        display:"flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width:'90%',
        margin: 5,
    },
    featureName: {
        fontWeight: "bold"
    },
})
export default Feature;