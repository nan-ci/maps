import React from 'react'

const Stairs  = () => {
  return (
    <g id='stairs' transform='translate(780, 1240)'>
      <rect fill='#333' x='90' y='0' width='30' height='60'></rect>
      <rect fill='#222' x='60' y='0' width='30' height='60'></rect>
      <rect fill='#333' x='30' y='0' width='30' height='60'></rect>
      <rect fill='#222' x='0' y='0' width='30' height='60'></rect>
    </g>
  )
}

const Tables = () => {
  return (
    <g id='tables' fill='#222'>
      <rect x='0' y='1200' width='600' height='100'></rect>
      <rect x='100' y='700' width='400' height='400'></rect>
      <rect x='100' y='200' width='400' height='400'></rect>
      <rect x='0' y='0' width='600' height='100'></rect>
      <rect x='900' y='1200' width='200' height='100'></rect>
      <rect x='700' y='700' width='400' height='400'></rect>
      <rect x='700' y='200' width='400' height='400'></rect>
      <rect x='700' y='0' width='600' height='100'></rect>
      <rect x='1200' y='1200' width='600' height='100'></rect>
      <rect x='1300' y='700' width='400' height='400'></rect>
      <rect x='1300' y='200' width='400' height='400'></rect>
      <rect x='1400' y='0' width='400' height='100'></rect>
    </g>
  )
}

const Background = () => {
  return (
    <g id='bg'>
      <Tables />
      <Stairs />
    </g>
  )
}

export default Background
