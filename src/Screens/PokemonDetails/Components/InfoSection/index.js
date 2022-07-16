import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, ScrollView } from 'react-native';
import styles from './styles';
import { backgroundType } from '../../../../../assets/Colors';
import EvolutionChain from '../EvolutionChain';
import { getHeightOrWeight, parseName } from '../../../../Utils';
import AboutPoke from '../AboutPoke';


const InfoSection = ({infoPokeDetails}) => {

    const pokeType = infoPokeDetails.types[0].type.name;
    const evolutionPokemon = infoPokeDetails.species.url;
    const [pokeEvoChain, setPokeEvoChain] = useState([]);
    const [aboutPoke, setAboutPoke] = useState([]);
    const [loadingIndicator, setLoadingIndicator] = useState(true);

    useEffect(() =>{
        const fetchPokeUrl = async () =>{
            const response = await fetch(evolutionPokemon).then(request => request.json());
            const dataEvolution = await fetch(response.evolution_chain.url).then(request => request.json());
            const pokeEvolutionArr = [];
            const responseArr = [];
            pokeEvolutionArr.push(dataEvolution);
            responseArr.push(response);
            setAboutPoke(responseArr);
            setPokeEvoChain(pokeEvolutionArr); 
            setLoadingIndicator(false);
        };
        fetchPokeUrl();
    }, [])

    const keyExtractor = ( item, index ) => `${item}-${index}`;

    return (       
        <>
        <View style={styles.infoWrapper}>
            <View style={styles.aboutWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>About</Text>          
                <AboutPoke  aboutPoke={aboutPoke} />
            </View> 
            <View style={styles.pokeDataWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>Pokedex Data</Text>
                <View style={styles.pokeData}>
                    <Text>Height: </Text>
                    <Text style={styles.text}>{getHeightOrWeight(infoPokeDetails.height)} m</Text>
                    <Text>Weight: </Text>
                    <Text style={styles.text}>{getHeightOrWeight(infoPokeDetails.weight)} kg</Text>
                </View>
                <View style={styles.pokeData2}>
                    <Text>Abilities: </Text>
                    {infoPokeDetails.abilities.map(({ability}, index) =>{
                        return(
                            <Text style={styles.text}>
                                {parseName(ability.name)}
                                </Text>
                        )
                    })}                    
                </View>
            </View>            
            <View style={styles.evolutionWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>Evolution Chain</Text>
                <FlatList 
                    style={styles.flatStyle}
                    data={pokeEvoChain} 
                    keyExtractor = {keyExtractor}
                    renderItem = {({item}) => (                        
                        <EvolutionChain item={item} infoPokeDetails={infoPokeDetails} />
                    )}
                    ListEmptyComponent = {() => (
                        <>
                            {
                                loadingIndicator && (
                                <ActivityIndicator                
                                    color = {backgroundType[pokeType]}
                                    size = "large"
                                    style = {styles.activityIndicator}/>                     
                                )
                            }
                        </>
                        )}     
                />
            </View>
    </View>
    </>
    );
};

export default InfoSection;