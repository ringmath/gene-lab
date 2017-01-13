import React, { PropTypes } from 'react'

import Animal from '../Animal/'

const propTypes = {}
const defaultProps = {}

const Cat = () => {
  const geometry = {
    head: {
      cornerRadius: 78,
      height: 200,
      ears: {
        inFront: false,
        spaceBetween: 140,
        scaleWidth: 1,
      },
    },
  }

  return <Animal geometry={geometry} />
}

Cat.propTypes    = propTypes
Cat.defaultProps = defaultProps

export default Cat
