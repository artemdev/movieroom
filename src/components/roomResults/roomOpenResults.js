import * as styles from './styles.module.css'

export default function RoomOpenResults(props) {
    return (
        <div>
            <ul className={styles.gallery}>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg" alt="" />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg" alt="" />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg" alt="" />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg" alt="" />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg" alt="" />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg" alt="" />
                    </section>
                </li>
            </ul>

            <div className={styles.notification}>
                Вы не  смогли выбрать общий фильм.
                Выбрать случайный из фаворитов
            </div>

            <button className={styles.btn}>
                CLOSE ROOM
            </button>
        </div >
    )
}

