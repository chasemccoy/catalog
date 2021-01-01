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
import asciiHouse from 'assets/ascii-house.png'
import ContactMe from 'components/Contact'
import Globe from 'assets/icons/globe.component.svg'
import picoLogo from 'assets/pico-logo.png'
import picoScreenshot from 'assets/pico.png'
import picoBox1 from 'assets/pico-box-1.png'
import picoBox2 from 'assets/pico-box-2.png'
import picoBox3 from 'assets/pico-box-3.png'
import picoBox4 from 'assets/pico-box-4.png'

const picoBoxes = [picoBox1, picoBox2, picoBox3, picoBox4]

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
      <img src={avatar} alt='' />
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
        {/* based out of{' '}
        <span css='color: var(--color-red);'>
          Chicago&nbsp;
          <span css='font-size: 1.2em; line-height: 1rem; vertical-align: middle;'>
            ✶
          </span>
        </span>{' '} */}
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
          <Avatar /> Born and raised in Mississippi, I’m currently based out of
          Chicago. While I have a background in mobile design and development, I
          spend most of my time these days thinking about the web—how it works,
          how it’s changing, and how we can make it a better place.
        </p>

        <p>
          This website is my home on the web, and in{' '}
          <Link to='https://thecreativeindependent.com/people/laurel-schwulst-my-website-is-a-shifting-house-next-to-a-river-of-knowledge-what-could-yours-be/'>
            the words of Laurel Schwulst
          </Link>{' '}
          it is truly “a shifting house next to a river of knowledge.” This is
          where I catalog my findings from exploring the internet.
        </p>

        <ContactMe />
      </div>

      <Marker className='mt-32'>
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
          My love for the web and skills as a hybrid designer/developer led me
          to design systems. In my roles on system teams I have been able to
          create tools and infrastructures used to deliver and improve upon web
          experiences relied upon by hundreds of thousands of users ever day.
        </p>

        <p>
          {/* While I love the technical side of design systems, I find the the most
          satisfaction solving people problems through close collaboration with
          others. This soft, squishy center of systems work is essential to a
          successful design system. My background as a designer and developer,
          as well as my love for solving */}
          As a design systems practitioner my work is typically split between a
          few focus areas:
        </p>
      </div>

      {/* <img src={asciiHouse} alt="" css='filter: invert(); width: 15em; margin: 0 auto;' /> */}

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
          <h3
            className='mt-12 mb-2 dotted'
            style={{ '--dot-color': 'var(--color-green)' }}
          >
            Community
          </h3>
          <p className='hyphens'>
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
          <p className='hyphens'>
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
          <p className='hyphens'>
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
          <p className='hyphens'>
            Our responsibility as system practitioners is to be the stewards,
            shepherds, scribes, and librarians of a product experience.
          </p>
        </div>
      </Columns>

      <div
        className='pr-24 pt-16 mobile-breakout mt-40'
        css={`
          background: black;
          display: flex;
          align-items: center;
          padding-left: 24px; 

          ${media.tiny`
            border-radius: 12px;
            padding-left: 32px; 
          `}
        `}
      >
        <div
          css={`
            flex: 1 1 auto;

            a {
              color: inherit;
            }

            a:hover {
              color: var(--color-gray--400);
            }
          `}
          className='py-24 prose mr-40 smaller color-gray--500'
        >
          <img src={picoLogo} alt='Pico logo' width='72' className='mb-40' />
          <p>
            A fun little camera app for iOS designed by{' '}
            <Link to='http://louiemantia.com/'>Louie Mantia</Link> and built
            using Swift by yours truly. Pico Cam allowed you to pick from one of
            a few carefully crafted films, and shoot photos pre-processed with
            that film.
          </p>
          <p>
            Pico is no longer available for sale, and the domain for the website
            has expired. However, you can still{' '}
            <Link to='https://web.archive.org/web/20190620065334/http://pico.camera/'>
              check out the site on the Internet Archive
            </Link>
            . Louie also{' '}
            <Link to='https://medium.com/@mantia/pico-digital-film-5ad232977394'>
              wrote about the history of the project when it launched back in
              2017
            </Link>
            .
          </p>
          <div
            className='mt-40'
            css={`
              img {
                display: inline;
                width: 18%;
              }

              img + img {
                margin-left: 16px;
              }
            `}
          >
            {picoBoxes.map((src) => (
              <img src={src} alt='' />
            ))}
          </div>
        </div>

        <div
          css={`
            flex: 1 0 40%;
            align-self: flex-end;

            ${media.small`
              flex-basis: 30%;
            `}
          `}
        >
          <img src={picoScreenshot} alt='Screenshot of the Pico Cam app.' />
        </div>
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
