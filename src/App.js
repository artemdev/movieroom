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
import NavBarView from './components/navBar';
import RoomOpenResults from './components/roomResults/roomOpenResults';
import RoomClosedResults from './components/roomResults/roomClosedResults';
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
                        <NavBarView />
                        <Collections />
                    </PublicRoute>
                    <PublicRoute path="/closed" redirectTo="/login">
                        <NavBarView />
                        <RoomClosedResults />
                    </PublicRoute>
                    <PublicRoute path="/open" redirectTo="/login">
                        <NavBarView />
                        <RoomOpenResults />
                    </PublicRoute>
                </Suspense>
            </Switch>
        </Container>
    );
}

export default App;
