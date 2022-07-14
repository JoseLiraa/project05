import { StyleSheet } from "react-native";
import {typePoke, backgroundType, texts} from "../../../../../assets/Colors";

const styles = StyleSheet.create({
    containerButton:{              
        marginVertical: 15,          
        justifyContent: 'center',
        alignItems: 'center',
        width: 325,
        height: 325,     
        borderRadius: 20, 
    },
    text: {
        color: texts.white,
        fontWeight: 'bold',
        fontSize: 25,
    },
    backGroundImage:{
        width: 300,
        height: 170,
    }
});

export default styles;