import { StyleSheet } from "react-native";
import { typePoke, backgroundType, texts } from "../../../assets/Colors";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },       
    containerCard: {
        backgroundColor:backgroundType.grass,
        width: '100%',
        height: '35%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    firstContainerCard:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainerCard:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    idPokemon:{
        fontSize: 16,
        fontWeight: 'bold',
        color: texts.numberText,
        opacity: 0.7,
    },
    namePokemon:{
        fontSize: 32,
        fontWeight: 'bold',
        color: texts.white,      
    },
    typePokemonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    TypePokemon:{
        backgroundColor:typePoke.grass,
        padding:5,  
        borderRadius: 60,
        marginRight: 2,          
    },
    textTypePokemon:{
        fontSize: 12,
        fontWeight: 'bold',
        color: texts.white,
    },

    backGroundImageCard: {   
        position: 'absolute',
        zIndex: 1,
        width: 180,
        height: 200,
    },
    imagePokemon:{
        zIndex: 2,
        width: 125,
        height: 125,
    },    
    infoWrapper:{
        flex: 1,
        backgroundColor: texts.white,   
        borderRadius: 30,
        marginTop: -30,
        padding: 40,
    },
    titleText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: backgroundType.grass,
        marginBottom: 5,
    },  
    text:{        
        fontSize: 14,
        textAlign: 'justify',
        color: texts.grey,
    },
    pokeDataWrapper:{
        marginVertical: 15,
    },
    pokeData:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    evolutionWrapper:{

    }, 
    imagePokemonEvo:{
        width: 80,
        height: 80,
    },    
    arrowContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageArrow:{
        width: 25,
        height: 25,
        marginVertical: 15,
    },    
    firstEvolution:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    }
 
});

export default styles;