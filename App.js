import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screen/HomeScreen';
import MapScreen from './screen/MapScreen';
import EatsScreen from './screen/EatsScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {

  // const Stack = createNativeStackNavigator();
  const Stack = createStackNavigator();


  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>


          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS==="ios"?-64:0}
            style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="HomeScreen"
              screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
              }}>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
              <Stack.Screen name="EatsScreen" component={EatsScreen} options={{
                title: "Eats"
              }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>






        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

