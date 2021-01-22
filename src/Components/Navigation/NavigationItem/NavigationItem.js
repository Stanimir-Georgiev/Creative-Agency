import React from "react"
import PropTypes from "prop-types"
import NavigationItemStyles from "./NavigationItem.module.scss"

const NavigationItem = ({ href, text }) => {
  return (
    <a href={href} className={NavigationItemStyles.navigationItem}>
      {text}
    </a>
  )
}

NavigationItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationItem
