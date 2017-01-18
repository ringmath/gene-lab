import React, { PropTypes } from 'react'

const propTypes = {
  rotation:  PropTypes.number.isRequired,
  voffset:  PropTypes.number.isRequired,
}
const defaultProps = {}

const Eyes = ({ rotation, voffset }) => {

  const groupTransform = `translate(32, ${90+voffset})`
  const leftTransform  = `translate(0, 0)`
  const rightTransform = `translate(90,0)`
  const leftEyeBallTransform  = `translate(21.5, 26) rotate(${90-rotation}) translate(-21.5, -26)`
  const rightEyeBallTransform  = `translate(21.5, 26) rotate(${90-rotation}) translate(-21.5, -26)`

  return (
    <g id="Eyes" transform={groupTransform}>
      <g id="Left-Eye" transform={leftTransform}>
        <g transform={leftEyeBallTransform}>
          <ellipse id="white" fill="#FFFFFF" cx="21.5" cy="26" rx="21.5" ry="26">
          </ellipse>
          <circle id="iris" fill="#0088FF" cx="21.5" cy="26.5" r="21.5">
          </circle>
          <circle id="pupil" fill="#000000" cx="21.5" cy="26.5" r="16.5">
          </circle>
        </g>
      </g>
      <g id="Right-Eye" transform={rightTransform}>
        <g transform={rightEyeBallTransform}>
          <ellipse id="white" fill="#FFFFFF" cx="21.5" cy="26" rx="21.5" ry="26">
          </ellipse>
          <circle id="iris" fill="#0088FF" cx="21.5" cy="26.5" r="21.5">
          </circle>
          <circle id="pupil" fill="#000000" cx="21.5" cy="26.5" r="16.5">
          </circle>
        </g>
      </g>
    </g>
  )
}

Eyes.propTypes    = propTypes
Eyes.defaultProps = defaultProps

export default Eyes
