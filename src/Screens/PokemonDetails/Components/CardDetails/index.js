import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { typePoke, backgroundType, texts} from '../../../../../assets/Colors';
import BackgroundCard from '../../../../../assets/images/Pokeball-Cards.png';
import { parseName } from '../../../../Utils';
import PokemonType from '../../../../Components/PokemonType';

const CardDetails = ({infoPokeDetails}) => {
    const pokeType = infoPokeDetails.types[0].type.name;  

    return (            
            <View style={[styles.containerCard, {backgroundColor: backgroundType[pokeType]}]}> 
                <View style={styles.firstContainerCard}>
                    <Image
                        source={BackgroundCard}
                        resizeMode= 'contain' 
                        style={styles.backGroundImageCard}   
                    /> 
                    <Image 
                        style={styles.imagePokemon}
                        source={{uri : infoPokeDetails.sprites.front_default}}
                    />
                </View>
                <View style={styles.secondContainerCard}>  
                    <Text style={styles.idPokemon}>#{infoPokeDetails.id}</Text>
                    <Text style={styles.namePokemon}> {parseName(infoPokeDetails.name)}</Text>
                    <View style={styles.typePokemonContainer}>
                        {infoPokeDetails.types.map(({type}, index)=>{
                            const pokeType2 = index === 0 ? infoPokeDetails.types[0].type.name : infoPokeDetails.types[1].type.name;                       
                        return(
                            <PokemonType 
                                customStyleContainer= {[styles.TypePokemon, {backgroundColor: typePoke[pokeType2]}]}
                                customStyleText = {styles.textTypePokemon}
                                keyType = {`${index}-${type}`}
                                typeName = {parseName(type.name)}
                            />
                        )
                        })}
                    </View>
                </View>
            </View>
            
    );
};

export default CardDetails;