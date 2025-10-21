import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all necessary screen components
import HomeScreen from './components/HomeScreen'; 
import LuxuryPretScreen from './components/LuxuryPretScreen';
import SummerCollectionScreen from './components/SummerCollectionScreen'; 
// Note: You must ensure LuxuryPretScreen.js and SummerCollectionScreen.js exist in 'components'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
          headerShown: false // Hides the header for all screens
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Winter Screen - MUST match 'LuxuryPret' route in HomeScreen.js */}
        <Stack.Screen name="LuxuryPret" component={LuxuryPretScreen} /> 
        {/* Summer Screen - MUST match 'SummerCollection' route in HomeScreen.js */}
        <Stack.Screen name="SummerCollection" component={SummerCollectionScreen} /> 
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}