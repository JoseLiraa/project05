import { StyleSheet } from "react-native";
import { backgroundType, texts } from "../../../../../assets/Colors";

const styles = StyleSheet.create({     
    infoWrapper:{
        flex: 1,
        backgroundColor: texts.white,   
        borderRadius: 30,
        marginTop: -30,
        paddingHorizontal: 40,
    },
    aboutWrapper:{
        paddingTop: 25,
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
    pokeData2:{
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    evolutionWrapper:{
        marginTop: 5,
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
    }, 
    activityIndicator: {
        flex: 1,
        marginVertical: '50%',
    }
});

export default styles;