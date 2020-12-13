import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'
// import Signature from 'assets/sig.component.svg'
import avatar from 'assets/avatar.png'

const PageStyles = createGlobalStyle`
  :root {
    --body-background: #222;
    --body-color: #f7fafc;
    --link-color: #f7fafc;

    --color-border: #404040;
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

const Avatar = () => (
  <img
    src={avatar}
    alt=''
    css={`
      width: 160px;
      height: 160px;
      // border-radius: 50%;
      mix-blend-mode: multiply;

      background: repeating-linear-gradient(
        -55deg,
        #303030,
        #303030 2px,
        var(--body-background) 2px,
        var(--body-background) 6px
      );
    `}
  />
)

const IndexPage = () => {
  return (
    <Page untitled>
      <PageStyles />
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

        <p
          className='mb-24'
          css={`
            font-family: var(--font-header);
            font-size: 1.5rem;
            line-height: 1.4;
          `}
        >
          Chase McCoy is a senior design{' '}
          <span css='color: #FF6B6B;'>technologist</span> leading the team behind Seeds, Sprout Social’s design system. I’m a{' '}
          <span css='color: #74C0FC;'>front-end engineer</span> and designer who
          specializes in <span css='color: #51CF66;'>systems thinking</span>,
          design tooling, and <span css='color: #FCC419;'>advocacy</span>.
        </p>

        {/* <Avatar /> */}

        {/* <p className='lead mt-4'>
          <b>Chase McCoy</b> is a senior design technologist based in Chicago
          leading the team behind{' '}
          <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, Sprout
          Social’s design system.
        </p> */}

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

      {/* <Signature css={`filter: invert(1); max-width: 8rem;`} /> */}

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
