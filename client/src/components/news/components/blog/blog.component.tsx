import { FC } from "react";
import { ReactComponent as Admin } from "../../../../assets/icons/admin.svg";
import { ReactComponent as RightArrowIcon } from "../../../../assets/icons/right-arrow.svg";
import { Button } from "../../../button";
import styles from "./blog.module.scss";
import { BlogProps } from "./blog.types";

const Blog: FC<BlogProps> = ({
  author,
  date,
  title,
  description,
  background,
}) => (
  <div
    className={styles.blog}
    style={{ backgroundImage: `url(${background})` }}
  >
    <p className={styles.date}>{date}</p>
    <div className={styles.review}>
      <Admin className={styles.ico} />
      <p className={styles.author}>{author}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}> {description}</p>
      <Button variant="lightFilled" icon={<RightArrowIcon />}>
        Read More
      </Button>
    </div>
  </div>
);

export { Blog };
