import { FC } from "react";
import styles from "./footer.module.scss";
import { Wrapper } from "..";
import { Contact } from "./components/contact";
import { LogoSection } from "./components/logo-section";
import { Utility } from "./components/utility";

const Footer: FC = () => (
  <>
    <Wrapper className={styles.footerWrapper}>
      <Contact />
      <LogoSection />
      <Utility />
    </Wrapper>

    <div className={styles.copywrite}>
      <span>Copyright © </span>
      <a href="#">Organick </a>
      <span>| Designed by </span>
      <a href="#">VictorFlow </a>
      <span>Templates - Powered by </span>
      <a href="#"> Webflow</a>
    </div>
  </>
);

export { Footer };
