import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Button = ({ info, customStyleButton }) => {

    return (
        <View style={[styles.containerButton, customStyleButton]}> 
            <Text style={styles.text}>{info}</Text>
        </View>
    );
};

export default Button;