import React from "react"
import styles from "./PortfolioBox.module.scss"
import PropTypes from "prop-types"
import Image from "../../Components/Image/Image"
import cx from "classnames"

const PortfolioBox = ({ imgSrc, imgAlt, heading, description, id }) => {
  return (
    <li
      className={cx(
        { [styles.portfolioBox]: true },
        { [styles.portfolioBoxTransform]: id % 2 === 0 },
        { [styles.portfolioBoxNoMargin]: id === 3 }
      )}
    >
      <Image imgAlt={imgAlt} imgSrc={imgSrc} aspectRatio={100} />
      <h3 className={styles.portfolioBoxHeading}>{heading}</h3>
      <p className={styles.portfolioBoxDescription}>{description}</p>
    </li>
  )
}

PortfolioBox.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
}

export default PortfolioBox
