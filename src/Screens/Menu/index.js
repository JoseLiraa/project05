import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from './Components/Button';
import firstGeneration from '../../../assets/images/firstGeneration.png';
import secondGeneration from '../../../assets/images/secondGeneration.png';

const Menu = ({navigation}) => {
    // se puede remplazar con useNavigation
    const handleNavigation = (generation) => {
        navigation.navigate('Home', { generation})
    }

    return (
        <View style={styles.container}>              
            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={ () => handleNavigation('first')}>
                    <Button                         
                        info = 'First Generation' 
                        customStyleButton={styles.firstCustomButton}
                        imageInfo = {firstGeneration} />
            </TouchableOpacity>

            <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={ () => handleNavigation('second')}>
                    <Button                         
                        info = 'Second Generation' 
                        customStyleButton={styles.secondCustomButtom} 
                        imageInfo = {secondGeneration}/>
            </TouchableOpacity>            
        </View>
    );
};

export default Menu;