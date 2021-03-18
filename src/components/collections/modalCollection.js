import styles from './styles.module.css'

export default function Collection({ movie }) {
    return ( 
                <>
                <img className={styles.modalCollectionImage} src={movie.coverUrl} alt="" />
                <p className={styles.modalCollectionText}>
                    <h4>{movie.title}</h4>
                <span className={styles.modalCollectionRating}>{movie.rating}</span>
                <span className={styles.modalCollectionYear}>{movie.year}</span>
                <span className={styles.modalCollectionGenres}>
                    {movie.genres && movie.genres.map(genre => genre )}
                </span>
                <span className={styles.modalCollectionGenres}>{movie.rating}</span>
                <span className={styles.modalCollectionDuration}>{movie.duration}</span>
                <span className={styles.modalCollectionDuration}></span>
                 </p>
                    </>
    )
}  

