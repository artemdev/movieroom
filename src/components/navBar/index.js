import styles from './styles.module.css';
import logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function NavBar() {
    const signIn = true;
    const signOut = 'Выйти';
    const dispatch = useDispatch();
    return (
        <>
            <header className={styles.navBar}>
                <div className={styles.headerLogo}>
                    <img className={styles.headerImage} src={logo} alt="" />
                </div>
                {signIn ? (
                    <div className={styles.headerMenu}>
                        <button
                            type="button"
                            onClick={() => dispatch(authOperations.logOut())}
                        >
                            {signOut}
                        </button>
                    </div>
                ) : (
                    <div className={styles.headerMenu}>
                        <a href="/#">Создать комнату</a>
                    </div>
                )}
            </header>
        </>
    );
}
