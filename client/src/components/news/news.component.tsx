import { FC } from "react";
import { Button } from "../button";
import { Wrapper } from "..";
import { Blog } from "./components";
import styles from "./news.module.scss";
import NewsBenefetsImg from "../../../src/assets/images/news-benefits.png";
import NewsTomatoImg from "../../../src/assets/images/news-tomato.png";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";

const News: FC = () => (
  <Wrapper className={styles.newsWrapper}>
    <div className={styles.newsContainer}>
      <div className={styles.text}>
        <p className={styles.name}>News</p>
        <h2 className={styles.title}>
          Discover weekly content about organic food, more
        </h2>
      </div>
      <Button variant="lightOutline" icon={<RightArrowIcon />}>
        More News
      </Button>
    </div>
    <div className={styles.reviews}>
      <Blog
        date="25 Nov"
        author="By Rachi Card"
        title="The Benefits of Vitamin D How to Get It"
        description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        background={NewsBenefetsImg}
      />
      <Blog
        date="25 Nov"
        author="By Rachi Card"
        title="Our Favourite Summertime Tommeto"
        description="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        background={NewsTomatoImg}
      />
    </div>
  </Wrapper>
);

export { News };
