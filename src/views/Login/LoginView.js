import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Button from '../../components/Button';
import s from './RegisterView.module.css';
import formSchema from '../../helpers/formSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function LoginView() {
    const LoginPlaceholder = 'Войти в комнату';
    const EmailPlaceholder = 'Введите Ваш имейл';
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
                initialValues={{ password: '', email: '' }}
                validationSchema={formSchema}
                onSubmit={(values, { setSubmitting }) => {
                    const { email, password } = values;
                    setTimeout(() => {
                        dispatch(authOperations.logIn({ email, password }));
                        setEmail('');
                        setPassword('');
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
                            placeholder={EmailPlaceholder}
                        />
                        <div className={s.error}>
                            <ErrorMessage name="email" />
                        </div>
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
                            className={
                                hidePassword ? s.visiblePass : s.notVisiblePass
                            }
                            onClick={() => showPassword()}
                        ></svg>

                        <div className={s.error}>
                            <ErrorMessage name="password" />
                        </div>
                    </label>
                    <Button title={LoginPlaceholder}></Button>
                </Form>
            </Formik>
        </>
    );
}
