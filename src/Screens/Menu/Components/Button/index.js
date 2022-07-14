import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Button = ({ info, customStyleButton, imageInfo }) => {    
    return (
        <View style={[styles.containerButton, customStyleButton]}> 
            <Text style={styles.text}>{info}</Text>
            <Image
                source={imageInfo}
                resizeMode= 'contain'
                style={styles.backGroundImage}   
            /> 
        </View>
    );
};

export default Button;