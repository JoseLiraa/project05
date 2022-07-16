import { StyleSheet } from "react-native";
import { typePoke, backgroundType, texts } from "../../../../../assets/Colors";

const styles = StyleSheet.create({     
    text:{        
        fontSize: 14,
        textAlign: 'justify',
        color: texts.grey,
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