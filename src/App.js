import { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from './components/Container/Container';
import WelcomeView from './components/WelcomeView/WelcomeView';
import Logo from './components/Logo/Logo';
import './App.css';
import { authOperations, authSelectors } from './redux/auth';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBarView from './components/navBar';
import roomOpenResults from './components/roomResults/roomOpenResults';
import roomClosedResults from './components/roomResults/roomClosedResults';
import './App.css';
import Collections from './components/collections';

const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <Switch>
                <Suspense fallback="Loading...">
                    <PublicRoute
                        path="/"
                        exact
                        restricted
                        redirectTo="/collections"
                    >
                        <WelcomeView logo={<Logo />}>
                            <AppBar />
                            <LoginView />
                        </WelcomeView>
                    </PublicRoute>
                    <PublicRoute
                        path="/login"
                        exact
                        restricted
                        redirectTo="/collections"
                    >
                        <WelcomeView logo={<Logo />}>
                            <AppBar />
                            <LoginView />
                        </WelcomeView>
                    </PublicRoute>
                    <PublicRoute
                        path="/register"
                        exact
                        restricted
                        redirectTo="/collections"
                    >
                        <WelcomeView logo={<Logo />}>
                            <AppBar />
                            <RegisterView />
                        </WelcomeView>
                    </PublicRoute>
                    <PublicRoute path="/collections" redirectTo="/login">
                        {/* <CollectionsView /> */}
                    </PublicRoute>
                    <PrivateRoute path="/room" redirectTo="/login">
                        {/* <RoomView /> */}
                    </PrivateRoute>
                </Suspense>
            </Switch>
            <Router>
                <Switch>
                    <Suspense fallback="Loading ...">
                        <NavBarView />
                        <Route
                            exact
                            path="/collections"
                            component={Collections}
                        />
                        <Route
                            exact
                            path="/closed"
                            component={roomClosedResults}
                        />
                        <Route exact path="/open" component={roomOpenResults} />
                    </Suspense>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
