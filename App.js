import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, View, FlatList, SafeAreaView, TextInput } from 'react-native';
import Item from './item';
import {dogs} from './breeds';

export default function App() {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >

        <StatusBar style="light" />
        <View style={styles.listContainer}>
          <FlatList
            data={dogs.filter(item  => item.breed.includes(search))}
            renderItem={({item, index}) => {
              return <Item dog={item} index={index}/>
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

  );
}

const styles = StyleSheet.create({
  kav: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    // marginBottom: 75,
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    
  },
  listContainer: {
    width: '100%'
  },
  search: {
    fontSize: 24,
    padding: 10,
    backgroundColor:"pink",
    color:"white",
    width:"100%",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    textAlign:"center",
    height: 50,
    width: '100%',
    marginBottom: 30,
    borderWidth: 10,
    borderColor: "black"
  }
});
