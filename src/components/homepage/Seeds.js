import React from 'react'
import media from 'utils/media-new'
import Link from 'components/Link'
import SeedsLogo from 'assets/seeds.component.svg'
import seedsScreenshot from 'assets/seeds-screenshot.png'
// import { OrderedList } from 'components/Lists'
import seeds from 'assets/seeds.png'
import dsPlanning from 'assets/ds-planning.jpg'

const Seeds = () => {
  return (
    <div
      className='mobile-breakout'
      css={`
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
            helped ship a complete redesign of our product
          </Link>
          , developed a{' '}
          <Link to='https://seeds.sproutsocial.com/components'>
            themeable component library
          </Link>
          , and{' '}
          <Link to='https://medium.com/sprout-social-design/design-system-health-3004551060f0'>
            fostered a healthy community to support our system
          </Link>
          .
        </p>

        <p>
          The{' '}
          <Link to='https://seeds.sproutsocial.com'>Seeds design system</Link>{' '}
          covers a large breath of content for stakeholders across product and
          brand design, writing, engineering, and more. Under my leadership, a small team of 3 people grew this system from the ground up to support a massive product organization. I used
          both my technical and design skills to help us achieve a system
          powered by a strong community of users and contributors.
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
        className='hyphens prose'
        css={`
          border-top: 1px solid var(--color-gray--700);
          padding: 24px var(--padding) 24px;
          box-shadow: 2px -16px 32px -4px rgba(0, 0, 0, 0.3);
          position: relative;
        `}
      >
        <img 
          src={seeds} 
          alt='A photograph of the Seeds website on a laptop.' 
          css={`
            ${media.small`
              border-radius: 8px;
              float: right;
              margin: -100px -35% 24px 24px;
              height: 250px;
              width: 400px;
              object-fit: cover;
              box-shadow: 0px 4px 48px 24px rgba(0, 0, 0, 0.24);
            `}
          `} 
        />

        <p className='mt-0'>
          Seeds has two sides: products and programs. The products our team produced took the form of the system website, our component library, and all the related tooling associated with being creative at Sprout.
        </p>

        {/* <OrderedList
          className='mt-32 mb-16'
          css={`
            font-size: 1.2rem;

            > li {
              margin-left: 2.25em;
            }

            > li:before {
              content: counter(ol-counter);
              color: var(--color-body-background);
              background: var(--accent-color, var(--color-yellow));
              border-radius: 50%;
              width: 1.5em;
              height: 1.5em;
              text-align: center;
              font-weight: bold;
              padding: 0;
              left: -2.25em;
            }
          `}
        >
          <li>
            <p>
              <b>This is a heading</b>
            </p>
          </li>
          <li style={{ '--accent-color': 'var(--color-green)' }}>
            <p>
              <b>This is a heading</b>
            </p>
          </li>
          <li style={{ '--accent-color': 'var(--color-blue)' }}>
            <p>
              <b>This is a heading</b>
            </p>
          </li>
        </OrderedList> */}

        <img 
          src={dsPlanning} 
          alt='A screenshot of the Sprout Social web application.' 
          css={`
            ${media.small`
              border-radius: 8px;
              float: left;
              clear: right;
              margin: -32px 24px 0 -45%;
              width: 450px;
              box-shadow: 0px 4px 48px 24px rgba(0, 0, 0, 0.24);
            `}
          `} 
        />

        <p className='mt-24' css={`clear: right;`}>
          The program side of Seeds involved services offered by our team that made Design Systems a strategic partner for creatives at Sprout. Our team offered as consultants and partners, helping other teams multiply their efforts and break out of organizational siloes. 
        </p>

        <p className='mt-24'>
          Check out Seeds, and browse through our component documentation. Read
          my article on how we created a component library that our developers
          love using. Check out my notes on design systems.
        </p>
      </div>
    </div>
  )
}

export default Seeds
