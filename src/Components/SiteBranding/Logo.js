import React from "react"
import LogoStyles from "./Logo.module.scss"

const Logo = () => {
  return (
    <div className={LogoStyles.logoWrapper}>
      <a href="/" className={LogoStyles.logo}>
        Arch.
      </a>
    </div>
  )
}

export default Logo
