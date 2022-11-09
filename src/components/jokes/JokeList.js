import { Fragment } from 'react';

import JokeItem from './JokeItem';
import styles from './JokeList.module.css';

const JokeList = (props) => {
  return (
    <Fragment>
      <ul className={styles.list}>
        {props.jokes.map((joke) => (
          <JokeItem
            key={joke.id}
            id={joke.id}
            topic={joke.topic}
            text={joke.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default JokeList;
