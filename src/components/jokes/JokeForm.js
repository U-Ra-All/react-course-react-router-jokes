import { useRef } from 'react';

import Card from '../ui/Card';
import Loader from '../UI/Loader';
import styles from './JokeForm.module.css';

const JokeForm = (props) => {
  const topicInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={styles.loading}>
            <Loader />
          </div>
        )}

        <div className={styles.control}>
          <label htmlFor='topic'>Topic</label>
          <input type='text' id='topic' ref={topicInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button className='btn'>Add Joke</button>
        </div>
      </form>
    </Card>
  );
};

export default JokeForm;
