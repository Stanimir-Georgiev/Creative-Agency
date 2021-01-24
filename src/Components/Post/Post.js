import React from "react"
import styles from "./Post.module.scss"
import Proptypes from "prop-types"
import Image from "../../Components/Image/Image"

const Post = ({ imgSrc, imgAlt, heading, description, href }) => {
  return (
    <div className={styles.post}>
      <a href={href} className={styles.postLinkWrapper}>
        <Image imgSrc={imgSrc} imgAlt={imgAlt} aspectRatio={70} />
        <h3 className={styles.postHeading}>{heading}</h3>
        <p className={styles.postDescription}>{description}</p>
      </a>
    </div>
  )
}

Post.propType = {
  imgSrc: Proptypes.string,
  heading: Proptypes.string,
  description: Proptypes.string,
  imgAlt: Proptypes.string,
  href: Proptypes.string,
}

export default Post
