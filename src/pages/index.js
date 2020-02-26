import React from 'react'
import { css } from 'styled-components'
import { graphql } from 'gatsby'
import Page from 'components/NewPage'
import { Box, Text, Heading, Grid } from '@chasemccoy/kit'
import Link from 'components/Link'
import CurveTextScroll from 'components/CurveTextScroll'
import Wide from 'components/Wide'
import Image from 'components/Image'
import portrait from 'assets/portrait.jpg'
import componentGrid from 'assets/component-grid.png'
import pico from 'assets/pico.jpg'
import picoLogo from 'assets/pico-logo.png'
import picoBox1 from 'assets/pico-box-1.png'
import picoBox2 from 'assets/pico-box-2.png'
import picoBox3 from 'assets/pico-box-3.png'
import picoBox4 from 'assets/pico-box-4.png'
import MultiColumn from 'components/MultiColumn'
import { UnorderedList } from 'components/Lists'
// import Code from 'assets/code-icon.svg'
// import Phone from 'assets/phone-icon.svg'
// import Desktop from 'assets/desktop-icon.svg'
import Calendar from 'assets/calendar-icon.svg'
import Sprout from 'assets/sprout.png'
import SproutClassic from 'assets/sprout-classic.png'
import SproutLeaf from 'assets/sprout-leaf.svg'
import media from 'utils/media'

const picoBoxes = {
  1: picoBox1,
  2: picoBox2,
  3: picoBox3,
  4: picoBox4
}

const fullWidthImage = {
  width: ['calc(100% + 32px)', null, 1],
  ml: [-16, -16, 0]
}

const nectarImageCSS = css`
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.gray[1]};

  ${media.small`
    border: none;
    border-radius: 0;
  `}
`

const Badge = ({ icon: Icon, children, ...rest }) => (
  <Box display='inline-flex' alignItems='center' color='gray.5' {...rest}>
    <Icon />
    <Text
      ml={12}
      fontSize='0.75em'
      fontWeight='semibold'
      css={`
        letter-spacing: 1px;
      `}
    >
      {children}
    </Text>
  </Box>
)

const Seeds = () => (
  <div>
    <Wide>
      <Grid gutter='0'>
        <Box
          width={[1, 1, 1 / 2, 1 / 2, 495]}
          borderBottom={['1px solid', null, 'none']}
          borderColor='gray.1'
          display='flex'
          justifyContent='center'
        >
          <Image
            maxWidth='495px'
            src={componentGrid}
            css={`
              align-self: center;
            `}
            px={[12, 12, 0]}
          />
        </Box>

        <Box
          flex={1}
          display='flex'
          alignItems='center'
          px={12}
          mb={[24, 24, 0]}
        >
          <Box pl={[0, 0, 16, 40]}>
            <Badge icon={Calendar} mt={48}>
              2018 — PRESENT
            </Badge>

            <Heading.h2 mt={24}>
              Seeds, Sprout Social’s design system and component library
            </Heading.h2>

            <Text.p fontSize='0.9em'>
              The Design Systems team leads the development of the React
              component library driving all of Sprout’s products, as well as the
              website documenting our entire design system.
            </Text.p>

            <UnorderedList fontSize='0.9em' mb={[40, 40, 40, 0]}>
              <li>
                <Link to='https://seeds.sproutsocial.com'>Check out Seeds</Link>
                , and browse through{' '}
                <Link to='https://seeds.sproutsocial.com/components'>
                  our component documentation
                </Link>
                .
              </li>
              <li>
                Read my article on{' '}
                <Link to='/2019/07/seeds-component-library'>
                  how we created a component library that our developers love
                  using
                </Link>
                .
              </li>
              <li>
                Check out{' '}
                <Link to='/notes/design-systems'>
                  my notes on design systems
                </Link>
                .
              </li>
            </UnorderedList>
          </Box>
        </Box>
      </Grid>
    </Wide>
  </div>
)

