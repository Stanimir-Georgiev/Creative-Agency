import React from "react"
import styles from "./FooterNavigation.module.scss"
import FooterNavigationItem from "./FooterNavigationItem/FooterNavigationItem"

const FooterNavigation = () => {
  const navigationItems = [
    {
      href: "/about",
      text: "About Us",
    },
    { href: "/support", text: "Contact Support" },
    { href: "/privacy", text: "Privacy Policy" },
    { href: "/terms", text: "Term of use" },
  ]
  return (
    <ul className={styles.footerNavigation}>
      {navigationItems.map((navigationItem) => (
        <FooterNavigationItem
          href={navigationItem.href}
          text={navigationItem.text}
        />
      ))}
    </ul>
  )
}

export default FooterNavigation
