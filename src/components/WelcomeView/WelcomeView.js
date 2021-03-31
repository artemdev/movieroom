import PropTypes from 'prop-types';
import s from './WelcomeView.module.css';

export default function WelcomeView({ logo, children }) {
  return (
    <div
      className={s.welcome}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 78, 135, 0.9), rgba(29, 38, 113, 0.9)), url(/images/cover.jpg)`,
      }}
    >
      <div>{logo}</div>
      <div className={s.main}>
        <div className={s.description}>
          <p className={s.descrOne}>Всё еще спорите, какой фильм смотреть?</p>
          <p className={s.descrOne}>Хватит спорить!</p>
          <p className={s.descrTwo}>
            Создайте MoovieRoom, выберите интересную коллекцию, пригласите
            друзей, проголосуйте вместе и наслаждайтесь просмотром.
          </p>
        </div>
        <div className={s.form}>{children}</div>
      </div>
    </div>
  );
}

WelcomeView.propTypes = {
  children: PropTypes.node.isRequired,
};
