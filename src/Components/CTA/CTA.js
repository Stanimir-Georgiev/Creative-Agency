import React from "react"
import styles from "./CTA.module.scss"
import PropTypes from "prop-types"
import cx from "classnames"

const CTA = ({ href, text, additionalClass }) => {
  return (
    <a
      href={href}
      className={cx(
        { [styles.cta]: true },
        { [styles.darkerColor]: additionalClass?.includes("darker-color") },
        { [styles.marginBottom]: additionalClass?.includes("margin-bottom") }
      )}
    >
      {text}
    </a>
  )
}

CTA.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  additionalClass: PropTypes.string,
}

export default CTA
