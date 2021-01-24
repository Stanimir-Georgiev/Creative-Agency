import React from "react"
import styles from "./Image.module.scss"
import PropTypes from "prop-types"
import NoImage from "../../Images/no-image-found-360x250.png"

const Image = ({ imgSrc, imgAlt, aspectRatio }) => {
  // A check if there is an image set before we output it below.
  const img = imgSrc ? (
    <img src={imgSrc} alt={imgAlt} />
  ) : (
    <img src={NoImage} alt="No Image" />
  )
  return (
    <picture className={styles.image} style={{ paddingBottom: `${aspectRatio}%` }}>
      {img}
    </picture>
  )
}

Image.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  aspectRatio: PropTypes.number,
}

export default Image
