import PropTypes from 'prop-types';
import { useFetch } from "../../hooks/useFetch";
import styles from "./styles.module.css";
import { useNavigate } from 'react-router-dom';

export default function Pokemon({ url }) {
    const [data] = useFetch(url);
    const navigate = useNavigate();

    return (
        <div>
            {data &&
                <div className={styles.card} onClick={() => navigate('/pokemon', {state: data})}>
                    <div className={styles.name}> {data.name} </div>
                    <img src={data.sprites.front_default} alt={data.name} />
                </div>}
        </div>
    );
}

Pokemon.propTypes = {
    url: PropTypes.string.isRequired
};
