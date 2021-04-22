import styles from './navBar.module.css';
import logo from '../../images/logo.png';

export default function NavBar() {
    const signIn = true;
    return (
        <>
            <header className={styles.navBar}>
                <div className={styles.headerLogo}>
                    <img src={logo} alt="" />
                </div>
                {signIn ? (
                    <div className={styles.headerMenu}>
                        Username <a href="/#">выход</a>
                    </div>
                ) : (
                    <div className={styles.headerMenu}>
                        <a href="/#">создать комнату</a>
                    </div>
                )}
            </header>
        </>
    );
}
