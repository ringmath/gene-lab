import React, { PropTypes } from 'react'
import Cat from '../Cat'
import Dog from '../Dog'
import FakeCat from '../FakeCat'
import FakeDog from '../FakeDog'
import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

const GeneLab = () => {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <Cat className={styles.animal}/>
        <FakeCat className={styles.animal}/>
      </div>

      <div className={styles.row}>
        <Dog className={styles.animal}/>
        <FakeDog className={styles.animal}/>
      </div>
    </div>
  )
}

GeneLab.propTypes    = propTypes
GeneLab.defaultProps = defaultProps

export default GeneLab
