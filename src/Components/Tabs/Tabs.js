import React from "react"
import styles from "./Tabs.module.scss"
import PropTypes from "prop-types"
import cx from "classnames"

const Tabs = ({ tabHeading, tabDescription, onClick, id, isActive }) => {
  const handleClick = () => {
    onClick(id)
  }
  return (
    <li
      className={cx({ [styles.tab]: true }, { [styles.isActive]: isActive })}
      onClick={handleClick}
    >
      <h3 className={styles.tabHeading}>{tabHeading}</h3>
      <p className={styles.tabDescription}>{tabDescription}</p>
    </li>
  )
}

Tabs.propTypes = {
  tabHeading: PropTypes.string,
  tabDescription: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
}
export default Tabs
