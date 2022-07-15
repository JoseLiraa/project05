import React, {useState, useEffect} from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { queryPoke } from '../../Utils';
import CardDetails from './Components/CardDetails';
import InfoSection from './Components/InfoSection';

const PokemonDetails = ({route}) => {
    const {item} = route.params;

    return (
        <View style={styles.container}>              
            <CardDetails infoPokeDetails ={item}/>
            <InfoSection infoPokeDetails ={item}/>
        </View>
    );
};

export default PokemonDetails;