import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'
import Components from 'assets/components.component.svg'
import Scale from 'assets/scale.component.svg'
import Documentation from 'assets/documentation.component.svg'
import FeaturedPosts from 'components/FeaturedPosts'
import Stripe from 'assets/stripe.component.svg'

const PageStyles = createGlobalStyle`
  :root {
    --color-body-background: #222; // #181B25;
    --color-text: #f7fafc;
    --color-header: #f7fafc;
    --link-color: #f7fafc;
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
    #303030,
    #303030 2px,
    var(--body-background) 2px,
    var(--body-background) 6px
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

const IndexPage = () => {
  return (
    <Page untitled>
      <PageStyles />

      <h2
        className='mb-24 serif'
        css={`
          font-size: 1.7rem;
          line-height: 1.3;
        `}
      >
        Chase McCoy is a{' '}
        <span css='color: var(--color-green);'>product designer ✐</span> and{' '}
        <span css='color: var(--color-blue);'>
          front-end engineer{' '}
          <span css='font-size: 2em; line-height: 1rem; vertical-align: middle;'>
            ⌨&#xFE0E;
          </span>
        </span>{' '}
        based out of{' '}
        <span css='color: var(--color-red);'>
          Chicago{' '}
          <span css='font-size: 1.2em; line-height: 1rem; vertical-align: middle;'>
            ✶
          </span>
        </span>{' '}
        working on{' '}
        <span css='color: var(--color-yellow);'>design systems ❏</span> at{' '}
        <Link unstyled to='https://stripe.com'>
          <Stripe
            height='1em'
            css='display: inline; vertical-align: text-bottom; transform: translateY(-1px);'
          />
        </Link>
        {/* ✐❏☻☺➫♦✻✼☄☁☞⚛ */}
        {/* Chase McCoy is a Product Designer at Stripe in Chicago, working on product design systems. He spends his time exploring the internet, writing about design systems, and 
          
          He spends his time writing, thinking, tweeting, and talking about Design Systems: how they scale, how they break, and the people that maintain them.

          Chase McCoy is an <span css='color: var(--color-green);'>internet explorer</span>, <span css='color: var(--color-blue);'>product designer</span>, and <span css='color: var(--color-purple);'>front-end engineer</span> */}
        {/* Chase McCoy is a senior design{' '}
          <span css='color: #FF6B6B;'>technologist</span> leading the team
          behind Seeds, <span css='color: #8888FC;'>Sprout Social’s</span>{' '}
          design system. I’m a{' '}
          <span css='color: #70D4FF;'>front-end engineer</span> and designer who
          specializes in <span css='color: #51CF66;'>systems thinking</span>,
          design tooling, and <span css='color: #FCC419;'>advocacy</span>. */}
      </h2>

      <div className='prose'>
        {/* <span
          css={`
            font-family: 'Vulf Mono Demo';
            font-size: 0.75em;
            background: linear-gradient(45deg, #F35655 10%, #F5F11B 25%,#01FEB5 50%, #00bbcb 75%, #5830FB 90%);
            background-clip: text;
            text-fill-color: transparent;
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
          `}
        >
          Welcome <span className='mx-4'>×</span> hello
        </span> */}
        <p>
          Hi there!{' '}
          <span role='img' aria-label='Waving hand emoji'>
            👋
          </span>{' '}
          and welcome to my{' '}
          <span
            css={`
              hyphens: auto;
            `}
          >
            website/portfolio/blog/wiki/library/digital garden/hyperlink abyss/
          </span>
          etc. I’m a front-end engineer and designer who specializes in systems
          thinking, design tooling, and advocacy. This site is where I catalog
          my learnings as I go.
        </p>

        <p>
          I’m currently leading the Design Systems team at{' '}
          <Link to='https://sproutsocial.com'>Sprout Social</Link>, which
          designs and builds{' '}
          <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, our design
          system, as well as other tools used by Sprout employees to deliver
          consistently designed products to our customers. In the past I've
          worked as a mobile designer & iOS developer, creating indie apps in my
          spare time and building products for enterprise clients at my day job.
        </p>
      </div>

      <Marker className='mt-32'>
        <span>Now</span>
      </Marker>

      <h2 className='mt-20 serif' css='font-size: 2.5em; line-height: 1.2;'>
        I’m currently focused on{' '}
        <span css='text-decoration: underline; text-decoration-color: #51CF66;'>
          design&nbsp;systems
        </span>
        .
      </h2>

      <Columns className='mt-40 smaller'>
        <div>
          <Scale height='36px' />
          <h3 className='mt-16'>Community</h3>
          <p className='hyphens'>
            A healthy system means fostering a healthy community of
            collaborators.
          </p>
        </div>

        <div>
          <Documentation height='36px' />
          <h3 className='mt-16'>Documentation</h3>
          <p className='hyphens'>
            Here are some words about this thing. Maybe a paragraph or so.
          </p>
        </div>

        <div>
          <Components height='36px' />
          <h3 className='mt-16'>Components</h3>
          <p className='hyphens'>
            Creating flexible and accessible foundations for web products.
          </p>
        </div>

        <div>
          <Components height='36px' />
          <h3 className='mt-16'>Components</h3>
          <p className='hyphens'>
            Creating flexible and accessible foundations for web products.
          </p>
        </div>
      </Columns>

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
        <ProjectCard>
          <div
            css={`
              border-radius: 8px;
              padding: 24px;
              background: #635bff;
            `}
          />
        </ProjectCard>

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
