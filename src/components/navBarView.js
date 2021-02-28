import * as styles from '../styles/navBar.module.css'

export default function NavBar(props) {
    const signIn = true
    return (
        <header className={styles.navBar}>
            <div>
                <img src="" alt="" /> movieroom.com
            </div>
            {signIn ? <div><a href="#">login</a> <a href="#">logout</a></div> : <div>username <button>logout</button></div>}

        </header >
    )
}