import { Route, Redirect } from 'react-router-dom'
// import { roomOpenResults } from 'react-redux'
// import { getLoggedIn } from '../redux/user/user-selectors'


export default function PrivateRoute({ children, ...props }) {
    const isLoggedIn = true
    return (
        <Route {...props}>
            {isLoggedIn ? children : <Redirect to="login" />}
        </Route>
    )
}