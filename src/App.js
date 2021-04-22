import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
// import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Container from './components/Container/Container';
import WelcomeView from './components/WelcomeView/WelcomeView';
import SubscribeView from './views/SubscribeView/';
import Logo from './components/Logo/Logo';
import './App.css';
import { authOperations } from './redux/auth';
import NavBarView from './components/NavBar';
import RoomOpen from './components/Rooms/Open';
import RoomClosed from './components/Rooms/Closed';
import Collections from './components/Collections';
import VoteRoom from './components/voteRoom/voteRoom';
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
                        path="/subscribe"
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
                    <PublicRoute path="/collections" redirectTo="/login">
                        <NavBarView />
                        <Collections />
                    </PublicRoute>
                    <PublicRoute path="/closed" redirectTo="/login">
                        <NavBarView />
                        <RoomClosed />
                    </PublicRoute>
                    <PublicRoute path="/open" redirectTo="/login">
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
