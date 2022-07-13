import { StyleSheet } from "react-native";
import {typePoke, backgroundType, texts} from "../../../assets/Colors";

const styles = StyleSheet.create({
    backGroundImage: {
        height: 200,
        width: '100%',
        marginTop: -20,
        position: 'absolute',
    },
    title:{
        marginLeft: 15,
        marginTop: 185,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: texts.black,
    },  
});

export default styles;