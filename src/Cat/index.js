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
        scaleWidth: 1,
        spaceBetween: 140,
      },
    },
    eyes: {
      rotation: 0,
      voffset: 0,
    }
  }

  return <Animal geometry={geometry} />
}

Cat.propTypes    = propTypes
Cat.defaultProps = defaultProps

export default Cat
