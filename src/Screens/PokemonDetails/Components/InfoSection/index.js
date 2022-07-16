import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';
import { backgroundType } from '../../../../../assets/Colors';
import EvolutionChain from '../EvolutionChain';
import { getHeightOrWeight, parseName, getPath } from '../../../../Utils';
import AboutPoke from '../AboutPoke';


const InfoSection = ({infoPokeDetails}) => {

    const pokeType = infoPokeDetails.types[0].type.name;
    const evolutionPokemon = infoPokeDetails.species.url;
    const [pokeEvoChain, setPokeEvoChain] = useState({});
    const [loadingIndicator, setLoadingIndicator] = useState(true);

    useEffect(() =>{
        const fetchPokeUrl = async () =>{
            const response = await fetch(evolutionPokemon).then(request => request.json());
            const dataEvolution = await fetch(response.evolution_chain.url).then(request => request.json());
            const dataPokemon = {...response, ...dataEvolution};           
            setPokeEvoChain(dataPokemon); 
            setLoadingIndicator(false);
        };
        fetchPokeUrl();
    }, [])

    const pokeHeight = getHeightOrWeight(infoPokeDetails.height);
    const pokeWeight = getHeightOrWeight(infoPokeDetails.weight);

    return (       
        <>
        <View style={styles.infoWrapper}>
            <View style={styles.aboutWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>About</Text>          
                <AboutPoke aboutPoke={pokeEvoChain} />
            </View> 
            <View style={styles.pokeDataWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>Pokedex Data</Text>
                <View style={styles.pokeData}>
                    <Text>Height: </Text>
                    <Text style={styles.text}>{pokeHeight} m</Text>
                    <Text>Weight: </Text>
                    <Text style={styles.text}>{pokeWeight} kg</Text>
                </View>
                <View style={styles.pokeData2}>
                    <Text>Abilities: </Text>
                    {infoPokeDetails.abilities.map(({ability}, index) =>{
                        return(
                            <Text style={styles.text}>{parseName(ability.name)}</Text>
                        )
                    })}                    
                </View>
            </View>            
            <View style={styles.evolutionWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>Evolution Chain</Text>
                <EvolutionChain 
                item = {pokeEvoChain} 
                colorType = {backgroundType[pokeType]}
                />
            </View>
    </View>
    </>
    );
};

export default InfoSection;