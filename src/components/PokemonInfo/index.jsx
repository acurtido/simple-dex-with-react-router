import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import style from './styles.module.css'
import { useSwipeable } from 'react-swipeable'
import rightArrow from "/right-arrow.svg";
import leftArrow from "/left-arrow.svg";

export default function PokemonInfo() {
    const { id } = useParams()
    const [data] = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const navigate = useNavigate()

    const irMenu = () => {
        navigate('/')
    }

    const config = {
        delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
        preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
        trackTouch: true,                      // track touch input
        trackMouse: true,                     // track mouse input
        rotationAngle: 0,                      // set a rotation angle
        swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
        touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => navigate(`/pokemon-info/${parseInt(id) + 1}`),
        onSwipedRight: () => navigate(`/pokemon-info/${parseInt(id) - 1}`),
        ...config
    });

    return (
        <div {...handlers} className={style.container}>
            {data && (
                <>
                    <img className={style.leftArrow} onClick={() => navigate(`/pokemon-info/${parseInt(id) - 1}`)} src={leftArrow} alt="left-arrow" />
                    <img className={style.rightArrow} onClick={() => navigate(`/pokemon-info/${parseInt(id) + 1}`)} src={rightArrow} alt="right-arrow" />
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
