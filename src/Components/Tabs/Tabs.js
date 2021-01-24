import React from "react"
import styles from "./Tabs.module.scss"
import PropTypes from "prop-types"

const Tabs = ({ tabHeading, tabDescription }) => {
  return (
    <li className={styles.tab}>
      <h3 className={styles.tabHeading}>{tabHeading}</h3>
      <p className={styles.tabDescription}>{tabDescription}</p>
    </li>
  )
}

Tabs.propTypes = {
  tabHeading: PropTypes.string,
  tabDescription: PropTypes.string,
}
export default Tabs
