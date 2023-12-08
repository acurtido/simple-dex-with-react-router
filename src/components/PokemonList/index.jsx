import { useFetch } from "../../hooks/useFetch"
import Pokemon from "../Pokemon"
import styles from "./styles.module.css"

export default function PokemonList() {
    const [data] = useFetch("https://pokeapi.co/api/v2/pokemon?limit=151")

    return (
        <div className={styles.container}>
            {data && data.results.map(pokemon => <Pokemon key={pokemon.name} url={pokemon.url}/> )}
        </div>
    )
}
