import * as styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { roomsOperations, roomsSelectors } from '../../redux/rooms';

export default function RoomOpenResults(props) {
    const roomOpened = useSelector(roomsSelectors.getIsOpen);
    const dispatch = useDispatch();
    if (!roomOpened) {
        window.location = '/collections';
    }
    const exitRoom = () => {
        dispatch(roomsOperations.exit());
    };
    return (
        <div>
            <ul className={styles.gallery}>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img
                            src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg"
                            alt=""
                        />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img
                            src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg"
                            alt=""
                        />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img
                            src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg"
                            alt=""
                        />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img
                            src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg"
                            alt=""
                        />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img
                            src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg"
                            alt=""
                        />
                    </section>
                </li>
                <li>
                    <section>
                        <h3>movie name</h3>
                        <img
                            src="https://www.thedome.org/wp-content/uploads/2019/06/300x300-Placeholder-Image.jpg"
                            alt=""
                        />
                    </section>
                </li>
            </ul>

            <div className={styles.notification}>
                Вы не смогли выбрать общий фильм. Выбрать случайный из фаворитов
            </div>

            <button onClick={exitRoom} className={styles.btn}>
                CLOSE ROOM
            </button>
        </div>
    );
}
