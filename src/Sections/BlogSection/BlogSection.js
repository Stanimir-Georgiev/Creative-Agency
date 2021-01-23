import React from "react"
import styles from "./BlogSection.module.scss"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import BlogBox from "../../Components/BlogBox/BlogBox"

const BlogSection = () => {
  const blogBoxes = [
    {
      imgSrc: "",
      heading: "Tips on arranging a reading room for your home",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
    },
    {
      imgSrc: "",
      heading: "Arranging work space near the kitchen",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
    },
    {
      imgSrc: "",
      heading: "Tips on arranging a small space in the apartment",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
    },
  ]
  return (
    <section className={styles.blogSection}>
      <div className="row">
        <div className="columns small-12 large-6">
          <SectionHeading text="Light reading on architecture for you" />
        </div>
        <div className="columns small-12 large-6">
          <a href="blog" className={styles.blogPageLink}>
            View all blogs
          </a>
        </div>
        <div className="row">
          <div className="columns small-12">
            <div className={styles.blogPostGrid}>
              {blogBoxes.map((box) => (
                <BlogBox
                  imgSrc={box.imgSrc}
                  heading={box.heading}
                  description={box.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
