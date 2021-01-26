import React from "react"
import styles from "./Footer.module.scss"
import Logo from "../SiteBranding/Logo"
import FooterNavigation from "../FooterNavigation/FooterNavigation"

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={`row ${styles.footerInner}`}>
        <div className="columns small-3">
          <Logo />
        </div>
        <div className="columns small-9">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  )
}

export default Footer
