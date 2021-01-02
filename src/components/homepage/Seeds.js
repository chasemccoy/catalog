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
        background: #2f2f2f;
        --padding: 24px;

        a {
          color: inherit;
        }

        a:hover {
          color: var(--color-gray--400);
        }

        ${media.tiny`
          border-radius: 12px;
          --padding: 32px;
        `}
      `}
    >
      <div
        className='prose hyphens'
        css={`
          padding: 48px var(--padding) 0;

          ${media.tiny`
            padding: 24px var(--padding) 0;
          `}
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

        <p
          className='lead'
          css={`
            a {
              text-decoration-color: var(--color-gray--600);
            }
          `}
        >
          As lead of the Design Systems team at Sprout I{' '}
          <Link to='https://sproutsocial.com/insights/sprout-social-design-refresh'>
            helped ship a complete redesign our product
          </Link>
          ,{' '}
          <Link to='https://seeds.sproutsocial.com/components'>
            developed a themeable component library
          </Link>
          , and{' '}
          <Link to='https://seeds.sproutsocial.com/newsletter/july-2020.html'>
            established design systems as key partners in product development
          </Link>
          .
        </p>

        <p>
          I also helped to design and build our design system, Seeds, which is
          available publicly at{' '}
          <Link to='https://seeds.sproutsocial.com'>
            seeds.sproutsocial.com
          </Link>
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

      <div
        className='prose hyphens'
        css={`
          border-top: 1px solid var(--color-gray--700);
          padding: 24px var(--padding) 24px;
        `}
      >
        <p>
          Check out Seeds, and browse through our component documentation. Read
          my article on how we created a component library that our developers
          love using. Check out my notes on design systems.
        </p>
      </div>
    </div>
  )
}

export default Seeds
