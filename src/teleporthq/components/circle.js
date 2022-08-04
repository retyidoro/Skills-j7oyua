import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './circle.module.css'

const Circle = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <h1 className={` ${styles['text']} ${projectStyles['event']} `}>
          {props.event}
        </h1>
      </div>
    </div>
  )
}

Circle.defaultProps = {
  event: 'event',
  rootClassName: '',
}

Circle.propTypes = {
  event: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Circle
