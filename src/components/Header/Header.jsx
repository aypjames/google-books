import styles from "./Header.module.scss";
import Form from "../Form/Form";

const Header = () => {
  return (
    <header className={styles.Header}>
      <h1>Google Books</h1>
      <p>
        Search through the Google Books database and find your next favourite
        read!
      </p>
      <Form />
    </header>
  );
};

export default Header;
