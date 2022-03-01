import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, View, FlatList, SafeAreaView, TextInput, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Item from './item';
import {cats} from './breeds';
import Feature from './feature';

const CatStack = createStackNavigator();


function Cats({navigation}) {
    const [search, setSearch] = useState('')
    return (
        <>
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.kav}
            >
            <View style={styles.listContainer}>
            <FlatList
                data={cats.filter(item  => item.breed.includes(search))}
                renderItem={({item, index}) => {
                // console.log(item)
                return (
                <View style={styles.itemContainer}>
                    <Item dog={item} index={index}/>
                    {/* <Button
                    title='Details'
                    onPress={() => navigation.navigate('Feature', {
                    item:{item}
                    })}
                    /> */}
                </View>
                )
                }}
                keyExtractor={item => item.breed}
            />
            
            </View>
            <TextInput 
                style={styles.search}
                placeholder='Search Breed'
                onChangeText={setSearch}
                value={search}
            />
        </KeyboardAvoidingView>
        </SafeAreaView>
        </>
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
    itemContainer: {
        backgroundColor: '#2B2B2B',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 2,
        paddingTop: 10,
        paddingBottom: 10,
        width: 390,
    },
    listContainer: {
        width: '100%'
    },
    search: {
        fontSize: 24,
        padding: 5,
        backgroundColor:"pink",
        color:"white",
        width:"100%",
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        textAlign:"center",
        height: 75,
        width: '100%',
        marginBottom: 40,
        borderWidth: 10,
        borderColor: "black"
    }
});

export default Cats;