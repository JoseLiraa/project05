import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { queryPoke } from '../../Utils';
import first from '../../../assets/images/01.png';
import BackgroundCard from '../../../assets/images/Pokeball-Cards.png';
import Arrow from '../../../assets/images/arrow.png';

const PokemonDetails = ({navigation}) => {
    console.log(queryPoke('bulbasaur'))

    return (
        <View style={styles.container}>              
            <View style={styles.containerCard}>  
                <View style={styles.firstContainerCard}>
                    <Image
                        source={BackgroundCard}
                        resizeMode= 'contain' 
                        style={styles.backGroundImageCard}   
                    /> 
                    <Image 
                        style={styles.imagePokemon}
                        source={first}
                    />
                </View>
                <View style={styles.secondContainerCard}>  
                    <Text style={styles.idPokemon}>#1</Text>
                    <Text style={styles.namePokemon}>Bulbasaur</Text>
                    <View style={styles.typePokemonContainer}>
                        <View style={styles.TypePokemon}>  
                            <Text style={styles.textTypePokemon}> Grass</Text>
                        </View>
                        <View style={styles.TypePokemon}>  
                            <Text style={styles.textTypePokemon}> Poison</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.infoWrapper}>
                <View style={styles.aboutWrapper}>
                    <Text style={styles.titleText}>About</Text>
                    <Text style={styles.text}>Bulbasaur can be seen napping in bright sunlight. There is a
                    seed on its back. By soaking up the sun's rays, the seed grows 
                    progressively larger.</Text>
                </View>
                <View style={styles.pokeDataWrapper}>
                    <Text style={styles.titleText}>Pokedex Data</Text>
                    <View style={styles.pokeData}>
                        <Text>Height: </Text>
                        <Text style={styles.text}>0.7 m</Text>
                        <Text>Weight: </Text>
                        <Text style={styles.text}>6.9 kg</Text>
                    </View>
                </View>
                <View style={styles.evolutionWrapper}>
                    <Text style={styles.titleText}>Evolution Chain</Text>
                    <View style={styles.firstEvolution}>
                        <View style={styles.arrowContainer}>
                            <Image 
                                style={styles.imagePokemonEvo}
                                source={first}
                            />
                            <Text style={styles.text}>#1</Text>
                            <Text>Bulbasaur</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image 
                                style={styles.imageArrow}
                                source={Arrow}
                            />
                            <Text>(level 16)</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image 
                                style={styles.imagePokemonEvo}
                                source={first}
                            />
                            <Text style={styles.text}>#1</Text>
                            <Text>Bulbasaur</Text>
                        </View>
                    </View>
                    <View style={styles.firstEvolution}>
                        <View style={styles.arrowContainer}>
                            <Image 
                                style={styles.imagePokemonEvo}
                                source={first}
                            />
                            <Text style={styles.text}>#1</Text>
                            <Text>Bulbasaur</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image 
                                style={styles.imageArrow}
                                source={Arrow}
                            />
                            <Text>(level 32)</Text>
                        </View>
                        <View style={styles.arrowContainer}>
                            <Image 
                                style={styles.imagePokemonEvo}
                                source={first}
                            />
                            <Text style={styles.text}>#1</Text>
                            <Text>Bulbasaur</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PokemonDetails;