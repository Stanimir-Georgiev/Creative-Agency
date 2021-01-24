import React from "react"
import styles from "./WelcomeSection.module.scss"
import PageHeading from "../../Components/PageHeading/PageHeading"

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className="row">
        <div className="columns small-12">
          <PageHeading text="Highly passion creative agency focusing in modern style architectural design." />
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
