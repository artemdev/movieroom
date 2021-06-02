import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Имя должно быть больше 2 символов')
        .max(50, 'Слишком длинное имя'),
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .min(
            8,
            'Должен содержать как минимум одну цифру, одну заглавную и строчную букву и как минимум 8 или более символов.',
        )
        .max(50),
});
export default formSchema;
