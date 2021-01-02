import React from 'react'
import media from 'utils/media-new'
import Link from 'components/Link'
import SeedsLogo from 'assets/seeds.component.svg'
import seedsScreenshot from 'assets/seeds-resources.png'

const Seeds = () => {
  return (
    <div
      className='mobile-breakout'
      css={`
        overflow: hidden;
        background: var(--color-gray--800);
        --padding: 24px;

        ${media.tiny`
          border-radius: 12px;
          --padding: 32px;
        `}
      `}
    >
      <div
        className='prose hyphens'
        css={`
          padding: 24px var(--padding) 0;
        `}
      >
        {/* <h3
          className='mt-8 mb-12 color-gray--500'
          css='font-size: .7rem !important; font-weight: normal;'
        >
          2017 – 2020
        </h3> */}

        <Link unstyled to='https://seeds.sproutsocial.com'>
          <h2
            className='mt-0'
            css={`
              font-size: 2em !important;
              display: inline-flex;
              align-items: center;

              ${media.tiny`
                font-size: 3em !important;
              `}
            `}
          >
            <SeedsLogo
              css={`
                width: 40px;
                flex-shrink: 0;

                ${media.tiny`
                  width: 48px;
                `}
              `}
              className='mr-12'
            />
            <span className='mr-12'>Seeds</span>
            <span
              css={`
                color: var(--color-green);
                font-size: 0.7rem;
                font-weight: normal;
                align-self: flex-end;
                transform: translateY(-0.8ex);
                max-width: 25ch;

                ${media.tiny`
                  0.8rem;
                  transform: translateY(-1.5ex);
                `}
              `}
            >
              Sprout Social’s design system and component library.
            </span>
          </h2>
        </Link>

        <p className='lead'>
          During my time at Sprout I helped found the first Design Systems team,
          developed our component library, and went on to become team lead.
        </p>

        <p>
          Check out Seeds, and browse through our component documentation. Read
          my article on how we created a component library that our developers
          love using. Check out my notes on design systems.
        </p>
      </div>

      <img
        src={seedsScreenshot}
        alt=''
        className='mt-32'
        css={`
          width: calc(100% - var(--padding));
          margin-left: auto;
        `}
      />

      {/* <div
        className='prose hyphens'
        css={`
          padding: 24px var(--padding) 32px;
        `}
      >
        <p>
          Check out Seeds, and browse through our component documentation. Read
          my article on how we created a component library that our developers
          love using. Check out my notes on design systems.
        </p>
      </div> */}
    </div>
  )
}

export default Seeds
