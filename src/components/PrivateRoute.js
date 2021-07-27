import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
    children,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    const isVerify = useSelector(authSelectors.getVerify);
    //TODO make it simple
    let url = '/verify';
    if ((isVerify && isLoggedIn) || (!isVerify && !isLoggedIn)) {
        url = redirectTo;
    }
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={url} />}
        </Route>
    );
}
