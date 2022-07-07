import { StyleSheet } from "react-native";
import {typePoke, backgroundType, texts} from "../../../assets/Colors";

const styles = StyleSheet.create({
    backGroundImage: {
        height: 200,
        width: '100%',
        marginTop: 40,
        position: 'absolute',
    },
    title:{
        marginLeft: 15,
        marginTop: 200,
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: texts.black,
    },  
});

export default styles;