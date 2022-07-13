import React from 'react';
import { Image, Text } from 'react-native';
import styles from './styles';
import Background from '../../../assets/images/Pokeball-Header.png';

const Header = ({titleGeneration}) => {
  
    return (
        <>
          <Image 
            source={Background}
            resizeMode= 'contain'
            style={styles.backGroundImage} />  
          <Text style={styles.title}>{titleGeneration}</Text>
        </>
    );
  };



export default Header;