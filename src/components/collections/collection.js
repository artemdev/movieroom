import styles from './styles.module.css';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

export default function Collection({ collection }) {
    return (
        <>
            <img
                className={styles.collectionImage}
                src={IMAGE_URL + collection.poster_path}
                alt=""
            />
            <p className={styles.collectionText}>
                <h4>{collection.name}</h4>
            </p>
        </>
    );
}
