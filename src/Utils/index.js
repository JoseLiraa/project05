import { pokePath } from "../Constans"

export const parseName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
}

export const queryPoke = (name) => {
    const pokemon = 'pokemon/';
    return `${pokePath}${pokemon}${name}`
}