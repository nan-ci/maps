import React from 'react'
import InlineSVG from 'react-inlinesvg'

import './FloorMap.css'

const Loader = () => <div>Loading..</div>

const FloorMap = () => {
  return (
    <div id='FloorMap'>
      <InlineSVG
        src='./map.svg'
        preload={ <Loader /> }
        uniquifyIDs={false}
        onLoad={ src => console.log('loaded!') }>
        failed
      </InlineSVG>
    </div>
  )
}

export default FloorMap
