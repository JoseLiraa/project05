import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from './Components/Button';

const Menu = ({navigation}) => {

    return (
        <View style={styles.container}>              
            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={ () => navigation.navigate('Home', {generation: 'first'})}>
                    <Button 
                        info = 'First Generation' 
                        customStyleButton={styles.firstCustomButton} />
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={ () => navigation.navigate('Home', {generation: 'second'})}>
                    <Button 
                        info = 'Second Generation' 
                        customStyleButton={styles.secondCustomButtom} />
            </TouchableOpacity>            
        </View>
    );
};

export default Menu;

