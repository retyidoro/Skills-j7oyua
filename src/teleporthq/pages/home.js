import React from 'react'

import { Helmet } from 'react-helmet'

import Circle from '../components/circle'
import Event from '../components/event'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Skills</title>
        <meta property="og:title" content="Skills" />
      </Helmet>
      <Circle event="Data Scientist " rootClassName="root-class-name6"></Circle>
      <Circle
        event="Data Analysis and Modelling MSC"
        rootClassName="root-class-name11"
      ></Circle>
      <Circle
        event="Mathematics &amp; Computer Science BSC"
        rootClassName="root-class-name8"
      ></Circle>
      <Circle
        event="Mathematics &amp; Computer Science High School"
        rootClassName="root-class-name9"
      ></Circle>
      <Circle
        event="Graphics &amp; Painting course"
        rootClassName="root-class-name5"
      ></Circle>
      <Circle
        event="Sewing and tailoring course"
        rootClassName="root-class-name13"
      ></Circle>
      <div className={styles['container1']}>
        <h1 className={styles['text']}>2014</h1>
      </div>
      <Event rootClassName="root-class-name"></Event>
      <span>Text</span>
      <div className={styles['container2']}>
        <div className={styles['container3']}>
          <Circle event="math" rootClassName="root-class-name"></Circle>
        </div>
        <Circle
          event="computer science"
          rootClassName="root-class-name1"
        ></Circle>
        <Circle
          event="Frontend developer"
          rootClassName="root-class-name7"
        ></Circle>
        <Circle
          event="Frontend internship"
          rootClassName="root-class-name12"
        ></Circle>
        <Circle event="art" rootClassName="root-class-name10"></Circle>
      </div>
    </div>
  )
}

export default Home
