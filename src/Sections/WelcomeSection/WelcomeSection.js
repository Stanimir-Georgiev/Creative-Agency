import React from "react"
import styles from "./WelcomeSection.module.scss"
import PageHeading from "../../Components/PageHeading/PageHeading"
import Image from "../../Components/Image/Image"
import Tabs from "../../Components/Tabs/Tabs"

const WelcomeSection = () => {
  const tabs = [
    {
      tabHeading: "Scandinavian Design",
      tabDescription:
        "Primier modern contemporary home furnishings destination - offering quality craftsmasnhip",
      id: 1,
    },
    {
      tabHeading: "Industrial Design",
      tabDescription:
        "Consisting mostly if neutral hues and materials that focus on unique textures",
      id: 2,
    },
    {
      tabHeading: "Brutalism Design",
      tabDescription:
        "Raw materials, textured surfaces, simple materials used and applying geometric shapes",
      id: 3,
    },
  ]

  const images = [
    {
      id: 1,
      imgUrl:
        "https://cdn.home-designing.com/wp-content/uploads/2018/12/Scandinavian-living-room.jpg",
    },
    {
      id: 2,
      imgUrl: "https://i.ytimg.com/vi/IEHrEYiEUJI/maxresdefault.jpg",
    },
    {
      id: 3,
      imgUrl:
        "https://cdn.home-designing.com/wp-content/uploads/2020/04/stunning-brutalist-architecture-1024x512.jpg",
    },
  ]
  return (
    <section className={styles.welcomeSection}>
      <div className="row">
        <div className="columns small-12">
          <PageHeading text="Highly passion creative agency focusing in modern style architectural design." />
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          {images.map((image) => (
            <Image
              imgSrc={image.imgUrl}
              imgAlt={image.imgAlt}
              aspectRatio={56.25}
              key={image.id}
            />
          ))}
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <ul className={styles.tabsList}>
            {tabs.map((tab) => (
              <Tabs
                tabHeading={tab.tabHeading}
                tabDescription={tab.tabDescription}
                key={tab.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
