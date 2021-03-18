import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import NavBarView from './components/navBar'
import roomOpenResults from './components/roomResults/roomOpenResults'
import roomClosedResults from './components/roomResults/roomClosedResults'
import Container from './components/container'
import './App.css';
import Collections from './components/collections';

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Suspense fallback='Loading ...'>
            <NavBarView />
            <Route exact path='/collections' component={Collections} />
            <Route exact path='/closed' component={roomClosedResults} />
            <Route exact path='/open' component={roomOpenResults} />
          </Suspense>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
