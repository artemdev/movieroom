import React from 'react';
import { NavLink } from 'react-router-dom';
// import s from './AuthNav.module.css';
const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontSize: '16px',
        lineHeight: '1.4',
        fontWeight: 400,
        color: '#ffffff',
    },
    activeLink: {
        fontSize: '26px',
        lineHeight: '1.2',
        fontWeight: 500,
    },
};

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Создать комнату
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={styles.link}
                activeStyle={styles.activeLink}
            >
                Войти в комнату
            </NavLink>
        </div>
    );
}
