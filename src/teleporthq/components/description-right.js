import React from 'react'

import PropTypes from 'prop-types'

import styles from './description-right.module.css'

const DescriptionRight = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <div className={styles['container2']}>
          <span className={styles['text']}>{props.text1}</span>
        </div>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M426 726v-428l214 214z"></path>
        </svg>
      </div>
    </div>
  )
}

DescriptionRight.defaultProps = {
  text1: 'Hello long test for texting',
  rootClassName: '',
}

DescriptionRight.propTypes = {
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default DescriptionRight
