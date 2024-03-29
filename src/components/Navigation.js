import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth';

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#2A363B',
    },
    activeLink: {
        color: '#E84A5F',
    },
};

const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav>
            {isLoggedIn && (
                <>
                    <NavLink
                        to="/collections"
                        exact
                        style={styles.link}
                        activeStyle={styles.activeLink}
                    >
                        Contacts
                    </NavLink>
                    <NavLink
                        to="/add-contact"
                        style={styles.link}
                        activeStyle={styles.activeLink}
                    >
                        Add contact
                    </NavLink>
                </>
            )}
        </nav>
    );
};

export default Navigation;
