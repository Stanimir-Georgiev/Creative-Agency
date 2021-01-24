import React from "react"
import PropTypes from "prop-types"
import styles from "./NavigationItem.module.scss"
import cx from "classnames"

const NavigationItem = ({ href, text, additionalClass }) => {
  return (
    <li
      className={cx(
        { [styles.navigationItem]: true },
        { [styles.borderLeftItem]: additionalClass === "border-left-item" },
        { [styles.borderRightItem]: additionalClass === "border-right-item" },
        { [styles.buttonItem]: additionalClass === "button-link" }
      )}
    >
      <a
        href={href}
        className={cx(
          { [styles.navigationLink]: true },
          { [styles.borderLeftLink]: additionalClass === "border-left-item" },
          { [styles.borderRightLink]: additionalClass === "border-right-item" },
          { [styles.buttonLink]: additionalClass === "button-link" }
        )}
      >
        {text}
      </a>
    </li>
  )
}

NavigationItem.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  additionalClass: PropTypes.string,
}

export default NavigationItem
