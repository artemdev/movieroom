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
    // const isVerify = useSelector(authSelectors.getVerify);
    // console.log('VERIFY>>>', isVerify);
    const shouldRedirect = isLoggedIn && restricted;
    // const shouldRedirect = isLoggedIn && isVerify && restricted;
    return (
        <Route {...routeProps}>
            {shouldRedirect ? <Redirect to="/collections" /> : children}
        </Route>
    );
}
