import React, { PropTypes } from 'react'

import Animal from '../Animal/'

const propTypes = {}
const defaultProps = {}

const Dog = () => {
  const geometry = {
    head: {
      cornerRadius: 14,
      height: 275,
      ears: {
        inFront: true,
      },
    },
  }

  return <Animal geometry={geometry} />
}

Dog.propTypes    = propTypes
Dog.defaultProps = defaultProps

export default Dog
