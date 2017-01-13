import React, { PropTypes } from 'react'

const propTypes = {}
const defaultProps = {}

const Cat = () => {
  return (
    <svg width="200px" height="254px" viewBox="0 0 200 254" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon id="Left-Ear" fill="#A85D22" points="25.5 0 50 107 1 107" transform="translate(5,0)">
        </polygon>
        <polygon id="Right-Ear" fill="#A85D22" points="174.5 0 199 107 150 107" transform="translate(-5,0)">
        </polygon>
        <rect id="Head" fill="#E27E2F" x="0" y="54" width="200" height="200" rx="78">
        </rect>
        <g id="Snout" transform="translate(54.000000, 154.000000)">
          <mask id="mask-2" fill="white">
            <ellipse id="path-1" cx="46" cy="47" rx="46" ry="47">
            </ellipse>
          </mask>
          <ellipse id="path-1" cx="46" cy="47" rx="46" ry="47" fill="#F9C49A">
          </ellipse>
          <polygon id="Nose" fill="#B36222" mask="url(#mask-2)" transform="translate(46.000000, 38.000000) scale(1, -1) translate(-46.000000, -38.000000) " points="46 29 69.3 47 22.7 47">
          </polygon>
          <g id="Mouth" mask="url(#mask-2)">
            <g transform="translate(0.000000, 45.000000)">
              <mask id="mask-4" fill="white">
                <path d="M91.9591042,2.77555756e-15 C91.9862776,0.66320702 92,1.32996615 92,2 C92,27.9573832 71.4050985,49 46,49 C20.5949015,49 0,27.9573832 0,2 C0,1.32996615 0.0137224416,0.66320702 0.0408958409,1.11022302e-15 L91.9591042,2.84217094e-14 Z" id="path-3">
                </path>
              </mask>
              <path id="Combined-Shape" stroke="none" fill="#F9C49A" fillRule="evenodd" d="M91.9591042,2.77555756e-15 C91.9862776,0.66320702 92,1.32996615 92,2 C92,27.9573832 71.4050985,49 46,49 C20.5949015,49 0,27.9573832 0,2 C0,1.32996615 0.0137224416,0.66320702 0.0408958409,1.11022302e-15 L91.9591042,2.84217094e-14 Z">
              </path>
              <circle id="Oval-2" stroke="#A85D22" strokeWidth="5" fill="none" mask="url(#mask-4)" cx="22" cy="2" r="24">
              </circle>
              <circle id="Oval-2-Copy" stroke="#A85D22" strokeWidth="5" fill="none" mask="url(#mask-4)" cx="70" cy="2" r="24">
              </circle>
            </g>
          </g>
        </g>
        <g id="Left-Whiskers" transform="translate(16.000000, 162.000000)" stroke="#A85D22" strokeWidth="3" strokeLinecap="square">
          <path d="M63.5,34.5 L3.5,0.5" id="Line">
          </path>
          <path d="M63.5,50 L0.214930671,50" id="Line-Copy">
          </path>
        </g>
        <g id="Right-Whiskers" transform="translate(152.000000, 188.000000) scale(-1, 1) translate(-152.000000, -188.000000) translate(120.000000, 162.000000)" stroke="#A85D22" strokeWidth="3" strokeLinecap="square">
          <path d="M63.5,34.5 L3.5,0.5" id="Line">
          </path>
          <path d="M63.5,50 L0.214930671,50" id="Line-Copy">
          </path>
        </g>
        <g id="Left-Eye" transform="translate(54.000000, 116.500000) rotate(90.000000) translate(-54.000000, -116.500000) translate(32.500000, 90.500000)">
          <ellipse id="white" fill="#FFFFFF" cx="21.5" cy="26" rx="21.5" ry="26">
          </ellipse>
          <circle id="iris" fill="#0088FF" cx="21.5" cy="26.5" r="21.5">
          </circle>
          <circle id="pupil" fill="#000000" cx="21.5" cy="26.5" r="16.5">
          </circle>
        </g>
        <g id="Right-Eye" transform="translate(146.000000, 116.500000) rotate(90.000000) translate(-146.000000, -116.500000) translate(124.500000, 90.500000)">
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

Cat.propTypes    = propTypes
Cat.defaultProps = defaultProps

export default Cat
