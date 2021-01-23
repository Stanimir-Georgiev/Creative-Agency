import React from "react"
import styles from "./BlogSection.module.scss"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import Post from "../../Components/Post/Post"

const BlogSection = () => {
  const Posts = [
    {
      imgSrc:
        "https://2.bp.blogspot.com/-c8cQF56oysI/UXWaEWZtjLI/AAAAAAAAAVk/oq-nx8FsLJw/s1600/Bookstore-reading-room-design-rendering.jpg",
      imgAlt: "reading room",
      heading: "Tips on arranging a reading room for your home",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
    },
    {
      imgSrc:
        "https://homeguru.homepro.co.th/wp-content/uploads/2020/03/kitchen-room-1600.jpg",
      imgAlt: "kitchen",
      heading: "Arranging work space near the kitchen",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
    },
    {
      imgSrc:
        "https://cdn.home-designing.com/wp-content/uploads/2018/06/Studio-apartment-with-loft-bed.jpg",
      imgAlt: "small-space",
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
        <div className="columns small-12 large-6 column-flex">
          <a href="blog" className={styles.blogPageLink}>
            View all blogs
          </a>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12">
          <div className={styles.blogPostGrid}>
            {Posts.map((box) => (
              <Post
                imgSrc={box.imgSrc}
                heading={box.heading}
                description={box.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
