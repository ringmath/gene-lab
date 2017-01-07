import React, { PropTypes } from 'react'
import Cat from '../Cat'
import Dog from '../Dog'

const propTypes = {}
const defaultProps = {}

const GeneLab = () => {
  return (
    <div>
      <Cat />
      <Dog />
    </div>
  )
}

GeneLab.propTypes    = propTypes
GeneLab.defaultProps = defaultProps

export default GeneLab
