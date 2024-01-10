import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async ( dipatch, getState ) => {
        dipatch( startLoadingPokemons() );

        // Request http
        // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`;
        // const response = await fetch(url);
        // const data = await response.json();
        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        // console.log(resp);
        const data = resp.data;
        // console.log(data);

        dipatch ( setPokemons( { pokemons: data.results, page: page + 1 } ) );
    }
}