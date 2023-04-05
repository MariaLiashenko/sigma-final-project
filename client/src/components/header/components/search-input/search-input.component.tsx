import { ChangeEvent, FC, useEffect, useState } from "react";
import styles from "./search-input.module.scss";
import { ReactComponent as SearchIcon } from "../../../../assets/icons/search.svg";

const SearchInput: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // input onChange handler 
  }, [inputValue]);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.searchInput}>
      <input
        value={inputValue}
        onChange={changeHandler}
        className={styles.input}
      ></input>
      <div className={styles.button}>
        <SearchIcon />
      </div>
    </div>
  );
};

export { SearchInput };
