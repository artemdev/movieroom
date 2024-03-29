import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import Container from './components/Container';
import WelcomeView from './components/WelcomeView/WelcomeView';
import SubscribeView from './views/SubscribeView/';
import Logo from './components/Logo/Logo';
import './App.css';
import { authOperations } from './redux/auth';
import NavBarView from './components/NavBar';
import Collections from './components/Collections';
import VoteRoom from './components/VoteRoom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterView = lazy(() => import('./views/Login/RegisterView'));
const LoginView = lazy(() => import('./views/Login/LoginView'));
const VerifyView = lazy(() => import('./views/Verify/VerifyView'));
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
                    <PublicRoute
                        path="/"
                        exact
                        restricted
                        redirectTo="/subscribe"
                    >
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
                        redirectTo="/login"
                    >
                        <WelcomeView logo={<Logo />}>
                            <AppBar />
                            <RegisterView />
                        </WelcomeView>
                    </PublicRoute>
                    <PrivateRoute path="/verify" exact redirectTo="/">
                        <VerifyView />
                    </PrivateRoute>
                    <PrivateRoute path="/collections" redirectTo="/login">
                        <NavBarView />
                        <Collections />
                    </PrivateRoute>
                    <PublicRoute path="/closed" redirectTo="/login">
                        <NavBarView />
                        <RoomClosed />
                    </PublicRoute>

                    <PrivateRoute path="/rooms/open" redirectTo="/login">
                        <NavBarView />
                        <RoomOpen />
                    </PrivateRoute>

                    <PublicRoute path="/voteRoom" redirectTo="/login">
                        <NavBarView />
                        <VoteRoom />
                    </PublicRoute>
                </Suspense>
            </Switch>

            <ToastContainer
                position="top-right"
                autoClose={7000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
    );
}

export default App;
