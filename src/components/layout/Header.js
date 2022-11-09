import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href='/'>Jokes</a>
          </li>
          <li>
            <a href='/'>Add a Joke</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
