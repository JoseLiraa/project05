import { StyleSheet } from "react-native";
import {typePoke, backgroundType, texts} from "../../../assets/Colors";

const styles = StyleSheet.create({
    containerCard: {
        marginVertical: 8,
        marginHorizontal: 8,
        width: 170,
        height: 130,     
        borderRadius: 20,    
    },
    firstContainerCard:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    secondContainerCard:{        
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -10,
    },
    namePokemon:{
        marginTop: 15,  
        fontSize: 17,
        fontWeight: 'bold',
        color: texts.white,      
    },
    idPokemon:{
        fontSize: 15,
        fontWeight: 'bold',
        color: texts.numberText,
        opacity: 0.7,
        marginTop: 15,
    },
    typePokemonContainer:{
        marginTop: 40,
        marginLeft: 5,
    },
    TypePokemon:{
        padding:5,  
        borderRadius: 60,
        marginVertical: 2,          
    },
    textTypePokemon:{
        fontSize: 12,
        fontWeight: 'bold',
        color: texts.white,
    },
    backGroundImageCard: {       
        position: 'absolute',
        width: 125,
        height: 125,
        marginLeft: 60,
        marginTop: 10,
    },
    imagePokemon:{
        width: 125,
        height: 125,
    },    
});

export default styles;