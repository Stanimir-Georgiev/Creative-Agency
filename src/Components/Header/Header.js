import React from "react"
import styles from "./Header.module.scss"
import Logo from "../SiteBranding/Logo"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <div className="row">
        <div className="columns small-12">
          <div className={styles.headerInner}>
            <Logo />
            <Navigation location="header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
