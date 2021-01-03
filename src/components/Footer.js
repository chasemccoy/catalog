import React from 'react'
import asciiHouse from 'assets/ascii-house.png'

const Footer = () => {
  return (
    <footer className='prose mt-48'>
      <hr
        className='mobile-breakout'
        css='border-top: 1px dashed var(--color-border); background: none; height: 1px;'
      />

      <div
        css={`
          display: flex;
          align-items: flex-end;
        `}
      >
        <div
          css={`
            max-width: 10em;
          `}
        >
          <img
            src={asciiHouse}
            alt=''
            css={`
              filter: var(--ascii-filter);
              opacity: 0.75;
            `}
          />
        </div>
        <div
          className='ml-20 mb-4'
          css={`
            flex: 1 0 auto;
          `}
        >
          <p className='color-gray--500 smaller mt-12'>
            Made with <span className='color-red'>&#9829;</span> in Chicago{' '}
            <span
              className='color-blue'
              css={`
                font-size: 1.4em;
                vertical-align: text-bottom;
                line-height: 1;
              `}
            >
              &#10038;
            </span>
          </p>
          <p className='color-gray--500 smaller'>Come back soon!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
