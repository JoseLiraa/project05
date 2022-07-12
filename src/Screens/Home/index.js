import React, {useState, useEffect} from 'react';
import { View, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import { texts } from '../../../assets/Colors';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import { pokePath } from '../../Constans';

const pokeQuery = "pokemon?limit=151&offset=0";
const firstGenPoke = `${pokePath}${pokeQuery}`;

const Home = () => {
  const [firstGenPokeDetails, setFirstGenPokeDetails] = useState([]);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [counter, setCounter] = useState(20);

  const getData = () => {    
    setCounter(end => end + 10);

  }

  useEffect(() => {
    const arrayPart = firstGenPokeDetails.slice(counter - 10, counter);
    setPokeData(actualPoke => [...actualPoke, ...arrayPart]);
  } ,[counter]);

  useEffect(() => {
    const fetchfirstGenPokemons = async () => {
      const firstGenPokeIdsResponse = await fetch(firstGenPoke).then(request => request.json()); 
      const pokeArray = [];
      for(const firstGenPokeDetail of firstGenPokeIdsResponse.results){
        const pokemonDetails = await fetch(firstGenPokeDetail.url).then(request => request.json());
        pokeArray.push(pokemonDetails);
      }    
      setFirstGenPokeDetails(pokeArray);    
      const arrayPart = pokeArray.slice(0, counter);
      setPokeData(arrayPart);      
      setLoadingIndicator(false);
    };
    fetchfirstGenPokemons();
  }, []);

  const keyExtractor = ( item, index ) => `${item}-${index}`;
  
    return (
      <View style={styles.container}>        
        <Header />
          {loadingIndicator ?(
              <ActivityIndicator                
                color = {texts.gold}
                size = "large"
                style = {styles.activityIndicator}/>             
          ): (
            <FlatList 
            numColumns={2}  
            contentContainerStyle={styles.list}          
            data={pokeData} 
            keyExtractor = {keyExtractor}
            renderItem = {({item}) => <Card item={item}/>}  
            onEndReached = {getData}     
        />       
          )}
    </View>
  );
};

export default Home;