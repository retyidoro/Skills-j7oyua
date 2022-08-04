import React from 'react'

import PropTypes from 'prop-types'

import styles from './description-left.module.css'

const DescriptionLeft = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <div className={styles['container1']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M598 298v428l-214-214z"></path>
        </svg>
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.text1}</span>
        </div>
      </div>
    </div>
  )
}

DescriptionLeft.defaultProps = {
  rootClassName: '',
  text1: 'Hello long test for texting',
}

DescriptionLeft.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default DescriptionLeft
