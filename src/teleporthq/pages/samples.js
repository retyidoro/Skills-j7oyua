import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Circle from '../components/circle'
import styles from './samples.module.css'

const Samples = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Samples - Skills</title>
        <meta property="og:title" content="Samples - Skills" />
      </Helmet>
      <div className={styles['container1']}>
        <Circle event="math" rootClassName="root-class-name2"></Circle>
        <Circle event="art" rootClassName="root-class-name3"></Circle>
        <Circle
          event="computer science"
          rootClassName="root-class-name4"
        ></Circle>
      </div>
      <div className={styles['gallery-card']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000"
          className={styles['image']}
        />
        <div className={styles['container2']}>
          <h1 className={styles['text']}>Project Title</h1>
          <span className={styles['text1']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
        </div>
      </div>
      <Link to="/samples" className={styles['navlink']}>
        <div className={styles['container3']}></div>
      </Link>
      <div className={styles['container4']}></div>
    </div>
  )
}

export default Samples
