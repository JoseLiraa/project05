import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CardDetails from './Components/CardDetails';
import InfoSection from './Components/InfoSection';

const PokemonDetails = ({route}) => {
    const {item} = route.params;     

    return (
        <View style={styles.container}>              
            <CardDetails infoPokeDetails ={item}/>
            <InfoSection infoPokeDetails ={item} />
        </View>
    );
};

export default PokemonDetails;