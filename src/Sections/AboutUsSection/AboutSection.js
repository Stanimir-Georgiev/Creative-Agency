import React from "react"
import styles from "./AboutSection.module.scss"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import CTA from "../../Components/CTA/CTA"

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="row">
        <div className="columns small-12 large-6">
          <SectionHeading text="We always do work in structure and plan" />
        </div>
        <div className="columns small-12 large-6">
          <div className={styles.aboutSectionDescription}>
            <p className={styles.aboutSectionDescriptionParagraph}>
              Mattis non venenatis, nisl fringilla urna quis tempor eu. Est magna
              donec porritor auctor aenean orci, metus, leo, magnis.
            </p>
            <p className={styles.aboutSectionDescriptionParagraph}>
              Mattis non venenatis, nisl fringilla urna quis tempor eu. Est magna
              donec porritor auctor aenean orci, metus, leo, magnis.
            </p>
            <CTA href="/about" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
