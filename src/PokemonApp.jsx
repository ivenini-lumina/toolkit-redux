import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const { isLoading, page, pokemons = [] } = useSelector( state => state.pokemons );
  const dispatch = useDispatch(); 

  useEffect( () => {
    dispatch( getPokemons() );      
  }, []);

  return (
    <>
        <h1>PokemonApp</h1>
        <hr/>
        <span>Loading: { isLoading ? 'True' : 'False' }</span>

        <ul> 
          { pokemons.map( p => {
            return <li key={p.name} >{p.name}</li>;
          } ) }
        </ul>

        <button
          disabled = { isLoading }
            onClick = { () => dispatch( getPokemons( page ) ) }
          >          
          Next
        </button>
    </>
  )
}
