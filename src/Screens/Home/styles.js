import { StyleSheet } from "react-native";
import {type, backgroundType, texts} from "../../../assets/Colors";

const styles = StyleSheet.create({
    container:{     
        flex: 1,
        marginHorizontal: 8,
    },     
    list:{
        paddingBottom:40
    },
    activityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',        
     }
    
});

export default styles;