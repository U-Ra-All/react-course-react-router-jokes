import { useParams } from 'react-router-dom';

const JokeDetails = () => {
  const params = useParams();
  return <h1>Joke Details Page {params.jokeId}</h1>;
};

export default JokeDetails;