const Nectar = props => (
  <Box {...props}>
    {/* <Badge icon={Calendar}>2019</Badge> */}

    <Box width='40px'>
      <SproutLeaf />
    </Box>

    <Heading.h2 fontSize='1.8em' mt={32} mb={24}>
      Redesigning the Sprout Social web app
    </Heading.h2>

    {/* <Wide mb={32}>
      <Grid>
        <Box width={[3 / 4]}>
          <Image
            src={SproutClassic}
            css={css`
              object-fit: cover;
              object-position: left center;
            `}
          />
        </Box>

        <Box width={[3 / 4]}>
          <Image
            src={Sprout}
            css={css`
              object-fit: cover;
              object-position: left center;
            `}
          />
        </Box>
      </Grid>
    </Wide> */}

    <Text.p>
      In 2019, Sprout set out to redesign our entire user interface from the
      ground up for the first time in almost a decade. The legacy Sprout web
      application had become a mess of conflicting styles, patterns, and
      experiences.
    </Text.p>

    <Wide>
      <Grid mt='2em' mb='1em' overflow='visible' {...fullWidthImage}>
        <Box width={[1, 1, 1, 3 / 4]}>
          <a href={SproutClassic}>
            <Image src={SproutClassic} css={nectarImageCSS} />
          </a>
        </Box>

        <Box width={[1, 1, 1, 1 / 4]} display='flex'>
          <Text fontSize='0.8em' color='gray.4' px={[16, null, 0]}>
            Sprout's legacy UI compared to the new UI. You can see how the
            “bones” of the app are largely the same.
            <br />
            <br />
            We transitioned away from our classic green color palette to
            something a bit less jarring. We also switched from Proxima Nova to
            system fonts along with this refresh.
            <br />
            <br />
            Click the images for the full-size version.
          </Text>
        </Box>
      </Grid>
    </Wide>
    {/* 
    <Text.p>
      We leveraged our design system and component library,{' '}
      <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, to tackle this
      project.
    </Text.p> */}

    <Wide mb='2em'>
      <Box {...fullWidthImage}>
        <a href={Sprout}>
          <Image src={Sprout} css={nectarImageCSS} />
        </a>
      </Box>
    </Wide>

    <Text.p>
      The team directly responsible for the redesign was formed around our
      Design Systems team, and we heavily relied on our system and component
      library, <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, to tackle
      this project. This project gave our teams the opportunity to rebuild their
      existing UIs using our latest tools and best-practices.
    </Text.p>

    <Text.p>
      This project was truly the ultimate test for our design system, and
      everyone (including our customers!) are very pleased with the results. Not
      only is the new interface easier to use and more consistent than ever,
      it's also more accessible, responsive, and scalable than ever before.
    </Text.p>
  </Box>
)

const Pico = () => (
  <div>
    <Wide pt={40}>
      <Grid>
        <Box width={[2 / 3, 1 / 2]} display='flex' alignItems='center'>
          <Box pr={[16]} pl={[16, 16, 16, 0]}>
            <Image width={64} src={picoLogo} />

            <Heading.h2 fontSize='1.8em' mt={80} color='inherit'>
              Pico Digital Film
            </Heading.h2>

            <Text.p color='inherit' fontSize='0.9em'>
              A fun little camera app for iOS designed by{' '}
              <Link color='inherit' to='http://louiemantia.com'>
                Louie Mantia
              </Link>{' '}
              and built using Swift by yours truly. Pico Cam allowed you to pick
              from one of a few carefully crafted films, and shoot photos
              pre-processed with that film.
            </Text.p>

            <Text.p color='inherit' fontSize='0.9em' mb='4em'>
              Pico is no longer available for sale, and the domain for the
              website has expired. However, you can still{' '}
              <Link
                color='inherit'
                to='https://web.archive.org/web/20190620065334/http://pico.camera/'
              >
                check out the site on the Internet Archive
              </Link>
              . Louie also{' '}
              <Link
                color='inherit'
                to='https://medium.com/@mantia/pico-digital-film-5ad232977394'
              >
                wrote about the history of the project
              </Link>{' '}
              when it launched back in 2017.
            </Text.p>

            <Grid mb={40} maxWidth={[180, 180, 220, 'none']}>
              {[1, 2, 3, 4].map(i => (
                <Box width={[1 / 2, 1 / 2, 1 / 2, 1 / 4]} minWidth={75} key={i}>
                  <Image src={picoBoxes[i]} />
                </Box>
              ))}
            </Grid>
          </Box>
        </Box>

        <Box width={[1 / 3, 1 / 2]}>
          <Image
            src={pico}
            pl={[0, 0, 0, 120]}
            pt={[0, 0, 40]}
            css={css`
              object-fit: cover;
              object-position: left center;
              min-height: 100%;
            `}
          />
        </Box>
      </Grid>
    </Wide>
  </div>
)

const Portrait = props => (
  <Box bg='accent.pop' {...props}>
    <Image
      src={portrait}
      css={css`
        height: 200px;
        width: 100%;
        mix-blend-mode: luminosity;
        object-fit: cover;
        object-position: center bottom;
      `}
    />
  </Box>
)

