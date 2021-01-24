import React from "react"
import styles from "./Navigation.module.scss"
import NavigationItem from "./NavigationItem/NavigationItem"

const Navigation = () => {
  const navigationItems = [
    { href: "/how-it-works", text: "How it works" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/faq", text: "FAQ", additionalClass: "border-right-item" },
    { href: "/blog", text: "Blog", additionalClass: "border-left-item" },
    { href: "/contact", text: "Contact Us", additionalClass: "button-link" },
  ]
  return (
    <nav className={styles.siteNavigation}>
      <ul className={styles.navigationList}>
        {navigationItems.map((navigationItem) => (
          <NavigationItem
            href={navigationItem.href}
            text={navigationItem.text}
            additionalClass={navigationItem.additionalClass}
            key={navigationItem.text}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
