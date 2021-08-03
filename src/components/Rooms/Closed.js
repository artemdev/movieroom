import styles from './styles.module.css';

export default function RoomClosedResults(props) {
    return (
        <div>
            <div className={styles.winnerCongratulations}>Congratulations!</div>

            <h1 className={styles.winnerTitle}>Movie title</h1>
            <div className={styles.winnerWrap}>68%</div>
            <div className={styles.winnerVotes}>2 votes</div>
        </div>
    );
}
