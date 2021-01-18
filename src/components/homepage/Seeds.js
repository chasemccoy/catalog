import React from 'react'
import media from 'utils/media-new'
import Link from 'components/Link'
import SeedsLogo from 'assets/seeds.component.svg'
import seedsScreenshot from 'assets/seeds-screenshot.png'
import { OrderedList } from 'components/Lists'
import seeds from 'assets/seeds.png'
import dsPlanning from 'assets/ds-planning.jpg'
// import intake from 'assets/intake.png'

const Seeds = () => {
  return (
    <div
      className='mobile-breakout'
      css={`
        background: #2f2f2f;
        --padding: 16px;

        a {
          color: inherit;
        }

        a:hover {
          color: var(--color-gray--400);
        }

        ${media.tiny`
          border-radius: 12px;
          --padding: 24px;
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
          <Link to='https://medium.com/styled-components/how-to-build-a-great-component-library-a40d974a412d'>
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
          brand design, writing, engineering, and more. Under my leadership, a
          small team of 3 people grew this system from the ground up to support
          a massive product organization. I used both my technical and design
          skills to help us achieve a system powered by a strong community of
          users and contributors.
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
        className='hyphens prose color-gray--400'
        css={`
          --flow-spacing: 0.75em;
          font-size: 0.9em;
          border-top: 1px solid var(--color-gray--700);
          padding: 24px var(--padding) 24px;
          box-shadow: 2px -16px 32px -4px rgba(0, 0, 0, 0.3);
          position: relative;

          span.product {
            color: var(--color-green);
          }

          span.program {
            color: var(--color-yellow);
          }
        `}
      >
        <img
          src={seeds}
          alt='A photograph of the Seeds website on a laptop.'
          css={`
            border-radius: 8px;
            float: right;
            height: 200px;
            width: 200px;
            margin: 8px -15% 16px 12px;
            object-fit: cover;
            box-shadow: 0px 4px 48px 24px rgba(0, 0, 0, 0.24);

            ${media.tiny`
              margin: -72px -35% 12px 16px;
              height: 250px;
              width: 400px;
            `}
          `}
        />

        <p
          className='mt-0 larger'
          css={`
            color: white;
            span {
              font-style: italic;
              font-weight: bold;
            }
          `}
        >
          A successful design system practice combines two things:{' '}
          <span className='product'>products</span> and{' '}
          <span className='program'>programs</span>
        </p>

        <p>
          <span className='product'>Products</span> take the form of
          documentation websites, design tokens, component libraries, and custom
          design or developer tools. The problems in this space are often
          technical and lay the foundation for a healthy system.
        </p>

        <img
          src={dsPlanning}
          alt='A screenshot of the Sprout Social web application.'
          css={`
            border-radius: 8px;
            float: left;
            clear: right;
            margin: 24px 20px 0 -15%;
            width: 200px;
            height: 300px;
            object-fit: cover;
            box-shadow: 0px 4px 48px 24px rgba(0, 0, 0, 0.24);

            ${media.tiny`
              width: 450px;
              height: auto;
              margin: 20px 20px 0 -45%;
            `}

            ${media.medium`
              margin: 8px 20px 0 -45%;
            `}
          `}
        />

        <p
          css={`
            clear: right;
            margin-top: 20px;

            ${media.medium`
              margin-top: 24px;
            `}
          `}
        >
          While product help to make our user’s work more correct and efficient,{' '}
          <span className='program'>programs</span>  make work
          more collaborative and inclusive. These are the services and
          activities that the system team provides to their users. I like to
          focus on three in particular:
        </p>

        <OrderedList
          className='mt-24 mb-16 pb-4 pl-12'
          css={`
            font-size: 0.9rem;
            overflow: hidden;
            color: var(--color-gray--300);

            > li {
              margin-left: 2.25em;
            }

            li + li {
              margin-top: -0.25em;
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
              <b>Consultation</b>
            </p>
          </li>
          <li style={{ '--accent-color': 'var(--color-green)' }}>
            <p>
              <b>Partnership</b>
            </p>
          </li>
          <li style={{ '--accent-color': 'var(--color-blue)' }}>
            <p>
              <b>Documentation</b>
            </p>
          </li>
        </OrderedList>

        <p>
          The program side of Seeds involved services offered by our team that
          made Design Systems a strategic partner for creatives at Sprout. Our
          team offered as consultants and partners, helping other teams multiply
          their efforts and break out of organizational siloes.
        </p>

        <p></p>
      </div>
    </div>
  )
}

export default Seeds
