import React from "react"
import styles from "./FAQSection.module.scss"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"
import ContactEmail from "../../Components/ContactEmail/ContactEmail"
import FAQ from "../../Components/FAQ/FAQ"

const FAQSection = () => {
  const faqs = [
    {
      question: "How to order your services?",
      answer: "Samo mi zvanni brat",
      id: 1,
    },
    {
      question: "How do you charge for the cost?",
      asnwer: "Plashtai, plastai",
      id: 2,
    },
    {
      question: "Can I get guarantee of your services?",
      answer: "Nachi ina godina nq sa uplachish",
      id: 3,
    },
    {
      question: "Do you accepts work out of UK area?",
      answer: "Kaf UK we manqk",
      id: 4,
    },
    {
      question: "Is this included wuth interior design?",
      asnwer: "Ne, tui da ne e mandra, she plastash dopalnitelno",
      id: 5,
    },
  ]
  return (
    <section className={styles.faqSection}>
      <div className="row">
        <div className="columns small-12 medium-12 large-6">
          <SectionHeading
            text="Everything you want to know. We'll ready"
            additionalClass="color-primary-darker"
          />
          <p className={styles.mailSeparator}>or drop an email at</p>
          <ContactEmail email="ask@archdsgnlab.com" />
        </div>
        <div className="columns small-12 medium-12 large-6">
          <ul className={styles.faqList}>
            {faqs.map((faq) => (
              <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
