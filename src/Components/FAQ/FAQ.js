import React, { useState } from "react"
import styles from "./FAQ.module.scss"
import PropTypes from "prop-types"
import cx from "classnames"

const FAQ = ({ question, answer }) => {
  const [isActive, setisActive] = useState(false)

  const handleAnswerVisibility = () => {
    if (!isActive) {
      setisActive(true)
    } else {
      setisActive(false)
    }
  }
  return (
    <li className={styles.faqItem}>
      <span className={styles.question} onClick={handleAnswerVisibility}>
        {question}
      </span>
      <div
        className={cx({ [styles.answerWrapper]: true, [styles.isActive]: isActive })}
      >
        <span className={styles.answer}>{answer}</span>
      </div>
    </li>
  )
}

FAQ.propTypes = {
  question: PropTypes.string,
  answe: PropTypes.string,
}

export default FAQ
