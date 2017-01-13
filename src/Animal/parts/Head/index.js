import React, { PropTypes } from 'react'

const propTypes = {
  cornerRadius: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  ears: PropTypes.shape({
    inFront: PropTypes.bool.isRequired,
  }).isRequired,
  children: PropTypes.element,
}
const defaultProps = {}

const Head = ({geometry}) => {
  return (
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <polygon id="Left-Ear" fill="#A85D22" points="25.5 0 50 107 1 107" transform="translate(5,0)">
      </polygon>
      <polygon id="Right-Ear" fill="#A85D22" points="174.5 0 199 107 150 107" transform="translate(-5,0)">
      </polygon>
      <rect id="Head" fill="#E27E2F" x="0" y="54" width="200" height={geometry.head.height} rx={geometry.head.cornerRadius}>
      </rect>
      {children}
    </g>
  )
}

Head.propTypes    = propTypes
Head.defaultProps = defaultProps

export default Head
