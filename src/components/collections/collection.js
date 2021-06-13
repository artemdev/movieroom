import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function Collection({ collection }) {
    const verify = useSelector(authSelectors.getVerify);
    console.log(verify);
    return (
        <>
            <img
                className={styles.collectionImage}
                src={IMAGE_URL + collection.poster_path}
                alt=""
            />

            <h4 className={styles.collectionText}>{collection.name}</h4>
        </>
    );
}
