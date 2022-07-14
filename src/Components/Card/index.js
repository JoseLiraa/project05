import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from './styles';
import {typePoke, backgroundType, texts} from "../../../assets/Colors";
import BackgroundCard from '../../../assets/images/Pokeball-Cards.png';
import PokemonType from '../PokemonType';
import { parseName } from '../../Utils';

const Card = ({item}) => {
    const pokeType = item.types[0].type.name;  

    return (
        <View style={[styles.containerCard, {backgroundColor: backgroundType[pokeType]}]}> 
            <View style={styles.firstContainerCard}>
                <Text style={styles.namePokemon}>
                    {parseName(item.name)}
                </Text>   
                <Text style={styles.idPokemon}>
                    #{item.id}
                </Text>                  
            </View>       
            <View style={styles.secondContainerCard}>     
                <View style={styles.typePokemonContainer}>
                    {item.types.map(({type}, index)=>{
                        const pokeType2 = index === 0 ? item.types[0].type.name : item.types[1].type.name;                       
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
                <Image
                    source={BackgroundCard}
                    resizeMode= 'contain' 
                    style={styles.backGroundImageCard}   
                /> 
                <Image 
                    style={styles.imagePokemon}
                    source={{uri : item.sprites.front_default}}
                />
            </View>    
        </View>      
    );
};

export default Card;