import React from "react"
import styles from "./PortfolioSection.module.scss"
import PortfolioBox from "../../Components/PortfolioBox/PortfolioBox"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import CTA from "../../Components/CTA/CTA"

const PortfolioSection = () => {
  const porfolioBoxes = [
    {
      imgSrc:
        "https://i.pinimg.com/originals/4d/d9/09/4dd909a851e2d557cf2b6ec4d76e8c16.jpg",
      imgAlt: "Wooden house",
      heading: "Zwolle Modern Building",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem vivierra in elit justo urna",
      id: 1,
    },
    {
      imgSrc:
        "https://i.pinimg.com/originals/86/94/76/869476ffb8da4da47d95db13f5a3b3a4.jpg",
      imgAlt: "Modern house",
      heading: "Blue and Gray Concrete House With Attic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem viverra in elit justo urna",
      id: 2,
    },
    {
      imgSrc: "https://i.ytimg.com/vi/4T-RqnMhVRQ/maxresdefault.jpg",
      imgAlt: "Modern House",
      heading: "Blue and Gray Concrete House with Attic",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem viverra in elit justo urna",
      id: 3,
    },
    {
      imgSrc: "https://www.borovetz-yambol.com/images/bar/big/6.jpg",
      imgAlt: "Club",
      heading: "Club Valentin",
      description:
        "Lorem ipsum dolor sit, consectetur adipiscing elit. Lorem viverra in elit justo urna",
      id: 4,
    },
  ]
  return (
    <section className={styles.portfolioSection}>
      <div className="row">
        <div className="columns small-6">
          <SectionHeading
            text="Out valuable works with the clients"
            additionalClass="color-primary-darker margin-bottom"
          />
          <CTA
            href="/portfolio"
            text="View all portfolio"
            additionalClass="darker-color margin-bottom"
          />
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <ul className={styles.porfolioList}>
            {porfolioBoxes.map((box) => (
              <PortfolioBox
                imgSrc={box.imgSrc}
                imgAlt={box.imgAlt}
                heading={box.heading}
                description={box.description}
                key={box.id}
                id={box.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
