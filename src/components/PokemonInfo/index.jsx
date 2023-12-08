import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import style from './styles.module.css'

export default function PokemonInfo() {
    const { id } = useParams()
    const [data] = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const navigate = useNavigate()

    const irMenu = () => {
        navigate('/simple-dex-with-react-router')
    }

    return (
        <div className={style.container}>
            {data && (
                <>
                    <div>
                        <img src={data.sprites.front_default} alt={data.name} />
                    </div>
                    <div>
                        <label> Name:  </label>
                        <span style={{ textTransform: 'capitalize' }}> {data.name} </span>
                    </div>
                    <div>
                        <label> Height:  </label>
                        <span> {data.height} </span>
                    </div>
                    <div>
                        <label> Weight:  </label>
                        <span> {data.weight} </span>
                    </div>
                    <div>
                        <label> Base experience:  </label>
                        <span> {data.base_experience} </span>
                    </div>
                    <div>
                        <label> Abilities:  </label>
                        <span> {data.abilities.map(ability => ability.ability.name).join(", ")} </span>
                    </div>
                    <div>
                        <label> Types:  </label>
                        <span> {data.types.map(type => type.type.name).join(", ")} </span>
                    </div>
                    <button onClick={irMenu}>Menu Principal</button>
                </>
            )}
        </div>
    )
}
