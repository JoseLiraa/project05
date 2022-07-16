import { pokePath } from "../Constans"

export const parseName = (name) => {
    let result;
    name === undefined ? result = '' : result = name.charAt(0).toUpperCase() + name.slice(1);    
    return result;
}

export const getHeightOrWeight = (number) => {
    return number/10;
}