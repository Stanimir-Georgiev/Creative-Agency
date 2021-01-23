import React from "react"
import styles from "./Footer.module.scss"
import Logo from "../SiteBranding/Logo"
import FooterNavigation from "../FooterNavigation/FooterNavigation"

const Footer = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className="row">
        <div className="columns small-12">
          <div className={styles.footerInner}>
            <Logo />
            <FooterNavigation />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
