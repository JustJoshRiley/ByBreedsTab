import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView, Platform, StyleSheet, View, FlatList, SafeAreaView, TextInput, Text, Button } from 'react-native';
import Item from './item';
import {dogs} from './breeds';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feature from './feature';

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.kav}
      >

        <View style={styles.listContainer}>
          <FlatList
            data={dogs.filter(item  => item.breed.includes(search))}
            renderItem={({item, index}) => {
              // console.log(item)
              return (
              <View style={styles.itemContainer}>
                <Item dog={item} index={index}/>
                <Button
                  title='Details'
                  onPress={() => navigation.navigate('Features', {
                  item:{item}
                  })}
                />
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

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Features" component={Feature}/>
      </Stack.Navigator>
    </NavigationContainer>
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
    height: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    
  },
  itemContainer: {
    backgroundColor: 'grey',
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

export default App;