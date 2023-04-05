import { FC } from "react";
import styles from "./offer.module.scss";
import NaturalImg from "../../../src/assets/images/natural-baner-background.jpg";
import OfferImg from "../../../src/assets/images/offer-baner-background.jpg";
import { Wrapper } from "..";
import { Banner } from "./components";

const Offer: FC = () => (
  <Wrapper className={styles.offerWrapper}>
    <Banner
      name="Natural!!"
      article="Get Garden Fresh Fruits"
      background={NaturalImg}
    />
    <Banner
      name="Offer!!"
      article="Get 10% off
          on Vegetables"
      background={OfferImg}
    />
  </Wrapper>
);

export { Offer };
