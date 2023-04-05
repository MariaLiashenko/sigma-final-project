import classNames from "classnames";
import { FC } from "react";
import { Wrapper } from "../";
import TestimonialPersonImg from "../../../src/assets/images/testimonials-person.png";
import { ReactComponent as Star } from "../../assets/icons/star.svg";
import styles from "./testimonial.module.scss";

const Testimonial: FC = () => (
  <Wrapper id={"testimonial"} className={styles.testimonialWrapper}>
    <div className={styles.container}>
      <p className={styles.name}>Testimonial</p>
      <h2 className={styles.article}>What Our Customer Saying?</h2>

      <div className={styles.feedback}>
        <img src={TestimonialPersonImg} alt="avatar" />
        <div className={styles.stars}>
          {new Array(5).fill(0).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
        <p className={styles.description}>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <p className={styles.fullName}>Sara Taylor</p>
        <p className={styles.consumer}>Consumer</p>
        <div className={styles.dots}>
          <button className={styles.point} />
          <button className={classNames(styles.point, styles.current)} />
          <button className={styles.point} />
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.counter}>
          <p className={styles.number}>100%</p>
          <p>Organic</p>
        </div>
        <div className={styles.counter}>
          <p className={styles.number}>285</p>
          <p>Active Product</p>
        </div>
        <div className={styles.counter}>
          <p className={styles.number}>350+</p>
          <p>Organic Orchads</p>
        </div>
        <div className={styles.counter}>
          <p className={styles.number}>25+</p>
          <p>Years of Farming</p>
        </div>
      </div>
    </div>
  </Wrapper>
);

export { Testimonial };
