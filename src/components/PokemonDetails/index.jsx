import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

export default function PokemonDetails() {
    const location = useLocation()
    const navigate = useNavigate()

    const irMenu = () => {
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <img src={location.state.sprites.front_default} alt={location.state.name} />
            <br />
            <label> Name:  </label>
            <span style={{ textTransform: 'capitalize' }}> {location.state.name} </span>
            <br />
            <label> Height:  </label>
            <span> {location.state.height} </span>
            <br />
            <label> Weight:  </label>
            <span> {location.state.weight} </span>
            <br />
            <label> Base experience:  </label>
            <span> {location.state.base_experience} </span>
            <br />
            <label> Abilities:  </label>
            <span> {location.state.abilities.map(ability => ability.ability.name).join(", ")} </span>
            <br />
            <label> Types:  </label>
            <span> {location.state.types.map(type => type.type.name).join(", ")} </span>
            <br />
            <br />
            <button onClick={irMenu}>Menu Principal</button>
        </div>
    )
}
