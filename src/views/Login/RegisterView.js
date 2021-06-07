import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Button from '../../components/Button';
import s from './RegisterView.module.css';
import formSchema from '../../helpers/formSchema';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Formik } from 'formik';

export default function RegisterView() {
    const signUp = 'Создать комнату';
    const Name = 'Имя';
    const Email = 'Введите Ваш имейл';
    const Password = 'Введите пароль';
    const dispatch = useDispatch();
    const [name, setName] = useState('');
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
                    setTimeout(() => {
                        dispatch(
                            authOperations.register({ name, email, password }),
                        );
                        setName('');
                        setEmail('');
                        setPassword('');
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className={s.form} autoComplete="on">
                    <label htmlFor="name" className={s.label}>
                        <Field
                            name="name"
                            className={s.input}
                            type="text"
                            placeholder={Name}
                        />

                        <div className={s.error}>
                            <ErrorMessage name="name" />
                        </div>
                    </label>

                    <label htmlFor="email" className={s.label}>
                        <Field
                            name="email"
                            className={s.input}
                            type="email"
                            placeholder={Email}
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
                        <div
                            className={
                                hidePassword ? s.visiblePass : s.notVisiblePass
                            }
                            onClick={() => showPassword()}
                        ></div>
                        <div className={s.error}>
                            <ErrorMessage name="password" />
                        </div>
                    </label>
                    <Button title={signUp}></Button>
                </Form>
            </Formik>

            <label className={s.checkbox}>
                <input type="checkbox" name="saveMe" />
                <div className={s.checkboxTitle}>Запомнить меня</div>
            </label>
            <p className={s.title}>
                Регистрируя новый профиль, вы принимаете условия{' '}
                <a href="!#">пользовательского соглашения</a>
            </p>
        </>
    );
}
