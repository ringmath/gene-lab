import React, { PropTypes } from 'react'

const propTypes = {}
const defaultProps = {}

const Cat = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="150" height="100" viewBox="0 0 2 2">

      <rect width="2" height="2" x="0" fill="#ff0000" />
    </svg>
  )
}

Cat.propTypes    = propTypes
Cat.defaultProps = defaultProps

export default Cat
