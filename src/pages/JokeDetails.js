import { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedJoke from '../components/jokes/HighlightedJoke';

const DUMMY_JOKES = [
  {
    id: 'j1',
    topic: 'Programming',
    text: `How many programmers does it take to change a light bulb?
    None – It’s a hardware problem`,
  },
  {
    id: 'j2',
    topic: 'General',
    text: `How many bones are in the human hand?
    A handful of them.`,
  },
];

const JokeDetails = () => {
  const params = useParams();
  const joke = DUMMY_JOKES.find((joke) => joke.id === params.jokeId);

  if (!joke) {
    return <h1 className='centered'>Шуток не найдено</h1>;
  }

  return (
    <Fragment>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Route path='/jokes/:jokeId/comments'>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default JokeDetails;
