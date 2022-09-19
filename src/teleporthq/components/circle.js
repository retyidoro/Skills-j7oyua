import React from 'react'

import PropTypes from 'prop-types'

import './circle.css'

const Circle = (props) => {
  return (
    <div className={`circle-container ${props.rootClassName} `}>
      <div className="circle-container1">
        <h1 className="circle-text event">{props.event}</h1>
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
