import React from "react"
import HeaderStyles from "./Header.module.scss"
import Logo from "../SiteBranding/Logo"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  return (
    <header className={HeaderStyles.siteHeader}>
      <div className={HeaderStyles.siteHeaderInner}>
        <Logo />
        <Navigation location="header" />
      </div>
    </header>
  )
}

export default Header
