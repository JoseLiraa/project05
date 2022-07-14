import React from 'react';
import { View, Text } from 'react-native';

const PokemonType = ({customStyleContainer, customStyleText, keyType, typeName}) => {

    return (
        <>
        <View style={customStyleContainer}>  
            <Text style={customStyleText} key={keyType}>
                {typeName}
            </Text>
        </View>
        </>
    );
};

export default PokemonType;