import React from "react"
import NavigationStyles from "./Navigation.module.scss"
import PropTypes from "prop-types"
import NavigationItem from "./NavigationItem/NavigationItem"

const Navigation = ({ location }) => {
  const navigationItems = [
    { href: "/how-it-works", text: "How it works" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/faq", text: "FAQ" },
    { href: "/blog", text: "Blog", className: "borderLeft" },
    { href: "/contact", text: "Contact Us" },
  ]
  return (
    <nav className={NavigationStyles.siteNavigation}>
      <ul className={NavigationStyles.navigationList}>
        {navigationItems.map((navigationItem) => (
          <NavigationItem href={navigationItem.href} text={navigationItem.text} />
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  location: PropTypes.string,
}

export default Navigation
