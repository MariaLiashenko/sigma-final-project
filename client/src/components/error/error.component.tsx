import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Wrapper } from "..";
import { ReactComponent as ErrorImg } from "../../assets/icons/404.svg";
import styles from "./error.module.scss";

const Error: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Wrapper className={styles.error}>
      <div className={styles.text}>
        <ErrorImg className={styles.img} />
        <h3>Page not found</h3>
        <p>The page you are looking for doesn't exist or has been moved</p>
      </div>
      <Button variant="darkFilled" className={styles.btn} onClick={handleClick}>
        Go to Homepage
      </Button>
    </Wrapper>
  );
};

export { Error };
