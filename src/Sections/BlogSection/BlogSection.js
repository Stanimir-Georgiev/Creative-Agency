import React from "react"
import styles from "./BlogSection.module.scss"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import Post from "../../Components/Post/Post"
import CTA from "../../Components/CTA/CTA"

const BlogSection = () => {
  const Posts = [
    {
      imgSrc:
        "https://2.bp.blogspot.com/-c8cQF56oysI/UXWaEWZtjLI/AAAAAAAAAVk/oq-nx8FsLJw/s1600/Bookstore-reading-room-design-rendering.jpg",
      imgAlt: "reading room",
      heading: "Tips on arranging a reading room for your home",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
      href: "",
      id: 1,
    },
    {
      imgSrc:
        "https://homeguru.homepro.co.th/wp-content/uploads/2020/03/kitchen-room-1600.jpg",
      imgAlt: "kitchen",
      heading: "Arranging work space near the kitchen",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
      href: "",
      id: 2,
    },
    {
      imgSrc:
        "https://cdn.home-designing.com/wp-content/uploads/2018/06/Studio-apartment-with-loft-bed.jpg",
      imgAlt: "small-space",
      heading: "Tips on arranging a small space in the apartment",
      description:
        "Mattis vitae vestibulum aliquam eu augue. Commodo eget vitae cursus auctor aliquet.",
      href: "",
      id: 3,
    },
  ]
  return (
    <section className={styles.blogSection}>
      <div className="row">
        <div className="columns small-12 medium-6 large-6">
          <SectionHeading text="Light reading on architecture for you" />
        </div>
        <div className="columns small-12 medium-6 large-6 column-flex margin-top-mobile">
          <CTA href="/blog" text="View all blogs" />
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
                href={box.href}
                key={box.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
