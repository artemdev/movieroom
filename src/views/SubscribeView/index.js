import styles from './subscribe.module.css';
export default function SubscribeView() {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('write email to file');
    };
    return (
        <div className={styles.wrap}>
            <section className={styles.intro}>
                <h2>Всё еще спорите, какой фильм смотреть?</h2>
                <h3>Хватит спорить!</h3>
                <p>
                    Создайте MoovieRoom, выберите интересную коллекцию,
                    пригласите друзей, проголосуйте вместе и наслаждайтесь
                    просмотром.
                </p>
            </section>
            <div className={styles.formWrap}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className={styles.emailInput}
                        id="email"
                        placeholder="Ваш имейл"
                    />

                    <button type="submit" class={styles.subscribeBtn}>
                        Подписаться
                    </button>
                </form>
            </div>
        </div>
    );
}
