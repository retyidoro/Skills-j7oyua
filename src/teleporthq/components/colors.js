import React from 'react'

import styles from './colors.module.css'

const Colors = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}></div>
      <div className={styles['container2']}></div>
      <div className={styles['container3']}></div>
      <div className={styles['container4']}></div>
    </div>
  )
}

export default Colors
