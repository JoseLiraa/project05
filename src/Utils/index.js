import { pokePath } from "../Constans";

export const parseName = (name) => {
    let result;
    name === undefined ? result = '' : result = name.charAt(0).toUpperCase() + name.slice(1);    
    return result;
}

export const getHeightOrWeight = (number) => number/10;

export const getPath = (nam) =>{
    if(nam){
        const poke = 'pokemon/'
        const concatPath = `${pokePath}${poke}${nam}`;
        return concatPath;
    }
    return null;
}