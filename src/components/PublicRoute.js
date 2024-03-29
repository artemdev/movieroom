import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({
    children,
    restricted = false,
    redirectTo = '/collections',
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    const shouldRedirect = isLoggedIn && restricted;
    const url = '/collections';
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to={url} /> : children}
        </Route>
    );
}
