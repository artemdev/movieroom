import styles from './subscribe.module.css';
import button from '../../components/Button/Button.module.css';
// import logo from '../../images/logo.png';
import Logo from '../../components/Logo/Logo';
import axios from 'axios';
export default function SubscribeView() {
    const handleSubmit = e => {
        e.preventDefault();
        try {
            const url = 'http://movierooms.herokuapp.com/mailchimp/subscribe';
            const email = e.target.email.value;
            const body = {
                email,
            };
            axios.post(url, body);
            console.log('Email has been sent!');
            //show thank you page
            const thankYou = document.getElementById('thankYou');
            e.currentTarget.style.visibility = 'hidden';
            thankYou.className += ' ' + styles.thankYouBlockVisible;
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <header className={styles.navBar}>
                <Logo />
            </header>
            <div className={styles.wrap}>
                <section className={styles.intro}>
                    <h2>Спорите, какой фильм смотреть с друзьями?</h2>
                    <h3>Попробуйте MoovieRoom &#128521;</h3>
                    <ol type="1">
                        <li>Создайте MoovieRoom комнату</li>
                        <li>Выберите интересную коллекцию фильмов</li>
                        <li>Пригласите друзей</li>
                        <li>
                            Проголосуйте вместе и наслаждайтесь просмотром
                            фильма, который понравился всем. &#128588;
                        </li>
                    </ol>
                </section>
                <div className={styles.formWrap}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className={styles.emailInput}
                            id="email"
                            placeholder="Ваш имейл"
                        />

                        <button type="submit" className={button.btn}>
                            Подписаться
                        </button>
                    </form>
                    <div id="thankYou" className={styles.thankYouBlock}>
                        Спасибо! Мы отправим вам письмо как только MovieRoom
                        будет готов &#128578;
                    </div>
                </div>
            </div>
        </>
    );
}
