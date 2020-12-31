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
import avatar from 'assets/avatar.png'
import media from 'utils/media-new'

const PageStyles = createGlobalStyle`
  :root {
    --color-body-background: #222; // #181B25;
    --color-text: var(--color-gray--300);
    --color-header: var(--color-gray--200);
    --link-color: var(--color-text);
    --link-hover: var(--color-green);
    --color-border: #404040;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }
`

const ProjectCard = styled.div`
  border-radius: 12px;
  padding: 16px;
  background: #303030;

  background: repeating-linear-gradient(
    -55deg,
    var(--color-gray--700),
    var(--color-gray--700) 2px,
    var(--color-body-background) 2px,
    var(--color-body-background) 6px
  );
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
  width: 100%;
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
`

const Avatar = () => (
  <div
    css={`
      border: 1px dashed var(--color-gray--700);
      padding: 8px;
      border-radius: 50%;
      overflow: hidden;
      float: right;
      margin: 0 0 8px 20px;
      clip-path: circle();
      shape-outside: circle();

      ${media.medium`
        margin-top: -24px;
      `}
    `}
  >
    <div
      css={`
        width: 7em;
        background: var(--color-green);
        border-radius: 50%;
        overflow: hidden;
      `}
    >
      <img
        src={avatar}
        alt=''
        css={`
          mix-blend-mode: multiply;
        `}
      />
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
        <span css='color: var(--color-green);'>product designer&nbsp;✐</span>{' '}
        and{' '}
        <span css='color: var(--color-blue);'>
          front-end engineer&nbsp;
          <span css='font-size: 2em; line-height: 1rem; vertical-align: middle;'>
            ⌨&#xFE0E;
          </span>
        </span>{' '}
        based out of{' '}
        <span css='color: var(--color-red);'>
          Chicago&nbsp;
          <span css='font-size: 1.2em; line-height: 1rem; vertical-align: middle;'>
            ✶
          </span>
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

      <div className='prose'>
        <p className='hyphens'>
          <Avatar />I grew up on the web, back when the web made us feel better
          about ourselves and the world instead of worse. Since then I have seen
          the web become an often bloated behemoth that is inaccessible and even
          hostile to many of its users. The change I want to see is a better
          user experience across the web, <i>especially</i> in the places where
          people spend the most of their time. Here, a better user experience
          means embracing the fundamentals of the web as a raw material.
        </p>
      </div>

      <Marker className='mt-24'>
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
        <p>
          I grew up on the web, back when the web made us feel better about
          ourselves and the world instead of worse. Since then I have seen the
          web become an often bloated behemoth that is inaccessible and even
          hostile to many of its users. The change I want to see is a better
          user experience across the web, <i>especially</i> in the places where
          people spend the most of their time. Here, a better user experience
          means embracing the fundamentals of the web as a raw material.
        </p>

        <p>
          Working on design systems gives us an incredible opportunity to
          realize that change, and to teach others how to be a part of that as
          well. Why design systems, particularly for large web products? Because
          it allows me to wield my love of the open, semantic, accessible web to
          help improve the tools that people use to do their jobs and live their
          lives. Design systems give those of us who deeply love the idea of
          what the web could be a chance to introduce tools and practices that
          help others make that idea a reality.
        </p>
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
        `}
      >
        <div>
          <Collab height='32px' />
          <h3 className='mt-12 mb-2'>Community</h3>
          <p className='hyphens'>
            Systems exist to serve human beings. A healthy system means
            fostering a healthy community of users and collaborators.
          </p>
        </div>

        <div>
          <Documentation height='32px' />
          <h3 className='mt-12 mb-2'>Documentation</h3>
          <p className='hyphens'>
            Educating users and communicating decisions through effective
            communication is key to a system's success.
          </p>
        </div>

        <div>
          <Components height='32px' />
          <h3 className='mt-12 mb-2'>Components</h3>
          <p className='hyphens'>
            The key to a well-adopted design system is getting developers to use a well-crafted set of accessible components.
          </p>
        </div>

        <div>
          <Pattern height='32px' />
          <h3 className='mt-12 mb-2'>Patterns</h3>
          <p className='hyphens'>
            Our responsibility as system practitioners is to be the stewards, shepherds, scribes, and librarians of a product experience.
          </p>
        </div>
      </Columns>

      <div className='prose mt-32'>
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
      </div>

      <Marker className='mt-48' css='--color-accent: var(--color-green);'>
        <span>2017–2020</span>
      </Marker>

      <Marker className='mt-32' css='--color-accent: var(--color-purple);'>
        <span>Before that</span>
      </Marker>

      {/* <Signature css={`filter: invert(1); max-width: 8rem;`} /> */}

      <FeaturedPosts className='mt-48' />

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
