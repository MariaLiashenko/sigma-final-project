import { FC } from "react"
import styles from "./logo-section.module.scss"
import { Logo } from "../../../logo"
import { ReactComponent as Instagram } from "../../../../assets/icons/insta.svg"
import { ReactComponent as Facebook } from "../../../../assets/icons/fb.svg"
import { ReactComponent as Twitter } from "../../../../assets/icons/twitter.svg"
import { ReactComponent as Pinterest } from "../../../../assets/icons/pinterest.svg"

const LogoSection: FC = () => {
  return (
    <div className={styles.logoSectionWrapper}>
      <Logo />
      <p>
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum
        simply dummy text of the printing{" "}
      </p>
      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/">
          <Instagram className={styles.ico} />
        </a>
        <a href="https://www.facebook.com/">
          <Facebook className={styles.ico} />
        </a>
        <a href="https://twitter.com/">
          <Twitter className={styles.ico} />
        </a>

        <a href="https://www.pinterest.com/pinterest/">
          <Pinterest className={styles.ico} />
        </a>
      </div>
    </div>
  )
}

export { LogoSection }
