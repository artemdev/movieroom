import styles from './navBar.module.css';
import logo from '../../images/logo.png';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function NavBar() {
    const signIn = true;
    const signOut = 'Выйти';
    const dispatch = useDispatch();
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoxNjI3NjQ4MDI0LCJpYXQiOjE2Mjc2NDgwNTQsImV4cCI6MTY1MzU2ODA1NH0.-Eg2qWMCeo5Al5dUTvS7Gu4wrhxoDiybpQan4BwrB9U';
    return (
        <>
            <header className={styles.navBar}>
                <div className={styles.headerLogo}>
                    <img className={styles.headerImage} src={logo} alt="" />
                </div>
                {signIn ? (
                    <div className={styles.headerMenu}>
                        <button
                            className={styles.btn}
                            type="button"
                            onClick={() =>
                                dispatch(authOperations.logOut(token))
                            }
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
