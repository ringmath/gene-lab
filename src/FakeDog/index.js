import React, { PropTypes } from 'react'

const propTypes = {}
const defaultProps = {}

const FakeDog = () => {
  return (
    <svg width="285px" height="370px" viewBox="0 0 285 370" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect id="Head" x="42" y="77" width="200" height="275" rx="14" fill="#B5925E">
        </rect>
        <polygon id="Left-Ear" fill="#95794E" points="42.5 0 85 132 0 132">
        </polygon>
        <polygon id="Right-Ear" fill="#95794E" points="242.5 0 285 132 200 132">
        </polygon>
        <g id="Snout" transform="translate(85.000000, 252.000000)">
          <rect fill="#D0A96F" x="0" y="0" width="115" height="118" rx="14">
          </rect>
          <path d="M57.5,66 C57.5,118 102,118 102,118 L13,118 C13,118 57.5,118 57.5,66 Z" id="Mouth" fill="#A58656">
          </path>
          <polygon id="Nose" fill="#7C633C" transform="translate(57.500000, 41.000000) scale(1, -1) translate(-57.500000, -41.000000) " points="57.5 23 93 59 22 59">
          </polygon>
        </g>
        <g id="Left-Eye" transform="translate(74.000000, 163.000000)">
          <ellipse id="white" fill="#FFFFFF" cx="21.5" cy="26" rx="21.5" ry="26">
          </ellipse>
          <circle id="iris" fill="#0088FF" cx="21.5" cy="26.5" r="21.5">
          </circle>
          <circle id="pupil" fill="#000000" cx="21.5" cy="26.5" r="16.5">
          </circle>
        </g>
        <g id="Right-Eye" transform="translate(169.000000, 163.000000)">
          <ellipse id="white" fill="#FFFFFF" cx="21.5" cy="26" rx="21.5" ry="26">
          </ellipse>
          <circle id="iris" fill="#0088FF" cx="21.5" cy="26.5" r="21.5">
          </circle>
          <circle id="pupil" fill="#000000" cx="21.5" cy="26.5" r="16.5">
          </circle>
        </g>
      </g>
    </svg>
  )
}

FakeDog.propTypes    = propTypes
FakeDog.defaultProps = defaultProps

export default FakeDog
