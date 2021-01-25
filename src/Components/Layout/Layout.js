import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import PropTypes from "prop-types"

const Layout = ({ children, disableHeader = false, disableFooter = false }) => {
  return (
    <>
      {!disableHeader && <Header />}
      <main className="site-main" id="main">
        {children}
      </main>
      {!disableFooter && <Footer />}
    </>
  )
}

Layout.propTypes = {
  disableHeader: PropTypes.bool,
  disableFooter: PropTypes.bool,
}

export default Layout
