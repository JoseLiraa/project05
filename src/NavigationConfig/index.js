import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Menu from "../Screens/Menu";
import PokemonDetails from "../Screens/PokemonDetails";

const NavigationConfig = () => {
    const Stack = createNativeStackNavigator();

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
export default NavigationConfig;