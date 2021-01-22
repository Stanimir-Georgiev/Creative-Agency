import React from "react"
import Header from "../AppHeader/AppHeader"
import Footer from "../AppFooter/AppFooter"
import PropTypes from "prop-types"

const Layout = ({ children, disableHeader = false, disableFooter = false }) => {
  return (
    <>
      {!disableHeader && <Header />}
      {children}
      {!disableFooter && <Footer />}
    </>
  )
}

Layout.propTypes = {
  disableHeader: PropTypes.bool,
  disableFooter: PropTypes.bool,
}

export default Layout
