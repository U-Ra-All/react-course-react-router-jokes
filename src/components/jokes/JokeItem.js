import { Link } from 'react-router-dom';
import styles from './JokeItem.module.css';

const JokeItem = (props) => {
  return (
    <li className={styles.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.topic}</figcaption>
      </figure>
      <Link className='btn' to={`/jokes/${props.id}`}>
        Expand
      </Link>
    </li>
  );
};

export default JokeItem;
