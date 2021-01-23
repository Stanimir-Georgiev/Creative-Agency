import React from "react"
import styles from "./FooterNavigationItem.module.scss"

const FooterNavigationItem = ({ href, text }) => {
  return (
    <li key={text} className={styles.footerNavigationItem}>
      <a href={href} className={styles.footerNavigationLink}>
        {text}
      </a>
    </li>
  )
}

export default FooterNavigationItem
