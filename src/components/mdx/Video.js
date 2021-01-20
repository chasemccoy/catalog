import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Video = ({ src, title, ...rest }) => {
  return (
    <Wrapper>
      <iframe
        src={src}
        title={title}
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        frameBorder='0'
        webkitallowfullscreen='true'
        mozallowfullscreen='true'
        allowFullScreen
        {...rest}
      />
    </Wrapper>
  )
}

export default Video