const IndexPage = ({ data }) => {
  const { posts } = data

  return (
    <Page untitled>
      <Text.p fontSize='1.5em' lineHeight='1.4'>
        <b>Chase McCoy</b> is a senior design technologist based in Chicago
        leading the team behind{' '}
        <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, Sprout Social’s
        design system.
      </Text.p>

      <Text.p>
        Hi there! 👋 and welcome to my{' '}
        <span
          css={`
            hyphens: auto;
          `}
        >
          website/portfolio/blog/wiki/library/garden/hypertext portal/
        </span>
        etc. I'm a front-end engineer and designer who specializes in systems
        thinking, design tooling, and advocacy. I also spend a lot of time
        thinking about how the web works.
      </Text.p>

      <Text.p>
        I’m currently leading the Design Systems team at{' '}
        <Link to='https://sproutsocial.com'>Sprout Social</Link>, which designs
        and builds <Link to='https://seeds.sproutsocial.com'>Seeds</Link>, our
        design system, as well as other tools used by Sprout employees to
        deliver consistently designed products to our customers. In the past
        I've worked as a mobile designer & iOS developer, creating indie apps in
        my spare time and building products for enterprise clients at my day
        job.
      </Text.p>

      <Wide>
        <Grid gutter='0' overflow='visible' mb='1em' {...fullWidthImage}>
          <Box width={[1, 1, 2 / 3]}>
            <Portrait mr={[0, 0, 12]} />
          </Box>
          <Box flex={[1, 1, 1]}>
            <Box height='100%' bg='accent.pop' p={16} ml={[0, 0, 12]}>
              <Heading.h2 mt={0} fontSize='1.1em'>
                Focusing on —
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
            </Box>
          </Box>
        </Grid>

        <Grid>
          <Box
            width={['auto', 'auto', 'sidebarWidthWithGutter']}
            order={[2, 2, 1]}
          >
            <Box
              display='inline-block'
              borderRadius='50%'
              bg='accent.pop'
              mt={[0, -40, 80]}
              mb={8}
              css={css`
                transform: rotate(-9deg);

                a:hover {
                  color: inherit;
                  text-decoration: underline;
                }
              `}
            >
              <Text fontWeight='bold' fontSize='1.2em' textAlign='center'>
                <Link
                  unstyled
                  to='/thoughts'
                  py='35%'
                  px={24}
                  css={`
                    display: block;
                  `}
                >
                  Blog&nbsp;→
                </Link>
              </Text>
            </Box>
          </Box>

          <Box flex={['100%', '100%', 1]} order={[1, 1, 2]} zIndex={1}>
            <Page.SidebarHeader
              fontFamily='sans'
              pb={4}
              mb={16}
              fontSize='1.2em'
            >
              Recent thoughts
            </Page.SidebarHeader>

            <MultiColumn count={2} gap='24px' minColumnWidth='12em'>
              {posts.nodes.map(post => (
                <Box mb={16} key={post.id}>
                  <Text
                    fontSize='1em'
                    lineHeight='1.3'
                    fontFamily='serif'
                    mb={4}
                  >
                    <Link
                      unstyled
                      to={post.slug}
                      dangerouslySetInnerHTML={{
                        __html: post.title
                      }}
                    />
                  </Text>
                  <Text fontSize='0.8em'>{post.excerpt}</Text>
                </Box>
              ))}
            </MultiColumn>
          </Box>
        </Grid>
      </Wide>

      {/* <Text.p>
        My work focuses on building thoughtful, intuitive, and delightful
        interactions for the web, with a devotion to process, transparency, and
        sharing what I learn.
      </Text.p>

      <Text.p>
        My work focuses on building thoughtful, intuitive, and delightful
        interactions for the web, with a devotion to process, transparency, and
        sharing what I learn. My work focuses on building thoughtful, intuitive,
        and delightful interactions for the web, with a devotion to process,
        transparency, and sharing what I learn.
      </Text.p> */}

      <CurveTextScroll mt={[0, -40]} mb={[0, 0, -40]}>
        ~ keep the web weird ~
      </CurveTextScroll>

      {/* <Page.Breakout
        borderTop='1px solid'
        borderColor='gray.1'
        display='flex'
        justifyContent='center'
        py='1em'
        color='gray.4'
      >
        <Text as='h1' fontSize='1em' m={0} id='#portfolio'>
          Selected projects
        </Text>
      </Page.Breakout> */}

      <Page.Breakout
        bg='#fdfaee'
        mb='2em'
        borderTop='1px solid'
        borderBottom='1px solid'
        borderColor='rgba(0, 0, 0, 0.08)'
      >
        <Page.Wrapper py={0} flush>
          <Seeds />
        </Page.Wrapper>
      </Page.Breakout>

      <Nectar my={64} />

      <Page.Breakout bg='#0f0f0f' color='white' mt={64}>
        <Page.Wrapper py={0} px={0} flush>
          <Pico />
        </Page.Wrapper>
      </Page.Breakout>

      {/* <Box py={80}>
        <Heading.h2 fontSize='1.6em' mt={0}>
          Stay in touch
        </Heading.h2>

        <Text.p mb={0}>
          If you’d like to chat, you can{' '}
          <Link to='mailto:hi@chasem.co'>drop me a line</Link> or find me in a
          coffee shop on Chicago’s west side{' '}
          <span role='img' aria-label='Cup of coffee emoji.'>
            ☕️
          </span>
        </Text.p>
      </Box> */}
    </Page>
  )
}

export default IndexPage

export const query = graphql`
  query NewIndexQuery {
    posts: allBlog(
      filter: { format: { eq: "standard" } }
      sort: { fields: date, order: DESC }
      limit: 8
    ) {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`
