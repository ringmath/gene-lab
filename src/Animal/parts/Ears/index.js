import React, { PropTypes } from 'react'

const propTypes = {
  scaleWidth:  PropTypes.number.isRequired,
  spaceBetween: PropTypes.number.isRequired,
}
const defaultProps = {}

const Ears = ({ scaleWidth, spaceBetween }) => {
  const offset = spaceBetween / 2

  const leftTransform = `translate(${145-offset},0) scale(${scaleWidth}, 1)`
  const rightTransform = `translate(${145+offset},0) scale(${scaleWidth}, 1)`

  return (
    <g id="Ears">
      <polygon id="Left-Ear" fill="#A85D22" points="0 0 -25 107 25 107" transform={leftTransform}>
      </polygon>
      <polygon id="Right-Ear" fill="#A85D22" points="0 0 -25 107 25 107" transform={rightTransform}>
      </polygon>
    </g>
  )
}

Ears.propTypes    = propTypes
Ears.defaultProps = defaultProps

export default Ears
