import React from "react"
import styles from "./CTA.module.scss"
import PropTypes from "prop-types"

const CTA = ({ href, text }) => {
  return (
    <a href={href} className={styles.cta}>
      {text}
    </a>
  )
}

CTA.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
}

export default CTA
