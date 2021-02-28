import * as styles from '../styles/navBar.module.css'

export default function NavBar(props) {
    const signIn = true
    return (
        <header className={styles.navBar}>
            <div>
                <img src="" alt="" /> movieroom.com <a href="/open">open</a>  <a href="/closed">closed</a>
            </div>
            {signIn ? <div><a href="#">login</a> <a href="#">logout</a></div> : <div>username <a href="#">logout</a></div>}

        </header >
    )
}