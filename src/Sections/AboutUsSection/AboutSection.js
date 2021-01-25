import React from "react"
import styles from "./AboutSection.module.scss"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import CTA from "../../Components/CTA/CTA"
import StatisticsWidget from "../../Components/StatisticsWidget/StatisticsWidget"

const AboutSection = () => {
  const statistics = [
    { heading: "Years Experience", content: "12", id: 1 },
    { heading: "Complete Prijects", content: "40+", id: 2 },
    { heading: "Awards Winning", content: "4", id: 3 },
    { heading: "Clients Satisfied", content: "40+", id: 4 },
  ]
  return (
    <section className={styles.aboutSection}>
      <div className="row">
        <div className="columns small-12 medium-6 large-6">
          <SectionHeading text="We always do work in structure and plan" />
          <StatisticsWidget statistcs={statistics} />
        </div>
        <div className="columns small-12 medium-6 large-6">
          <div className={styles.aboutSectionDescription}>
            <p className={styles.aboutSectionDescriptionParagraph}>
              Mattis non venenatis, nisl fringilla urna quis tempor eu. Est magna
              donec porritor auctor aenean orci, metus, leo, magnis.
            </p>
            <p className={styles.aboutSectionDescriptionParagraph}>
              Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus
              auctor aliquet. Volutpat sit vulputate non aliquet tellus.
            </p>
            <CTA href="/about" text="Learn More" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
