import styles from './styles.module.css';
import logo from '../../images/logo.png';

export default function NavBar() {
    const signIn = true;
    const signOut = 'Выйти';
    return (
        <>
            <header className={styles.navBar}>
                <div className={styles.headerLogo}>
                    <img className={styles.headerImage} src={logo} alt="" />
                </div>
                {signIn ? (
                    <div className={styles.headerMenu}>
                        <a href="/#">{signOut}</a>
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
