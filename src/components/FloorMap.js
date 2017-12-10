import React from 'react'
import './FloorMap.css'
import Background from './Background'

import store from '../store'
import paths from './paths'
import data from './fake-data'

const Pop = () => {
  return (
    <div id='Pop'>
    </div>
  )
}

const Sit = ({ ip, user }) => {
  return (
    <g>
      <rect id='bg' fill='#333' stroke='black' strokeWidth='1' x='0' y='0' width='200' height='100'></rect>
      <text id='user' fill='#ddd' x='35' y='36' fontFamily='ZillaSlab, Zilla Slab' fontSize='22' fontWeight='light' letterSpacing='0.9'>
        {user.slice(0, 12)}
      </text>
      <text id='ip' fill='#aaa' x='192' y='88' fontFamily='ZillaSlab, Zilla Slab' fontSize='22' fontWeight='light' letterSpacing='0.9' textAnchor='end'>
        {ip}
      </text>
      <g id='status' transform='translate(9, 18)' fill={!!user ? '#7ED321' : 'grey'}>
        <circle id='Oval' cx='12' cy='12' r='5'></circle>
      </g>
    </g>
  )
}

const Sits = () => {
  return paths.map((path, index) => (
    <g key={index} {...path.g} >
      {path.rects.map((rect, index) => {
        return (
          <g key={index} id={rect.id} transform={`translate(${rect.x}, ${rect.y})`}>
            <Sit svg={rect} ip={data[rect.id].ip} user={data[rect.id].user} />
          </g>
        )
      })}
    </g>
  ))
}

class FloorMap extends React.Component {

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div id='FloorMap'>
        <svg width='1800px' height='1300px' viewBox='0 0 1800 1300' xmlnsXlink='http://www.w3.org/1999/xlink'>
          <Background />
          <Sits />
        </svg>
      </div>
    )
  }

}

export default FloorMap
