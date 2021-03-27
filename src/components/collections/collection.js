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

            <h4 className={styles.collectionText}>{collection.name}</h4>
        </>
    );
}
