import { FC } from "react";
import { Button, Wrapper } from "..";
import { ReactComponent as AboutFoods } from "../../assets/icons/about-foods.svg";
import { ReactComponent as AboutQuality } from "../../assets/icons/about-quality.svg";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";
import styles from "./about.module.scss";

const About: FC = () => (
  <Wrapper id={"about"} className={styles.section}>
    <div className={styles.container}>
      <p className={styles.name}>About Us</p>
      <h2 className={styles.article}>
        We Believe in Working Accredited Farmers
      </h2>
      <p className={styles.description}>
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <div className={styles.categories}>
        <div className={styles.category}>
          <AboutFoods className={styles.icon} />
          <div className={styles.categoryWrapper}>
            <p className={styles.title}>Organic Foods Only</p>
            <p className={styles.description}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
        <div className={styles.category}>
          <AboutQuality className={styles.icon} />
          <div className={styles.categoryWrapper}>
            <p className={styles.title}>Organic Foods Only</p>
            <p className={styles.description}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </p>
          </div>
        </div>
      </div>
      <Button variant="darkFilled" icon={<RightArrowIcon />}>
        Explore Now
      </Button>
    </div>
  </Wrapper>
);

export { About };
