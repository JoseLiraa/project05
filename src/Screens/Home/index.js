import React, {useState, useEffect} from 'react';
import { View, FlatList} from 'react-native';
import styles from './styles';
import Header from '../../Components/Header';

import Card from '../../Components/Card';

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
  
    return (
      <View style={styles.container}>        
        <Header />
        <FlatList 
          numColumns={2} 
          data={firstGenPokeDetails} 
          renderItem = {({item}) => <Card key={item} item={item}/>}
        /> 
    </View>
  );
};



export default Home;