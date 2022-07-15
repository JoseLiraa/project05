import React, {useState, useEffect} from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';
import { texts } from '../../../assets/Colors';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import { pokePath, pokeQuery1, pokeQuery2 } from '../../Constans';

const Home = ( {navigation, route} ) => {
  const {generation} = route.params;
  let generationPokemon = '';

  const [GenPokeDetails, setGenPokeDetails] = useState([]);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [titleGeneration, setTitleGeneration] = useState('');  

  useEffect(() => {
    const fetchGenPokemons = async () => {
      generation === 'first' ? (setTitleGeneration('Pokedex | First Generation'), generationPokemon = `${pokePath}${pokeQuery1}`     
      ) : (setTitleGeneration('Pokedex | Second Generation'), generationPokemon = `${pokePath}${pokeQuery2}`)

      const GenPokeIdsResponse = await fetch(generationPokemon).then(request => request.json()); 
      const pokeArray = [];
      for(const GenPokeDetail of GenPokeIdsResponse.results){
        const pokemonDetails = await fetch(GenPokeDetail.url).then(request => request.json());
        pokeArray.push(pokemonDetails);
      }    
      setGenPokeDetails(pokeArray);          
      setLoadingIndicator(false);
    };
    fetchGenPokemons();
  }, []);

  const keyExtractor = ( item, index ) => `${item}-${index}`;
  
    return (
      <View style={styles.container}>        
        <Header titleGeneration={titleGeneration}/>        
            <FlatList 
              contentContainerStyle={styles.list} 
              data={GenPokeDetails} 
              keyExtractor = {keyExtractor}
              numColumns= {2}
              initialNumToRender = {20}
              maxToRenderPerBatch = {10}
              renderItem = {({item}) => (
                <TouchableOpacity
                activeOpacity={0.8} 
                onPress={ () => navigation.navigate('PokemonDetails', {item: item})}>
                  <Card item={item}/>
                </TouchableOpacity>
              )} 
              ListEmptyComponent = {() => (
                <>
                  {
                    loadingIndicator && (
                      <ActivityIndicator                
                        color = {texts.gold}
                        size = "large"
                        style = {styles.activityIndicator}/>                     
                    )
                  }
                </>
              )}           
            />       
    </View>
  );
};

export default Home;