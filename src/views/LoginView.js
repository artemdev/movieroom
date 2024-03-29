import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '../components/Button';
import s from './RegisterView.module.css';
import formSchema from '../helpers/formSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function LoginView() {
    const Login = 'Войти в комнату';
    const Email = 'Введите Ваш имейл';
    const Password = 'Введите пароль';
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const showPassword = () => {
        setHidePassword(false);
        if (hidePassword === false) {
            setHidePassword(true);
        }
    };

    return (
        <>
            <Formik
                initialValues={{ name: '', password: '', email: '' }}
                validationSchema={formSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const { email } = values;
                    const { password } = values;
                    setTimeout(() => {
                        dispatch(
                            authOperations.logIn({
                                email,
                                password,
                            }),
                        );
                        setEmail(email);
                        setPassword(password);
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className={s.form} autoComplete="on">
                    <label htmlFor="email" className={s.label}>
                        <Field
                            name="email"
                            className={s.input}
                            type="email"
                            placeholder={Email}
                        />
                        <ErrorMessage name="email" />
                    </label>
                    <label
                        htmlFor="password"
                        className={`${s.label}  ${s.pass}`}
                    >
                        <Field
                            name="password"
                            className={s.input}
                            type={hidePassword ? 'password' : 'text'}
                            placeholder={Password}
                        />
                        <svg
                            onClick={() => showPassword()}
                            className={s.passInput}
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 4.62793C14.7276 4.62793 17.3357 6.05855 19.7663 8.40908C20.5955 9.21098 21.3457 10.0671 22.0061 10.9236C22.4046 11.4404 22.6875 11.8469 22.8425 12.0891L23.1871 12.6279L22.8425 13.1667C22.6875 13.4089 22.4046 13.8155 22.0061 14.3323C21.3457 15.1888 20.5955 16.0449 19.7663 16.8468C17.3357 19.1973 14.7276 20.6279 12 20.6279C9.27247 20.6279 6.66434 19.1973 4.23373 16.8468C3.40451 16.0449 2.65433 15.1888 1.99393 14.3323C1.59543 13.8155 1.3125 13.4089 1.15759 13.1667L0.812988 12.6279L1.15759 12.0891C1.3125 11.8469 1.59543 11.4404 1.99393 10.9236C2.65433 10.0671 3.40451 9.21098 4.23373 8.40908C6.66434 6.05855 9.27247 4.62793 12 4.62793ZM20.4223 12.1448C19.8176 11.3606 19.1302 10.5761 18.376 9.84678C16.2825 7.8223 14.1051 6.62793 12 6.62793C9.89495 6.62793 7.71751 7.8223 5.62406 9.84678C4.86986 10.5761 4.18241 11.3606 3.57777 12.1448C3.44718 12.3142 3.32651 12.4758 3.21619 12.6279C3.32651 12.7801 3.44718 12.9417 3.57777 13.1111C4.18241 13.8952 4.86986 14.6797 5.62406 15.4091C7.71751 17.4336 9.89495 18.6279 12 18.6279C14.1051 18.6279 16.2825 17.4336 18.376 15.4091C19.1302 14.6797 19.8176 13.8952 20.4223 13.1111C20.5529 12.9417 20.6735 12.7801 20.7839 12.6279C20.6735 12.4758 20.5529 12.3142 20.4223 12.1448ZM12 16.6279C9.79088 16.6279 8.00002 14.8371 8.00002 12.6279C8.00002 10.4188 9.79088 8.62793 12 8.62793C14.2092 8.62793 16 10.4188 16 12.6279C16 14.8371 14.2092 16.6279 12 16.6279ZM12 14.6279C13.1046 14.6279 14 13.7325 14 12.6279C14 11.5234 13.1046 10.6279 12 10.6279C10.8955 10.6279 10 11.5234 10 12.6279C10 13.7325 10.8955 14.6279 12 14.6279Z"
                                fill="white"
                            />
                        </svg>
                        <ErrorMessage name="password" />
                    </label>
                    <Button title={Login}></Button>
                </Form>
            </Formik>
        </>
    );
}
