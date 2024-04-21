import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    }, [])

    return (
    <div className="container-center">
        <h1>
         PokemonApp
        </h1>
        <ul>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </div>
  )
}