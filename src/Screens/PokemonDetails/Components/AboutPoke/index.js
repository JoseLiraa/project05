import React from 'react';
import { Text, FlatList } from 'react-native';
import styles from './styles';


const AboutPoke = ({aboutPoke}) => {

    const keyExtractor = ( item, index ) => `${item}-${index}`;
    return (
        <>         
        <FlatList 
            data={aboutPoke} 
            keyExtractor = {keyExtractor}
            renderItem = {({item}) => (                        
                <Text style={styles.text}>{item.flavor_text_entries[6].flavor_text}</Text>
            )}                     
        />

        </>
    );
};

export default AboutPoke;