import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      textAlign: `center`,
    }}
  >
    <div
      style={{
        backgroundColor: '#00619e',
        height: 40,
      }}
    ></div>
    <div
      style={{
        backgroundColor: '#ffffff',
        margin: `0 auto`,
        height: 40,
        boxShadow: `0 2px 3px rgba(25, 41, 61, 0.13)`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
