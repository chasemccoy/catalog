import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { Grid } from 'components/Base'
import { Box, Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Link from 'components/Link'
// import portrait from 'assets/portrait.jpg'
import portraitBW from 'assets/portrait-bw.png'
import Image from 'components/Image'
import { graphql } from 'gatsby'
import { UnorderedList } from 'components/Lists'
import 'isomorphic-fetch'
import AsciiLogo from 'components/AsciiLogo'
import media from 'utils/media'
import ScrollRow from 'components/ScrollRow'
import TabCard from 'components/TabCard'

const Container = styled(Box)`
  a {
    &:hover {
      color: ${p => p.theme.colors.type.body};
    }
  }
`

const Portrait = styled(Box)`
  background-image: url(${portraitBW});
  background-blend-mode: luminosity;
  height: 250px;
  background-size: cover;
  background-position: 50% 75%;
  background-repeat: no-repeat;

  ${media.small`
    height: 200px;
  `}
`

const GradientBox = styled(Box)`
  background: linear-gradient(
    ${p => (p.flipped ? 'to top' : 'to bottom')},
    ${p => p.theme.colors.accent.light} 24px,
    ${p => p.theme.colors.accent.soft} 24px,
    ${p => p.theme.colors.accent.soft} 48px,
    #ffda73 48px,
    #ffda73 72px,
    ${p => p.theme.colors.accent.pop} 72px,
    ${p => p.theme.colors.accent.pop}
  );
  padding-${p => (p.flipped ? 'bottom' : 'top')}: 72px;

  h4 {
    border-bottom: 1px dashed;
    border-color: ${p => p.theme.colors.accent};
  }
`

// const ArtistList = styled(UnorderedList)`
//   li {
//     margin-right: 16px;
//     margin-bottom: 6px;
//     white-space: nowrap;
//   }

//   li:nth-child(even) {
//     opacity: 0.6;
//   }
// `

// const getTracks = async set => {
//   const response = await fetch('https://chs-stats.now.sh/recentTracks')
//   const result = await response.json()
//   set(result)
// }

// const BorderedBox = props => (
//   <Box
//     p={[8, 16]}
//     bg='white'
//     border='3px solid'
//     borderRadius='8px'
//     // boxShadow='8px 6px 0 black'
//     {...props}
//   />
// )

const Intro = props => (
  <Text.p
    fontSize={['22px', '24px', '26px']}
    lineHeight='1.4'
    mb={0}
    fontWeight='heavy'
    {...props}
  >
    Hey there! I’m Chase, a designer and developer based in Chicago,&nbsp;IL
    specializing in systems thinking, design tooling, and front-end engineering.
    I spend a lot of time thinking about how the web works.
  </Text.p>
)

const Bio = props => (
  <Grid {...props}>
    <Box width={[1, 1, 1, 1, 2 / 3]}>
      <Text.p fontSize='18px'>
        I hate the internet and I love the internet. I believe that it can and
        should be a space that respects the creativity, diversity, and
        well-being of those who occupy it. Like hypertext itself, our culture is
        defined by the connections we make. I work to design and build tools
        that serve those who create connections on (and with) the web.
      </Text.p>

      <Text.p fontSize='18px'>
        I’m currently working as a founding member of the Design Systems team at{' '}
        <Link to='https://sproutsocial.com'>Sprout Social</Link>. I design and
        build <Link to='https://sproutsocial.com/seeds'>Seeds</Link>, our design
        system, as well as other tools used by Sprout employees to deliver
        consistently designed products to our customers. Previously I worked as
        a mobile designer & iOS developer, creating indie apps in my spare time
        and building products for enterprise clients at my day job. Check out{' '}
        <Link to='/portfolio'>my portfolio</Link> to learn more.
      </Text.p>

      <Text.p fontSize='18px' mb={0}>
        If you’d like to chat, you can{' '}
        <Link to='mailto:desk@chasem.co'>drop me a line</Link> or find me in a
        coffee shop on Chicago’s west side{' '}
        <span role='img' aria-label='Cup of coffee emoji.'>
          ☕️
        </span>
      </Text.p>
    </Box>

    <Box width={[1, 1, 1, 1, 1 / 3]}>
      <Grid mt={[16, -24]}>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 2, 1]} mb={[16, 0, 0, '8px']}>
          <Heading.section mt={0} mb={8}>
            Interests
          </Heading.section>
          <Text as='p' mb={0} fontSize='15px' lineHeight='1.4'>
            Hypertext, CSS, semantic HTML, design systems, internet culture,
            online communities, indie publishing, creative coding, digital
            preservationism, and a diverse & open web.
          </Text>
        </Box>

        <Box width={[1, 1 / 2, 1 / 2, 1 / 2, 1]} mb={[16, 0]}>
          <Heading.section mb={8}>Colophon</Heading.section>
          <Text as='p' mb={0} fontSize='15px' lineHeight='1.4'>
            This site was built using{' '}
            <Link to='https://gatsbyjs.org'>Gatsby</Link>,{' '}
            <Link to='https://styled-components.com'>Styled Components</Link>,
            and <Link to='https://netlify.com'>Netlify</Link>. Weather data
            provided by the{' '}
            <Link to='https://darksky.net/dev'>Dark Sky API</Link>.
          </Text>
        </Box>
      </Grid>
    </Box>
  </Grid>
)

