import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import Arrow from '../../../../../assets/images/arrow.png';
import { parseName, getPath } from '../../../../Utils';
import { axiosData } from '../../../../DataSource';


const EvolutionChain = ({item, colorType}) => {

    const [pokeEvoDataOne, setPokeEvoDataOne] = useState({});
    const [pokeEvoDataTwo, setPokeEvoDataTwo] = useState({});
    const [pokeEvoDataThree, setPokeEvoDataThree] = useState({});
    const [loadingIndicator, setLoadingIndicator] = useState(true);

    const first = getPath(item?.chain?.species?.name);
    const second = getPath(item?.chain?.evolves_to[0]?.species.name);
    const third = getPath(item?.chain?.evolves_to[0]?.evolves_to[0]?.species.name);
    let firstResponse, secondResponse, thirdResponse;

    useEffect(() => {
        const axiosPoke = async () =>{
            if(!!first){
                firstResponse = await axiosData({ method: 'get', url: first});
            }
            if(!!second){
                secondResponse = await axiosData({ method: 'get', url: second});
            }
            if(!!third){
                thirdResponse = await axiosData({ method: 'get', url: third});
            }            
            setPokeEvoDataOne(firstResponse.data);
            setPokeEvoDataTwo(secondResponse.data);
            setPokeEvoDataThree(thirdResponse.data);
            setLoadingIndicator(false);
        }; 
        axiosPoke();
    }, [first, second, third])

    return (  
        <>
            {
            loadingIndicator ? (          
                <>
                <ActivityIndicator                
                color = {colorType}
                size = "large"
                style = {styles.activityIndicator}/>  
                </>
            ) : (
            <>  
                <View style={styles.firstEvolution}>
                    <View style={styles.arrowContainer}>
                        <Image 
                            style={styles.imagePokemonEvo}
                            source={{uri : pokeEvoDataOne?.sprites?.front_default}}
                        />
                        <Text style={styles.text}>#{pokeEvoDataOne?.id}</Text>
                        <Text>{parseName(pokeEvoDataOne?.name)}</Text>
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
                            source={{uri : pokeEvoDataTwo?.sprites?.front_default}}
                        />
                        <Text style={styles.text}>#{pokeEvoDataTwo?.id}</Text>
                        <Text>{parseName(pokeEvoDataTwo?.name)}</Text>
                    </View>
                </View>   
                <View style={styles.firstEvolution}>
                    <View style={styles.arrowContainer}>
                    <Image 
                            style={styles.imagePokemonEvo}
                            source={{uri : pokeEvoDataTwo?.sprites?.front_default}}
                        />
                        <Text style={styles.text}>#{pokeEvoDataTwo?.id}</Text>
                        <Text>{parseName(pokeEvoDataTwo?.name)}</Text>
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
                            source={{uri : pokeEvoDataThree?.sprites?.front_default}}
                        />
                        <Text style={styles.text}>#{pokeEvoDataThree?.id}</Text>
                        <Text>{parseName(pokeEvoDataThree?.name)}</Text>
                    </View>
                </View>    
            </>   
            )}        
        </>      
    );
};

export default EvolutionChain;