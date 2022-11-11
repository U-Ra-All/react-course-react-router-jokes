import JokeForm from '../components/jokes/JokeForm';

const AddJoke = () => {
  const addJokeHandler = (jokeData) => {
    console.log(jokeData);
  };

  return <JokeForm onAddJoke={addJokeHandler} />;
};

export default AddJoke;
