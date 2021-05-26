import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '../components/Button';
import s from './RegisterView.module.css';

export default function LoginView() {
    const Login = 'Войти в комнату';
    const Password = 'Введите Ваш имейл';
    const Email = 'Введите пароль';
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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

        dispatch(authOperations.logIn({ email, password }));
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
                    <Button title={Login}></Button>
                </form>
            </div>
        </>
    );
}
