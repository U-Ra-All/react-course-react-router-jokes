import styles from './NoJokesFound.module.css';

const NoJokesFound = () => {
  return (
    <div className={styles['no-jokes']}>
      <p>No jokes found!</p>
      <a className='btn'>Add a Joke</a>
    </div>
  );
};

export default NoJokesFound;
