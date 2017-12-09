import React from 'react'
import './FloorMap.css'

import store from '../store'
import paths from './paths'
import data from '../data'

const Pop = () => {
  return (
    <div id='Pop'>
    </div>
  )
}

const Mac = ({ svg, ip, user, status }) => {
  const { id, x, y } = svg

  return (
    <g onClick={() => console.log(id)} id={id} transform={`translate(${x}, ${y})`}>
      <rect id='bg' fill='#333' stroke='black' strokeWidth='1' x='0' y='0' width='200' height='100'></rect>
      <text id='user' fill='#ddd' x='35' y='36' fontFamily='ZillaSlab, Zilla Slab' fontSize='22' fontWeight='light' letterSpacing='0.9'>
        {user.slice(0, 12)}
      </text>
      <text id='ip' fill='#aaa' x='190' y='88' fontFamily='ZillaSlab, Zilla Slab' fontSize='25' fontWeight='bold' letterSpacing='0.9' textAnchor='end'>
        {ip}
      </text>
      <g id='status/active' transform='translate(9, 18)' fill={status === 'active' ? '#7ED321' : 'grey'}>
        <circle id='Oval' cx='12' cy='12' r='5'></circle>
      </g>
    </g>
  )
}

class FloorMap extends React.Component {

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.forceUpdate())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    const sits = paths.map((path, index) => {
      return (
        <g key={index} {...path.g} >
          {path.rects.map((rect, index) => {
            return <Mac key={index} svg={rect} ip={data[rect.id].ip} user={data[rect.id].user} status={data[rect.id].status} />
          })}
        </g>
      )
    })

    const svgProps = {
      width: '1800px',
      height: '1300px',
      viewBox: '0 0 1800 1300',
      xmlnsXlink: 'http://www.w3.org/1999/xlink'
    }

    const { displayedUser } = store.getState()

        // <Pop user={displayedUser} />
    return (
      <div id='FloorMap'>
        <svg {...svgProps}>
          <g id='sits'>
            {sits}
          </g>
        </svg>
      </div>
    )
  }

}

export default FloorMap
