import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'

const PageStyles = createGlobalStyle`
  :root {
    --body-background: #222;
    --body-color: #f7fafc;
    --link-color: #f7fafc;
  }
`

const IndexPage = () => {
  return (
    <Page untitled>
      <PageStyles />
      <div className='prose'>
        <span
          css={`
            color: ${(p) => p.theme.colors.accent.pop};
            font-weight: 600;
            text-transform: uppercase;
            font-size: 0.75em;
          `}
        >
          Welcome <span className='mx-4'>×</span> hello
        </span>
        <p className='lead mt-4'>
          <b>Chase McCoy</b> is a senior design technologist based in Chicago
          leading the team behind{' '}
          <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, Sprout
          Social’s design system.
        </p>

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

      <div
        css={`
          margin-top: 24px;

          > * + * {
            margin-top: 24px;
          }
        `}
      >
        <div
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
            background: #75dd66;
          `}
        />

        <div
          css={`
            border-radius: 12px;
            padding: 24px;
            background: #9180f4;
          `}
        />
      </div>
    </Page>
  )
}

export default IndexPage
