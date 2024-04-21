import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons );


    useEffect(() => {
        dispatch( getPokemons() );
    }, [])

    return (
    <div className="container-center">
        <h1>
         PokemonApp
        </h1>

        <span>Loading: { isLoading ? 'True' : 'False' }</span>
        <span>Page Number: { page }</span>
        <ul>
        { 
            pokemons.map( pokemon => (
                <li key={pokemon.name}>{ pokemon.name }</li>
            )) 
        }
        </ul>
        <button
        disable={ isLoading.toString() }
        onClick={ () => dispatch( getPokemons(page) )}
        >
            Next
        </button>
    </div>
  )
}