import { Route, Switch, Redirect } from 'react-router-dom';
import Jokes from './pages/Jokes';
import JokeDetails from './pages/JokeDetails';
import AddJoke from './pages/AddJoke';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