const Promo = ({ olderPosts, blogroll, photos, ...rest }) => (
  <Grid {...rest}>
    <Box width={[1, 1 / 3, 1 / 3, 1 / 4]} mb={[16, 32, 0]}>
      <Heading.section>Blogroll</Heading.section>

      <UnorderedList unstyled>
        {blogroll.map((node, i) => (
          <Box as='li' key={i}>
            <Link to={node.data.url} fontSize='17px' lineHeight='1.6'>
              {node.data.title}
            </Link>
          </Box>
        ))}
      </UnorderedList>
    </Box>

    <Box width={[1, 2 / 3, 2 / 3, 3 / 4]}>
      <Heading.section mb={16}>Recent Photos</Heading.section>

      <Grid gutter={8}>
        {photos.nodes.map(node => {
          const srcRegex = /<img.*?src=['"](.*?)['"]/
          const src = srcRegex.exec(node.content)[1]

          return (
            <Box width={[1 / 2, 1 / 3, 1 / 2, 1 / 3]} key={node.id}>
              <Image borderRadius='6px' src={src} to={node.slug} />
            </Box>
          )
        })}
      </Grid>
    </Box>
  </Grid>
)

const Header = props => (
  <Page.Header {...props}>
    <Portrait
      overflow='hidden'
      bg='accent.pop'
      mb={-16}
      mt={[-24, -24, -40]}
      ml='-1px'
    />
  </Page.Header>
)

const Index = props => {
  // const [tracks, setTracks] = useState([])

  // useEffect(() => {
  //   getTracks(setTracks)
  // }, [])

  // const artists = tracks.map(track => track.artist)
  // const uniqueArtists = Array.from(new Set(artists))

  const blogroll = props.data.blogroll.nodes.sort((a, b) =>
    a.data.title.localeCompare(b.data.title)
  )

  return (
    <Page wide header={<Header />}>
      <Container>
        <GradientBox flipped pt={16} px={[16, 16, 32]} bg='accent.pop'>
          <AsciiLogo />
          <Intro mt={16} mb={24} />
          <Box borderBottom='2px dashed' borderColor='accent' mx={-32} />
        </GradientBox>

        <Box py={24} px={[16, 16, 32]}>
          <Bio />
        </Box>

        <GradientBox pb={24} px={[16, 16, 32]} bg='accent.pop'>
          <Box borderTop='2px dashed' borderColor='accent' mx={-32} mb={24} />

          <Heading.section mb={0}>Writing</Heading.section>

          <ScrollRow py={12} mt={8} mb={16} px={8} mx={-8}>
            {props.data.olderPosts.nodes.map(node => (
              <TabCard
                to={node.slug}
                title={node.title}
                description={node.excerpt}
                tab={node.date}
                key={node.id}
                minWidth='250px'
              />
            ))}
          </ScrollRow>

          <Promo
            olderPosts={props.data.olderPosts}
            blogroll={blogroll}
            photos={props.data.photos}
          />

          {/* <Grid mt={8}>
            <Box width={1}>
              {artists.length > 0 && (
                <>
                  <Heading.section>On rotation</Heading.section>

                  <ArtistList unstyled inline>
                    {uniqueArtists.map(
                      (artist, i) =>
                        artist && (
                          <Text fontSize='14px' fontFamily='mono' as='li' key={i}>
                            {artist}
                          </Text>
                        )
                    )}
                  </ArtistList>
                </>
              )}
            </Box>
          </Grid> */}
        </GradientBox>
      </Container>
    </Page>
  )
}

export default Index

export const query = graphql`
  query IndexQuery {
    olderPosts: allBlog(
      filter: { format: { eq: "standard" } },
      sort: { fields: date, order: DESC },
      limit: 10
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date(formatString: "MMMM Do")
      }
    }

    photos: allBlog(filter: { format: { eq: "image" } }, limit: 9) {
      nodes {
        id
        slug
        format
        content
      }
    }

    blogroll: allAirtable(filter: { queryName: { eq: "blogroll" } }) {
      nodes {
        data {
          title: Title
          url: URL
        }
      }
    }
  }
`
