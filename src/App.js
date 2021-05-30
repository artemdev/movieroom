import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
// import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Container from './components/Container';
import WelcomeView from './components/WelcomeView/WelcomeView';
import SubscribeView from './views/SubscribeView/';
import Logo from './components/Logo/Logo';
import './App.css';
import { authOperations } from './redux/auth';
import NavBarView from './components/navBar';
import Collections from './components/collections';
import VoteRoom from './components/voteRoom/voteRoom';
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const RoomOpen = lazy(() => import('./components/Rooms/Open'));
const RoomClosed = lazy(() => import('./components/Rooms/Closed'));
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <Container>
            <Switch>
                <Suspense fallback="Loading...">
                    <PublicRoute path="/login" exact redirectTo="/collections">
                        <WelcomeView logo={<Logo />}>
                            <AppBar />
                            <LoginView />
                        </WelcomeView>
                    </PublicRoute>
                    <PublicRoute
                        path="/"
                        exact
                        restricted
                        redirectTo="/subscribe"
                    >
                        <NavBarView />
                        <SubscribeView />
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
                    <PrivateRoute path="/collections" redirectTo="/login">
                        <NavBarView />
                        <Collections />
                    </PrivateRoute>
                    <PublicRoute path="/closed" redirectTo="/login">
                        <NavBarView />
                        <RoomClosed />
                    </PublicRoute>
                    <PublicRoute path="/rooms/open" redirectTo="/login">
                        <NavBarView />
                        <RoomOpen />
                    </PublicRoute>
                    <PublicRoute path="/voteRoom" redirectTo="/login">
                        <NavBarView />
                        <VoteRoom />
                    </PublicRoute>
                </Suspense>
            </Switch>
        </Container>
    );
}

export default App;
