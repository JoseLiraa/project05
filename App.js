import React, { useEffect } from "react";
import Home from './src/Screens/Home';
import Menu from "./src/Screens/Menu";
import PokemonDetails from "./src/Screens/PokemonDetails";
import RNBootSplash from "react-native-bootsplash";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function App(){  
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const init = async () => {
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      </Stack.Navigator>
  </NavigationContainer>
    )
}
export default App;