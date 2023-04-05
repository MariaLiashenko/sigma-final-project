import { ChangeEvent, FC, useState } from "react";
import { Button, Input, Wrapper } from "..";
import styles from "./newsletter.module.scss";

const Newsletter: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const sendFormHandler = () => {
    console.log(`New subscriber: ${inputValue}`);
  };

  return (
    <Wrapper>
      <div className={styles.newsletter}>
        <h2 className={styles.h2}>Subscribe to our Newsletter</h2>
        <div className={styles.searchInput}>
          <Input
            type={"text"}
            onChange={changeHandler}
            placeholder={"Your Email Address"}
          />
          <div className={styles.button}>
            <Button
              variant="darkFilled"
              type="button"
              onClick={sendFormHandler}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export { Newsletter };
