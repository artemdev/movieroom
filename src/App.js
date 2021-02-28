import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NavBarView from './components/navBarView'
import roomOpenResults from './components/views/roomResults/roomOpenResults'
import roomClosedResults from './components/views/roomResults/roomClosedResults'
import Container from './components/container'
import './App.css';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Suspense fallback='Loading ...'>
            <NavBarView />
            <Route exact path='/closed' component={roomClosedResults} />
            <Route exact path='/open' component={roomOpenResults} />
          </Suspense>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
