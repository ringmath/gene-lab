import React, { PropTypes } from 'react'

const propTypes = {}
const defaultProps = {}

const Dog = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="150" height="100" viewBox="0 0 2 2">

      <rect width="2" height="2" x="0" fill="#00ff00" />
    </svg>
  )
}

Dog.propTypes    = propTypes
Dog.defaultProps = defaultProps

export default Dog
