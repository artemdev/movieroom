import s from './Button.module.css';

export default function RegisterView({ title }) {
    return (
        <>
            <button className={s.btn} type="submit">
                {title}
            </button>
        </>
    );
}
