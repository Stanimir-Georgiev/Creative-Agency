import React from "react"
import styles from "./FAQ.module.scss"
import PropTypes from "prop-types"

const FAQ = ({ question, answer }) => {
  return (
    <li className={styles.faqItem}>
      <span className={styles.question}>{question}</span>
      <span className={styles.answer}>{answer}</span>
    </li>
  )
}

FAQ.propTypes = {
  question: PropTypes.string,
  answe: PropTypes.string,
}

export default FAQ
