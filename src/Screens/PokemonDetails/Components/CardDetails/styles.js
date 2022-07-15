import { StyleSheet } from "react-native";
import { typePoke, backgroundType, texts } from "../../../../../assets/Colors";

const styles = StyleSheet.create({     
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
        width: 180,
        height: 180,
    },        
});

export default styles;