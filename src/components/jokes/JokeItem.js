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
      <a className='btn'>Expand</a>
    </li>
  );
};

export default JokeItem;
