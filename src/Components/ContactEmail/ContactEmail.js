import React from "react"
import styles from "./ContactEmail.module.scss"
import PropTypes from "prop-types"

const ContactEmail = ({ email }) => {
  return <a className={styles.contactEmail}>{email}</a>
}

ContactEmail.propTypes = {
  email: PropTypes.string,
}

export default ContactEmail
