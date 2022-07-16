import React from 'react';
import { Text, FlatList } from 'react-native';
import styles from './styles';


const AboutPoke = ({aboutPoke}) => {

    if(!!aboutPoke?.flavor_text_entries){
        return (
            <>         
            <Text style={styles.text}>{aboutPoke?.flavor_text_entries[6]?.flavor_text}</Text>     
            </>
        );
    }
    return null;
    
};

export default AboutPoke;