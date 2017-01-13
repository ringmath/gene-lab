import React, { PropTypes } from 'react'

import Ears from '../Ears'

const propTypes = {
  cornerRadius: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  ears: PropTypes.shape({
    inFront: PropTypes.bool.isRequired,
    scaleWidth: PropTypes.number.isRequired,
    spaceBetween: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.element,
}
const defaultProps = {}

const Head = ({ cornerRadius, height, ears, children }) => {

  const FrontEars = () => (ears.inFront) ? <Ears scaleWidth={ears.scaleWidth} spaceBetween={ears.spaceBetween} /> : null
  const BackEars  = () => (ears.inFront) ? null : <Ears scaleWidth={ears.scaleWidth} spaceBetween={ears.spaceBetween} />

  return (
    <g id="Head">
      <rect id="Skull" fill="#DDDDDD" x="0" y="0" width="285" height="370" />
      <BackEars />
      <rect id="Skull" fill="#E27E2F" x="45" y="54" width="200" height={height} rx={cornerRadius} />
      <FrontEars />
      {children}
    </g>
  )
}

Head.propTypes    = propTypes
Head.defaultProps = defaultProps

export default Head
