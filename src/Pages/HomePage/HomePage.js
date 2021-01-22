import React from "react"
import Layout from "../../Components/Layout/Layout"
import WelcomeSection from "../../Sections/WelcomeSection/WelcomeSection"
import AboutUsSection from "../../Sections/AboutUsSection/AboutSection"
import PorfolioSection from "../../Sections/PortfolioSection/PortfolioSection"
import FAQSection from "../../Sections/FAQSection/FAQSection"
import BlogSection from "../../Sections/BlogSection/BlogSection"

const HomePage = () => {
  return (
    <Layout>
      <WelcomeSection />
      <AboutUsSection />
      <PorfolioSection />
      <FAQSection />
      <BlogSection />
    </Layout>
  )
}

export default HomePage
