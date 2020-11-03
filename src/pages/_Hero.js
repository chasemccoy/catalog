import React from 'react'
import { css } from 'styled-components'
import { Box, Text, Heading, Grid } from '@chasemccoy/kit'
import Image from 'components/Image'
import Link from 'components/Link'
import stipplePattern from 'assets/stipple-pattern.png'
import asciiHouse from 'assets/ascii-house.png'
import avatar from 'assets/avatar.png'
import MusicMarquee from 'components/MusicMarquee'
import media from 'utils/media'

const CircleText = ({ children, radius: r = 120, ...rest }) => (
  <svg
    height={2 * r}
    width={2 * r}
    viewBox={`-${r} -${r} ${r * 2} ${r * 2}`}
    css='overflow: visible;'
    {...rest}
  >
    <defs>
      <path
        id='p'
        d={`M${-r},0 A${r},${r},0 1 1 ${r},0 A${r},${r},0 1 1 ${-r},0Z`}
      />
      <circle id='r' />
    </defs>
    <text id='t'>
      <textPath id='tp' xlinkHref='#p'>
        {children}
      </textPath>
    </text>
  </svg>
)

const Avatar = () => (
  <Box position='relative' p={12}>
    <Image
      src={avatar}
      css={css`
        height: 160px;
        min-width: 160px;
        mix-blend-mode: multiply;
        border-radius: 999999px;
        border: 2px solid;

        background: repeating-linear-gradient(
          -55deg,
          transparent,
          transparent 3px,
          rgba(0, 0, 0, 0.2) 4px,
          rgba(0, 0, 0, 0.2) 6px
        );
      `}
      alt='Photo of Chase McCoy standing and speaking to a group.'
    />

    <CircleText
      css={`
        font-size: 1.2rem;
        font-family: 'Vulf Mono Demo';
        font-weight: 300;
        font-style: italic;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        animation: rotate 12s linear infinite;

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}
    >
      Testin something out and here is some text.
    </CircleText>
  </Box>
)

const Hero = () => (
  <Grid gutter='0' overflow='visible'>
    <Box
      width={[1, 1, 1, 2 / 3]}
      borderRight={['none', null, null, '2px solid']}
      display='flex'
      flexDirection='column'
    >
      <Box bg='accent.pop' pt={48} pb={40} px={[24, null, 40, null, 80]}>
        <Box
          display='flex'
          flexWrap={['wrap', null, null, null, 'nowrap']}
          mb={40}
        >
          <Avatar />

          <Box minWidth={0} ml={[0, null, null, null, 64]}>
            <Text.p
              fontSize='1.6em'
              lineHeight='1.4'
              mt={[24, null, null, null, 0]}
              mb={0}
              fontFamily='serif'
            >
              <b>Chase</b> is a senior design technologist based in Chicago
              leading the team behind{' '}
              <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, Sprout
              Social’s design system.
            </Text.p>
          </Box>
        </Box>

        <Box
          css={`
            columns: 300px 2;
            column-gap: 32px;
          `}
        >
          <Text.p>
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
              website/portfolio/blog/wiki/library/digital garden/hyperlink
              abyss/
            </span>
            etc. I’m a front-end engineer and designer who specializes in
            systems thinking, design tooling, and advocacy. This site is where I
            catalog my learnings as I go.
          </Text.p>

          <Text.p>
            I’m currently leading the Design Systems team at{' '}
            <Link to='https://sproutsocial.com'>Sprout Social</Link>, which
            designs and builds{' '}
            <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, our design
            system, as well as other tools used by Sprout employees to deliver
            consistently designed products to our customers. In the past I've
            worked as a mobile designer & iOS developer, creating indie apps in
            my spare time and building products for enterprise clients at my day
            job.
          </Text.p>
        </Box>

        <Box
          borderRadius='99999px'
          bg='#FF8E4F'
          mt={48}
          css={`
            background: repeating-linear-gradient(
              -55deg,
              ${(p) => p.theme.colors.accent.pop},
              ${(p) => p.theme.colors.accent.pop} 2px,
              #000 2px,
              #000 3px
            );

            &:hover {
              color: inherit;
            }

            & > div {
              transition: all 0.1s ease-in;
            }

            &:hover > div {
              transform: translate(-8px, -8px);
            }
          `}
        >
          <Box
            width={1}
            height='100%'
            bg='#FF8E4F'
            p={32}
            borderRadius='99999px'
            border='2px solid'
          ></Box>
        </Box>
      </Box>

      <MusicMarquee pt={10} pb={8} borderTop='2px solid' />

      <Box
        p={40}
        flex={1}
        css={`
          background-image: url(${stipplePattern});
          background-size: 50%;

          ${media.small`
            background-size: 80%;
          `}
        `}
        borderTop='2px solid'
        borderBottom={['2px solid', null, null, 'none']}
      />
    </Box>

    <Box flex={1}>
      <Box
        height='100%'
        bg='#A6E8A9'
        p={[24, null, 40, null, 48]}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box>
          <Heading.h2
            mt={0}
            fontFamily='code'
            css={`
              font-family: 'Vulf Mono Demo';
              // font-weight: 300;
              font-style: italic;
            `}
          >
            Welcome to my home on the web
          </Heading.h2>

          <Text
            as='p'
            mb={0}
            fontSize='0.85em'
            css={`
              hyphens: auto;
            `}
          >
            Hypertext, CSS, semantic HTML, design systems, internet culture,
            online communities, indie publishing, creative coding, digital
            preservationism, and a diverse & open&nbsp;web.
          </Text>

          <Box
            bg='rgba(0, 0, 0, 0.1)'
            borderRadius='8px'
            py={8}
            px={12}
            mt={24}
          >
            Blog
          </Box>

          <Box
            bg='rgba(0, 0, 0, 0.1)'
            borderRadius='8px'
            py={8}
            px={12}
            mt={16}
          >
            Notes
          </Box>

          <Box
            bg='rgba(0, 0, 0, 0.1)'
            borderRadius='8px'
            py={8}
            px={12}
            mt={16}
          >
            Books
          </Box>

          <Box
            bg='rgba(0, 0, 0, 0.1)'
            borderRadius='8px'
            py={8}
            px={12}
            mt={16}
          >
            Quotes
          </Box>
        </Box>

        <Image src={asciiHouse} alt='' width='75%' mx='auto' mt={48} />
      </Box>
    </Box>
  </Grid>
)

export default Hero
