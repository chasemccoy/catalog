import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'
import FeaturedPosts from 'components/FeaturedPosts'
import Stripe from 'assets/stripe.component.svg'
import avatar from 'assets/avatar-yellow.png'
import media from 'utils/media-new'
import ContactMe from 'components/homepage/Contact'
import Globe from 'assets/icons/globe.component.svg'
import Pico from 'components/homepage/Pico'
import Seeds from 'components/homepage/Seeds'
import Marker from 'components/Marker'
import DesignSystems from 'components/homepage/DesignSystems'

const PageStyles = createGlobalStyle`
  :root {
    --color-body-background: #222; // #181B25;
    --color-text: var(--color-gray--300);
    --color-header: var(--color-gray--200);
    --link-color: var(--color-text);
    --link-hover: var(--color-green);
    --color-border: #404040;

    --ascii-filter: invert();
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h3.subheader {
    font-size: .7rem; 
    font-weight: normal;
    color: var(--color-gray--500);
  }
`

const Avatar = () => (
  <div
    css={`
      width: 9em;
      height: 9em;
      border: 1px dashed var(--color-gray--600);
      padding: 8px;
      border-radius: 50%;
      overflow: hidden;
      float: right;
      margin: 8px 0 8px 24px;
      shape-outside: circle();

      ${media.medium`
        margin-top: -8px;
      `}
    `}
  >
    <div
      css={`
        border-radius: 50%;
        overflow: hidden;
        background: repeating-linear-gradient(
          -55deg,
          var(--color-gray--600),
          var(--color-gray--600) 0.5px,
          var(--color-body-background) 0.5px,
          var(--color-body-background) 3px
        );
      `}
    >
      <img src={avatar} alt='Chase McCoy' />
    </div>
  </div>
)

const IndexPage = () => {
  return (
    <Page untitled>
      <PageStyles />

      <h2
        className='mb-12 serif hyphens'
        css={`
          font-size: 1.7rem;
          line-height: 1.3;
          margin-top: -6px;
        `}
      >
        Chase McCoy is a{' '}
        <span css='color: var(--color-green);'>product designer&nbsp;✐</span>,{' '}
        <span css='color: var(--color-blue);'>
          front-end engineer&nbsp;
          <span css='font-size: 2em; line-height: 1rem; vertical-align: middle;'>
            ⌨&#xFE0E;
          </span>
        </span>
        , and{' '}
        <span css='color: var(--color-red);'>
          internet explorer&nbsp;
          <Globe css='display: inline; margin-top: -4px;' />
        </span>{' '}
        working on{' '}
        <span css='color: var(--color-yellow);'>design systems&nbsp;❏</span> at{' '}
        <Link unstyled to='https://stripe.com'>
          <Stripe
            height='1em'
            css='display: inline; vertical-align: text-bottom; transform: translateY(-1px);'
          />
        </Link>
      </h2>

      {/* <h2
        className='serif'
        css={`
          font-size: 1.2rem;

          > * + * {
            margin-left: 4px;
          }
        `}
      >
        <span css='color: var(--color-green);'>✐</span>
        <span css='color: var(--color-blue); font-size: 2em; line-height: 1rem; vertical-align: middle; margin-top: -4px; display: inline-block;'>
          ⌨&#xFE0E;
        </span>
        <Globe css='color: var(--color-red); display: inline; margin-top: -4px; max-width: 1em;' />
        <span css='color: var(--color-yellow);'>❏</span>
      </h2> */}

      <div className='prose'>
        <p className='hyphens'>
          <Avatar />Growing up online is where I developed a love for visual and interface design, and I earned a degree in Computer Science so I could make those designs real. I got my start doing iOS design and development, but I spend most of my time these days thinking about the web—how it works, how it’s changing, and how we can make it a better place.
        </p>

        <p>
          This website is my home on the web, and in{' '}
          <Link to='https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/'>
            the words of Laurel Schwulst
          </Link>{' '}
          it is truly “a shifting house next to a river of knowledge.” I use this site to share my thoughts, keep a record of my work, and catalog the things I discover online.
        </p>

        <FeaturedPosts />
        <ContactMe />
      </div>

      <Marker className='mt-40'>Now</Marker>

      <DesignSystems />

      <div
        css={`
          > * + * {
            margin-top: 0;
            border-top: 1px dashed var(--color-border);
          }

          ${media.tiny`
            > * + * { 
              margin-top: 24px;
              border: none;
            }
          `}
        `}
      >
        <Marker
          className='mt-40'
          css={`
            --color-accent: var(--color-purple);
            margin-bottom: -12px;

            ${media.tiny`
              margin-bottom: 16px;
            `}
          `}
        >
          Previously
        </Marker>

        <Seeds />

        <Pico />
      </div>
    </Page>
  )
}

export default IndexPage
