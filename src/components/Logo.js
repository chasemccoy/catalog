import React from 'react'
import styled from 'styled-components'

const Container = styled.svg`
  transform-origin: 50% 50%;
  animation: rotate-counterClockwise 14s linear infinite;

  .square {
    transform-origin: 11.75px 9.5px;
    animation: rotate-counterClockwise 10s linear infinite;
  }

  .triangle {
    transform-origin: 4.5px 10.5px;
    animation: rotate-clockwise 10s linear infinite;
  }

  @keyframes rotate-counterClockwise {
    0%  { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }	
  }

  @keyframes rotate-clockwise {
    0%  { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }	
  }
`

const Logo = props => {
  const { size = '28px', color = '#FFF', ...rest } = props

  return (
    <Container xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" {...rest}>
      <g fill="none" fillRule="evenodd">
        <circle className="circle" cx="7.25" cy="4.75" r="1.75" fill={color}/>
        
        <path fill={color} className="triangle" d="M3,8.30059245 C3,8.22087037 3.03166947,8.14441351 3.08804149,8.08804149 C3.20543014,7.97065284 3.39575475,7.97065284 3.51314341,8.08804149 L6.91195851,11.4868566 C6.96833053,11.5432286 7,11.6196855 7,11.6994076 C7,11.8654202 6.86542018,12 6.69940755,12 L3.30059245,12 C3.13457982,12 3,11.8654202 3,11.6994076 L3,8.30059245 L3,8.30059245 Z"/>

        <path fill={color} className="square" fillRule="evenodd" d="M10.5,7.5 L13,7.5 C13.2761424,7.5 13.5,7.72385763 13.5,8 L13.5,10.5 C13.5,10.7761424 13.2761424,11 13,11 L10.5,11 C10.2238576,11 10,10.7761424 10,10.5 L10,8 C10,7.72385763 10.2238576,7.5 10.5,7.5 Z" />
      </g>
    </Container>
  )
}

export default Logo