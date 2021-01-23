import React from "react"
import styles from "./Post.module.scss"
import Proptypes from "prop-types"

const Post = ({ imgSrc, imgAlt, heading, description }) => {
  // A check if there is an image set before we output it below.
  const imageTag = imgSrc ? (
    <picture className={styles.postImage}>
      <img src={imgSrc} alt={imgAlt} />
    </picture>
  ) : (
    <div className={styles.noImage}></div>
  )

  return (
    <div className={styles.post}>
      {imageTag}
      <h3 className={styles.postHeading}>{heading}</h3>
      <p className={styles.postDescription}>{description}</p>
    </div>
  )
}

Post.propType = {
  imgSrc: Proptypes.string,
  heading: Proptypes.string,
  description: Proptypes.string,
  imgAlt: Proptypes.string,
}

export default Post
