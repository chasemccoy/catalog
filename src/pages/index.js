import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'
import Components from 'assets/components.component.svg'
// import Scale from 'assets/scale.component.svg'
import Documentation from 'assets/documentation.component.svg'
import Pattern from 'assets/pattern.component.svg'
import Collab from 'assets/collab.component.svg'
import FeaturedPosts from 'components/FeaturedPosts'
import Stripe from 'assets/stripe.component.svg'
import avatar from 'assets/avatar-yellow.png'
import media from 'utils/media-new'
import ContactMe from 'components/homepage/Contact'
import Globe from 'assets/icons/globe.component.svg'
import Pico from 'components/homepage/Pico'
import Seeds from 'components/homepage/Seeds'

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

const Columns = ({ children, ...rest }) => (
  <div
    css={`
      --min: 200px;

      display: grid;
      grid-gap: 2rem;

      @supports (width: min(var(--min), 100%)) {
        grid-template-columns: repeat(
          auto-fit,
          minmax(min(var(--min), 100%), 1fr)
        );
      }
    `}
    {...rest}
  >
    {children}
  </div>
)

const Marker = styled.h2`
  display: grid;
  grid-template-columns: auto minmax(20px, 1fr);
  align-items: center;
  width: calc(100% + 16px);
  margin-right: -16px;
  font-size: 0.8rem;

  span {
    color: var(--color-body-background);
    background: var(--color-accent, var(--color-red));
    border-radius: 999px;
    padding: 2px 16px;
  }

  &:after {
    content: '';
    border-top: 2px solid var(--color-accent, var(--color-red));
  }

  ${media.tiny`
    width: 100%;
    margin-right: 0;
  `}
`

const Avatar = () => (
  <div
    css={`
      border: 1px dashed var(--color-gray--600);
      padding: 8px;
      border-radius: 50%;
      overflow: hidden;
      float: right;
      margin: 8px 0 8px 24px;
      clip-path: circle();
      shape-outside: circle();

      ${media.medium`
        margin-top: -8px;
      `}
    `}
  >
    <div
      css={`
        width: 7em;
        height: 7em;
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
          <Avatar />I was born and raised in Mississippi where I spent many
          evenings at a young age exploring the internet via a dial-up
          connection. It was there that I developed a love for visual and
          interface design, and I would later go on to earn a degree in Computer
          Science so I could make those designs real. I got my start doing iOS
          design and development, but I spend most of my time these days
          thinking about the web—how it works, how it’s changing, and how we can
          make it a better place.
        </p>

        {/* <p>
          This website is my home on the web, and in{' '}
          <Link to='https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/'>
            the words of Laurel Schwulst
          </Link>{' '}
          it is truly “a shifting house next to a river of knowledge.” This is
          where I catalog my findings from exploring the internet.
        </p> */}

        <FeaturedPosts />
        <ContactMe />
      </div>

      <Marker className='mt-40'>
        <span>Now</span>
      </Marker>

      <h2 className='mt-20 serif' css='font-size: 2.5em; line-height: 1.1;'>
        I’m currently focused on{' '}
        <span css='text-decoration: underline; text-decoration-color: #51CF66; font-style: italic;'>
          design&nbsp;systems
        </span>
        .
      </h2>

      <div className='prose mt-20'>
        {/* <p>
          I grew up on the web, back when the web made us feel better about
          ourselves and the world instead of worse. Since then I have seen the
          web become an often bloated behemoth that is inaccessible and even
          hostile to many of its users. The change I want to see is a better
          user experience across the web, <i>especially</i> in the places where
          people spend the most of their time. Here, a better user experience
          means embracing the fundamentals of the web as a raw material.
        </p> */}

        <p>
          By focusing on design systems, I hope to help ensure that the spaces online where we are frequently spending more and more of our time are built in ways that are accessible, inclusive, and respectful of the web as a material.

          Using my skills as a hybrid designer/developer, I have been able to create tools, systems, and processes that allow other designers and developers to consistently deliver experiences that are well-designed, well-made, and more inclusive than ever. 
        </p>

        <p>My love for systems work stems from my love of collaborating with and enabling others to ship excellent user experiences. Here are some ways in which I accomplish that:</p>
      </div>

      <Columns
        className='mt-32 smaller'
        css={`
          h3 {
            font-size: 1.1em;
            color: var(--color-gray--300);
          }

          p {
            color: var(--color-gray--400);
          }

          padding-left: 12px;

          ${media.small`
            padding-left: 0;
          `}
        `}
      >
        <div>
          <Collab height='32px' />
          <h3
            className='mt-12 mb-2 dotted'
            style={{ '--dot-color': 'var(--color-green)' }}
          >
            Community
          </h3>
          <p className='hyphens pr-12'>
            Systems exist to serve human beings. A healthy system means
            fostering a healthy community of users and collaborators.
          </p>
        </div>

        <div>
          <Documentation height='32px' />
          <h3
            className='mt-12 mb-2 dotted'
            style={{ '--dot-color': 'var(--color-yellow)' }}
          >
            Documentation
          </h3>
          <p className='hyphens pr-12'>
            Educating users and communicating decisions through effective
            communication is key to a system's success.
          </p>
        </div>

        <div>
          <Components height='32px' />
          <h3
            className='mt-12 mb-2 dotted'
            style={{ '--dot-color': 'var(--color-blue)' }}
          >
            Components
          </h3>
          <p className='hyphens pr-12'>
            The key to a well-adopted design system is getting developers to use
            a well-crafted set of accessible components.
          </p>
        </div>

        <div>
          <Pattern height='32px' />
          <h3
            className='mt-12 mb-2 dotted'
            style={{ '--dot-color': 'var(--color-red)' }}
          >
            Patterns
          </h3>
          <p className='hyphens pr-12'>
            Our responsibility as system practitioners is to be the stewards,
            shepherds, scribes, and librarians of a product experience.
          </p>
        </div>
      </Columns>

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
          <span>Previously</span>
        </Marker>

        <Seeds />

        <Pico />
      </div>

      {/* <div className='prose mt-32'>
        <p>
          Embodying the spirit of the web in our work takes a lot of effort, and
          there’s a lot working against us. The fragmentation of the web
          platform in and of itself makes implementing accessible and
          sufficiently complex user interfaces quite difficult to get right.
        </p>

        <p>
          Luckily, helping others learn and correctly apply patterns is one of
          the primary functions of a design system. If we can use our system to,
          say, help someone design a great form, why couldn’t we also use it to
          help someone build a web experience that honors the web as a medium.
        </p>
      </div> */}

      {/* <Marker className='mt-32' css='--color-accent: var(--color-purple);'>
        <span>Before that</span>
      </Marker> */}

      {/* <Signature css={`filter: invert(1); max-width: 8rem;`} /> */}

      <div
        css={`
          margin-top: 24px;

          > * + * {
            margin-top: 24px;
          }
        `}
      >
        {/* <ProjectCard>
          <div
            css={`
              border-radius: 8px;
              padding: 24px;
              background: #635bff;
            `}
          />
        </ProjectCard> */}

        {/* <div
          css={`
            border-radius: 12px;
            padding: 24px;
            background: #635bff;
          `}
        />

        <div
          css={`
            border-radius: 12px;
            padding: 24px;
            background: #333;
          `}
        />

        <div
          css={`
            border-radius: 12px;
            padding: 24px;
            background: #2079c3;
          `}
        />

        <div
          css={`
            border-radius: 12px;
            padding: 24px;
            background: #9180f4;
          `}
        /> */}
      </div>
    </Page>
  )
}

export default IndexPage
