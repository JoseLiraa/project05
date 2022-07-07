import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from './styles';
import Background from '../../../assets/images/Pokeball-Header.png';

const Header = () => {
  
    return (
        <View>
          <Image 
            source={Background}
            resizeMode= 'contain'
            style={styles.backGroundImage} />  
          <Text style={styles.title}>Pokedex</Text>
       </View>
    );
  };



export default Header;