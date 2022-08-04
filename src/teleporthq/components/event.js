import React from 'react'

import PropTypes from 'prop-types'

import Circle from './circle'
import DescriptionLeft from './description-left'
import styles from './event.module.css'

const Event = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <Circle rootClassName="root-class-name14"></Circle>
        </div>
        <div className={styles['container3']}>
          <DescriptionLeft rootClassName="root-class-name"></DescriptionLeft>
        </div>
      </div>
    </div>
  )
}

Event.defaultProps = {
  rootClassName: '',
}

Event.propTypes = {
  rootClassName: PropTypes.string,
}

export default Event
