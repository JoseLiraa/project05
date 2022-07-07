import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, Image} from 'react-native';
import styles from './styles';
import {typePoke, backgroundType, texts} from "../../../assets/Colors";
import Background from '../../../assets/images/Pokeball-Header.png';
import BackgroundCard from '../../../assets/images/Pokeball-Cards.png';

const pokePath = "https://pokeapi.co/api/v2/";
const pokeQuery = "pokemon?limit=151&offset=0";
const firstGenPoke = `${pokePath}${pokeQuery}`;

const Home = () => {
  const [firstGenPokeDetails, setFirstGenPokeDetails] = useState([]);

  useEffect(() => {
    const fetchfirstGenPokemons = async () => {
      const firstGenPokeIdsResponse = await fetch(firstGenPoke);
      const firstGenPokeIdsBody = await firstGenPokeIdsResponse.json();

      const firstGenPokeDetails = await Promise.all(
        firstGenPokeIdsBody.results.map(async (pokemon) => {
          const pokemonDetails = await fetch(pokemon.url);

          return await pokemonDetails.json();
        })
      );

      setFirstGenPokeDetails(firstGenPokeDetails);
    };
    fetchfirstGenPokemons();
  }, []);
  
  const renderPokemon = ({ item }) => {
    const pokeType = item.types[0].type.name;
    return (
        <View style={[styles.containerCard, {backgroundColor: backgroundType[pokeType]}]}> 
          <View style={styles.firstContainerCard}>
              <Text style={styles.namePokemon}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>   
              <Text style={styles.idPokemon}>
                #{item.id}
              </Text>                  
          </View>       
          <View style={styles.secondContainerCard}>     
            <View style={styles.typePokemonContainer}>
              {item.types.map(({type}, index)=>{
              return(
                <View style={[styles.TypePokemon, {backgroundColor: typePoke[pokeType]}]}>  
                  <Text style={styles.textTypePokemon} key={index}>
                    {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                  </Text>
                </View>
              )  
              })}
            </ View>
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

    return (
      <View style={styles.container}>
        <Image 
        source={Background}
        resizeMode= 'contain'
        style={styles.backGroundImage} />  
        <Text style={styles.title}>Pokedex</Text>
        <FlatList numColumns={2} data={firstGenPokeDetails} renderItem = {renderPokemon}/> 
     </View>
  );
};



export default Home;