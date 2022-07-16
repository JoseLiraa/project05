import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import Arrow from '../../../../../assets/images/arrow.png';
import { parseName} from '../../../../Utils';

const EvolutionChain = ({item, infoPokeDetails}) => {

    return (  
        <>             
            <View style={styles.firstEvolution}>
                <View style={styles.arrowContainer}>
                    <Image 
                        style={styles.imagePokemonEvo}
                        source={{uri : infoPokeDetails.sprites.front_default}}
                    />
                    <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                    <Text>{parseName(item.chain.species.name)}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Image 
                        style={styles.imageArrow}
                        source={Arrow}
                    />
                    <Text>(level {item?.chain?.evolves_to[0]?.evolution_details[0].min_level})</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Image 
                        style={styles.imagePokemonEvo}
                        source={{uri : infoPokeDetails.sprites.front_default}}
                    />
                    <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                    <Text>{parseName(item?.chain?.evolves_to[0]?.species.name)}</Text>
                </View>
            </View>   
            <View style={styles.firstEvolution}>
                <View style={styles.arrowContainer}>
                    <Image 
                        style={styles.imagePokemonEvo}
                        source={{uri : infoPokeDetails.sprites.front_default}}
                    />
                    <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                    <Text>{parseName(item?.chain?.evolves_to[0]?.species.name)}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Image 
                        style={styles.imageArrow}
                        source={Arrow}
                    />
                    <Text>(level {item?.chain?.evolves_to[0]?.evolves_to[0]?.evolution_details[0].min_level})</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Image 
                        style={styles.imagePokemonEvo}
                        source={{uri : infoPokeDetails.sprites.front_default}}
                    />
                    <Text style={styles.text}>#{infoPokeDetails.id}</Text>
                    <Text>{parseName(item?.chain?.evolves_to[0]?.evolves_to[0]?.species.name)}</Text>
                </View>
            </View>     
        </>         
    );
};

export default EvolutionChain;