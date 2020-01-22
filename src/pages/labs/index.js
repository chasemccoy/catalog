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
import Code from 'assets/code-icon.svg'
import Phone from 'assets/phone-icon.svg'
import Desktop from 'assets/desktop-icon.svg'

const picoBoxes = {
  1: picoBox1,
  2: picoBox2,
  3: picoBox3,
  4: picoBox4
}

const Badge = ({ icon: Icon, children, ...rest }) => (
  <Box display='inline-flex' alignItems='center' {...rest}>
    <Icon />
    <Text
      ml={12}
      fontSize='0.75em'
      fontWeight='bold'
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
            <Badge icon={Desktop} mt={48}>
              GATSBY, REACT, STORYBOOK
            </Badge>

            <Heading.h2 mt={24}>
              Seeds, Sprout Social's design system and component library
            </Heading.h2>

            <Text.p fontSize='0.9em'>
              The Design Systems team leads the development of the React
              component library driving all of Sprout's products, as well as the
              website documenting our entire design system.
            </Text.p>

            <UnorderedList fontSize='0.9em' mb={[40, 40, 40, 0]}>
              <li>
                <Link to='https://sproutsocial.com/seeds'>Check out Seeds</Link>
                , and browse through{' '}
                <Link to='https://sproutsocial.com/seeds/components'>
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
    <Badge icon={Desktop}>REACT, STYLED COMPONENTS</Badge>

    <Heading.h2 fontSize='1.8em' mt={64} mb={24}>
      Redesigning the Sprout Social web app
    </Heading.h2>

    <Wide mb={32}>
      <Grid>
        <Box width={[1, 1 / 2]}>
          <Image
            src='https://miro.medium.com/max/6720/1*JJlCaZP2LGbFsDtxu83YjQ.png'
            css={css`
              object-fit: cover;
              object-position: left center;
            `}
          />
        </Box>

        <Box width={[1, 1 / 2]}>
          <Image
            src='https://miro.medium.com/max/6720/1*JJlCaZP2LGbFsDtxu83YjQ.png'
            css={css`
              object-fit: cover;
              object-position: left center;
            `}
          />
        </Box>
      </Grid>
    </Wide>

    <Text.p>
      My work focuses on building thoughtful, intuitive, and delightful
      interactions for the web, with a devotion to process. My work focuses on
      building thoughtful, intuitive, and delightful interactions for the web,
      with a devotion to process. My work focuses on building thoughtful,
      intuitive, and delightful interactions for the web, with a devotion to
      process.
    </Text.p>

    <Text.p>
      My work focuses on building thoughtful, intuitive, and delightful
      interactions for the web, with a devotion to process.
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

const Portrait = () => (
  <Box
    bg='accent.pop'
    width={['calc(100% + 32px)', null, 1]}
    ml={[-16, -16, 0]}
  >
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
      <Text.p fontSize='1.5em' mb='1em' lineHeight='1.4'>
        <b>Chase McCoy</b> is a designer and developer based in Chicago, working
        at Sprout Social on the{' '}
        <Link to='https://sproutsocial.com/seeds'>Seeds design system</Link>.
      </Text.p>

      <Text.p mb='1.25em'>
        My work focuses on building thoughtful, intuitive, and delightful
        interactions for the web, with a devotion to process, transparency, and
        sharing what I learn.
      </Text.p>

      <Wide>
        <Grid overflow='visible' mb='1em'>
          <Box width={[1, 1, 2 / 3]}>
            <Portrait />
          </Box>
          <Box flex={[1, 1, 1]}>
            <Box height='100%' bg='accent.pop' p={16}>
              test
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
              py='20%'
              px={24}
              mt={[0, -40, 80]}
              mb={8}
              css='transform: rotate(-9deg);'
            >
              <Text fontWeight='bold' fontSize='1.2em' textAlign='center'>
                <Link unstyled to='/thoughts'>
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
                  <Text fontSize='0.75em'>{post.excerpt}</Text>
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

      <CurveTextScroll mt={[0, -40, -80, -120]}>
        ~ keep the web weird ~
      </CurveTextScroll>

      <Page.Breakout
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
      </Page.Breakout>

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

      <Heading.h2 fontSize='1.8em'>What’s next?</Heading.h2>

      <Text.p mb='1.25em'>
        My work focuses on building thoughtful, intuitive, and delightful
        interactions for the web, with a devotion to process, transparency, and
        sharing what I learn.
      </Text.p>
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
