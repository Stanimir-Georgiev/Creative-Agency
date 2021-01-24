import React from "react"
import styles from "./PageHeading.module.scss"
import PropTypes from "prop-types"

const PageHeading = ({ text }) => {
  return <h1 className={styles.pageHeading}>{text}</h1>
}

PageHeading.propTypes = {
  text: PropTypes.string,
}

export default PageHeading
