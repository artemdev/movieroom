import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '../components/Button';
import s from './RegisterView.module.css';

export default function RegisterView() {
    const signUp = 'Создать комнату';
    const Name = 'Имя';
    const Password = 'Введите Ваш имейл';
    const Email = 'Введите пароль';
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className={s.form}
                    autoComplete="on"
                >
                    <label className={s.label}>
                        <input
                            className={s.input}
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder={Name}
                        />
                    </label>

                    <label className={s.label}>
                        <input
                            className={s.input}
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder={Email}
                        />
                    </label>

                    <label className={s.label}>
                        <input
                            className={s.input}
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            placeholder={Password}
                        />
                    </label>
                    <Button title={signUp}></Button>
                    <label className={s.checkbox}>
                        <input type="checkbox" name="saveMe" />
                        <div className={s.checkboxTitle}>Запомнить меня</div>
                    </label>
                    <p className={s.title}>
                        Регистрируя новый профиль, вы принимаете условия
                        <span>
                            <a href="!#">пользовательского соглашения</a>
                        </span>
                    </p>
                </form>
            </div>
        </>
    );
}
