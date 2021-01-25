import React from "react"
import PropTypes from "prop-types"
import styles from "./StatisticsWidget.module.scss"

const StatisticsWidget = ({ statistcs }) => {
  return (
    <ul className={styles.statisticsList}>
      {statistcs.map((statistic) => (
        <li className={styles.statisticsItem} key={statistic.id}>
          <h4 className={styles.statisticHeading}>{statistic.heading}</h4>
          <p className={styles.statisticContent}>{statistic.content}</p>
        </li>
      ))}
    </ul>
  )
}

StatisticsWidget.propTypes = {
  statistcs: PropTypes.array,
}

export default StatisticsWidget
