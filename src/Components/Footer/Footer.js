import React from "react"
import styles from "./Footer.module.scss"
import Logo from "../SiteBranding/Logo"
import FooterNavigation from "../FooterNavigation/FooterNavigation"

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={`row ${styles.footerInner}`}>
        <div className="columns small-3 medium-4 large-4">
          <Logo />
        </div>
        <div className="columns small-9 medium-8 large-8">
          <FooterNavigation />
        </div>
      </div>
    </footer>
  )
}

export default Footer
