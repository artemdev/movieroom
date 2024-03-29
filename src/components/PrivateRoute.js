import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
    children,
    redirectTo = '/',
    ...routeProps
}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    // const isVerify = useSelector(authSelectors.getVerify);

    // let url = '/verify';

    // if ((isLoggedIn && isVerify) || (!isVerify && !isLoggedIn)) {
    //     url = redirectTo;
    // }

    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    );
}
