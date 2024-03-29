import styles from './navBar.module.css';
import logo from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { roomsSelectors } from '../../redux/rooms';

export default function NavBar() {
    const signIn = true;
    const signOut = 'Выйти';
    const dispatch = useDispatch();
    const token = useSelector(authSelectors.getToken);
    const userName = useSelector(authSelectors.getUsername);

    return (
        <>
            <header className={styles.navBar}>
                {
                    <div className={styles.headerLogo}>
                        <img className={styles.headerImage} src={logo} alt="" />
                    </div>
                }

                <div className={styles.headerMenu}>
                    {signIn ? (
                        <>
                            <p className={styles.name}>{userName}</p>
                            <button
                                className={styles.btn}
                                type="button"
                                onClick={() =>
                                    dispatch(authOperations.logOut(token))
                                }
                            >
                                {signOut}
                            </button>
                        </>
                    ) : (
                        <a href="/#">Создать комнату</a>
                    )}
                </div>
            </header>
        </>
    );
}
