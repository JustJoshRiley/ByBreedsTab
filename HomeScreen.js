import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, SafeAreaView, Text } from 'react-native';

function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <View>
                <Text style={styles.MainText}>Select Tab Below to View Cats or Dogs</Text>
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
        container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        },
        MainText: {
            color:'pink',
            fontSize: 24,
            textAlign: "center"
        }
    
});

export default HomeScreen;