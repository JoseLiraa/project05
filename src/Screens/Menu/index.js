import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Button from './Components/Button';
import firstGeneration from '../../../assets/images/firstGeneration.png';
import secondGeneration from '../../../assets/images/secondGeneration.png';


const Menu = ({navigation}) => {

    return (
        <View style={styles.container}>              
            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={ () => navigation.navigate('Home', {generation: 'first'})}>
                    <Button                         
                        info = 'First Generation' 
                        customStyleButton={styles.firstCustomButton}
                        imageInfo = {firstGeneration} />
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={ () => navigation.navigate('Home', {generation: 'second'})}>
                    <Button                         
                        info = 'Second Generation' 
                        customStyleButton={styles.secondCustomButtom} 
                        imageInfo = {secondGeneration}/>
            </TouchableOpacity>            

            <TouchableOpacity                 
                onPress={ () => navigation.navigate('PokemonDetails')}>
                    <View><Text>Click aqui</Text></View>
            </TouchableOpacity>       
        </View>
    );
};

export default Menu;