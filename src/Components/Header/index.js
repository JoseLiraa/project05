import React from 'react';
import { Image, Text } from 'react-native';
import styles from './styles';
import Background from '../../../assets/images/Pokeball-Header.png';

const Header = () => {
  
    return (
        <>
          <Image 
            source={Background}
            resizeMode= 'contain'
            style={styles.backGroundImage} />  
          <Text style={styles.title}>Pokedex</Text>
        </>
    );
  };



export default Header;