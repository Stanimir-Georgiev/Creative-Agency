import React from "react"
import styles from "./BlogBox.module.scss"
import Proptypes from "prop-types"

const BlogBox = ({ imgSrc, heading, description }) => {
  return (
    <div className={styles.blogPostBox}>
      <h3 className={styles.blogPostBoxHeading}>{heading}</h3>
      <p className={styles.blogPostBoxDescription}>{description}</p>
    </div>
  )
}

BlogBox.propType = {
  imgSrc: Proptypes.string,
  heading: Proptypes.string,
  description: Proptypes.string,
}

export default BlogBox
