import { Route, Switch, Redirect } from 'react-router-dom';
import Jokes from './pages/Jokes';
import JokeDetails from './pages/JokeDetails';
import AddJoke from './pages/AddJoke';

function App() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to='/jokes' />
      </Route>
      <Route path='/jokes' exact>
        <Jokes />
      </Route>
      <Route path='/jokes/:jokeId'>
        <JokeDetails />
      </Route>
      <Route path='/add-joke'>
        <AddJoke />
      </Route>
    </Switch>
  );
}

export default App;
