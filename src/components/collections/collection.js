import styles from './styles.module.css';

export default function Collection({ collection }) {
    console.log(collection);
    return (
        <>
            <img
                className={styles.collectionImage}
                src={collection.url}
                alt=""
            />
            <p className={styles.collectionText}>
                <h4>{collection.title}</h4>
            </p>
        </>
    );
}
