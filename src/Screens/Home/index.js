import React, {useState, useEffect} from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from './styles';
import { texts } from '../../../assets/Colors';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import { pokeQuery1, pokeQuery2 } from '../../Constans';
import { axiosData } from '../../DataSource';
//import { useNavigation } from '@react-navigation/native';

const Home = ( {navigation, route} ) => {
  //let navi = useNavigation();
  const {generation} = route.params;
  let generationPokemon = '';

  const [GenPokeDetails, setGenPokeDetails] = useState([]);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [titleGeneration, setTitleGeneration] = useState('');  


  useEffect(() => {
    const GetPokemons = async () => {
      generation === 'first' ? (setTitleGeneration('Pokedex | First Generation'), generationPokemon = `${pokeQuery1}`     
      ) : (setTitleGeneration('Pokedex | Second Generation'), generationPokemon = `${pokeQuery2}`)

      const GenPokeIdsResponse = await axiosData({ method: 'get', url: generationPokemon });
      const pokeArray = [];
      for(const GenPokeDetail of GenPokeIdsResponse.data.results){        
        const pokemonDetails = await axiosData({ method: 'get', url: GenPokeDetail.url });
        pokeArray.push(pokemonDetails.data);        
      }    
      setGenPokeDetails(pokeArray);
      setLoadingIndicator(false);
    };
    GetPokemons();
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
                onPress={ () => navigation.navigate('PokemonDetails', {item})}>
                  <Card key= {keyExtractor} item={item}/>
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