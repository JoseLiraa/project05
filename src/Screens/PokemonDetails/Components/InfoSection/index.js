import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { typePoke, backgroundType, texts } from '../../../../../assets/Colors';
import Arrow from '../../../../../assets/images/arrow.png';
import { parseName } from '../../../../Utils';

const InfoSection = ({infoPokeDetails}) => {

    const getHeight = infoPokeDetails.height/10;
    const getWeight = infoPokeDetails.weight/10;
    const pokeType = infoPokeDetails.types[0].type.name;  

    return (       
        <View style={styles.infoWrapper}>
            <View style={styles.aboutWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>About</Text>
                <Text style={styles.text}>Bulbasaur can be seen napping in bright sunlight. There is a
                seed on its back. By soaking up the sun's rays, the seed grows 
                progressively larger.</Text>
            </View> 
            <View style={styles.pokeDataWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>Pokedex Data</Text>
                <View style={styles.pokeData}>
                    <Text>Height: </Text>
                    <Text style={styles.text}>{getHeight} m</Text>
                    <Text>Weight: </Text>
                    <Text style={styles.text}>{getWeight} kg</Text>
                </View>
            </View>
            <View style={styles.evolutionWrapper}>
                <Text style={[styles.titleText, {color: backgroundType[pokeType]}]}>Evolution Chain</Text>
                <View style={styles.firstEvolution}>
                    <View style={styles.arrowContainer}>
                        <Image 
                            style={styles.imagePokemonEvo}
                            source={{uri : infoPokeDetails.sprites.front_default}}
                        />
                        <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                        <Text>{parseName(infoPokeDetails.name)}</Text>
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
                            source={{uri : infoPokeDetails.sprites.front_default}}
                        />
                        <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                        <Text>{parseName(infoPokeDetails.name)}</Text>
                    </View>
                </View>
                <View style={styles.firstEvolution}>
                    <View style={styles.arrowContainer}>
                        <Image 
                            style={styles.imagePokemonEvo}
                            source={{uri : infoPokeDetails.sprites.front_default}}
                        />
                        <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                        <Text>{parseName(infoPokeDetails.name)}</Text>
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
                            source={{uri : infoPokeDetails.sprites.front_default}}
                        />
                        <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                        <Text>{parseName(infoPokeDetails.name)}</Text>
                    </View>
                </View>
            </View>
    </View>
    );
};

export default InfoSection;