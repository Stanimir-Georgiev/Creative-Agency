import React from "react"
import styles from "./SectionHeading.module.scss"
import cx from "classnames"
import PropTypes from "prop-types"

const SectionHeading = ({ text, additionalClass }) => {
  return (
    <h2
      className={cx(
        { [styles.sectionHeading]: true },
        {
          [styles.colorPrimaryDarker]: additionalClass?.includes(
            "color-primary-darker"
          ),
        },
        { [styles.marginBottom]: additionalClass?.includes("margin-bottom") }
      )}
    >
      {text}
    </h2>
  )
}

SectionHeading.propTypes = {
  text: PropTypes.string,
  additionalClass: PropTypes.string,
}

export default SectionHeading
