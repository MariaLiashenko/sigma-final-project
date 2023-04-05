import { FC } from "react";
import { Button, Wrapper } from "..";
import styles from "./preview-banner.module.scss";
import { ReactComponent as RightArrowIcon } from "../../assets/icons/right-arrow.svg";

const PreviewBanner: FC = () => (
  <Wrapper id={"home"} className={styles.previewBannerWrapper}>
    <p className={styles.name}>100% Natural Food</p>
    <h1 className={styles.article}>Choose the best healthier way of life</h1>
    <Button variant="lightFilled" icon={<RightArrowIcon />}>
      Explore Now
    </Button>
  </Wrapper>
);

export { PreviewBanner };
