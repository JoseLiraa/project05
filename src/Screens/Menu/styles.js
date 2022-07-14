import { StyleSheet } from "react-native";
import {typePoke, backgroundType, texts} from "../../../assets/Colors";

const styles = StyleSheet.create({
    container:{     
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },             
    firstCustomButton:{
        backgroundColor: backgroundType.fighting, 
    },
    secondCustomButtom:{
        backgroundColor: typePoke.psychic,
    }
});

export default styles;