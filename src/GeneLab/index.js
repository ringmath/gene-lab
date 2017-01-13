import React, { PropTypes } from 'react'
import Cat from '../Cat'
import Dog from '../Dog'
import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

const GeneLab = () => {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Cat className={styles.animal}/>
        <Cat className={styles.animal}/>
      </div>

      <div className={styles.row}>
        <Dog className={styles.animal}/>
        <Dog className={styles.animal}/>
      </div>
    </div>
  )
}

GeneLab.propTypes    = propTypes
GeneLab.defaultProps = defaultProps

export default GeneLab
