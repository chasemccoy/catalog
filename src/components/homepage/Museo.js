import React from 'react'
import styled from 'styled-components'
import media from 'utils/media-new'
import museo from 'assets/museo.png'
import museoLandscape from 'assets/museo.jpg'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h1 {
    font-size: 2.8em;
    font-family: var(--font-header);
    display: inline-flex;
    align-items: center;
  }

  a {
    color: inherit;
  }

  a:hover {
    color: var(--color-gray--500);
  }

  .prose {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  ul li + li {
    margin-top: 4px;
  }

  .image-container {
    min-width: 42%;
    align-self: center;
  }

  img:not(.mobile-only) {
    display: none;
    padding-left: 32px;

    ${media.tiny`
      display: block;
    `}
  }

  img.mobile-only {
    margin-top: 16px;
    display: block;
    height: 200px;
    object-fit: cover;
    object-position: 50% 70%;

    ${media.tiny`
      display: none;
    `}
  }

  ${media.tiny`
    flex-wrap: nowrap;
  `}
`

const Museo = (props) => {
  return (
    <Container {...props}>
      <div className='prose'>
        <div>
          <h1>
            <Link to='https//museo.app' unstyled>
              <span className='color-blue'>Museo</span>
              <span
                css={`
                  display: inline-block;
                  font-family: var(--font-body);
                  color: var(--color-gray--400);
                  font-size: 1rem;
                  font-weight: normal;
                  transform: translateY(-1px);
                `}
              >
                .app
              </span>
            </Link>
          </h1>

          <p className='lead mt-0 color-gray--400'>
            A visual search engine for free-to-use images from some of the best
            museums in the world.
          </p>
        </div>

        <div className='mt-0'>
          <p className='smaller color-gray--400 mt-12'>
            <Link to='https://museo.app'>Museo</Link> is an open source web
            interface that connects you with the the following institutions:
          </p>

          <UnorderedList className='smaller color-gray--400 mt-12'>
            <li>
              <Link to='https://www.artic.edu/archival-collections/explore-the-collection'>
                The Art Institute of Chicago
              </Link>
            </li>
            <li>
              <Link to='https://www.rijksmuseum.nl/nl'>The Rijksmuseum</Link>
            </li>
            <li>
              <Link to='https://harvardartmuseums.org'>
                The Harvard Art Museums
              </Link>
            </li>
            <li>
              <Link to='https://digitalcollections.nypl.org'>
                The New York Public Library Digital Collection
              </Link>
            </li>
          </UnorderedList>

          <p className='smaller color-gray--400 mt-12'>
            This tool is possible because these institutions provide open and
            free API access to their collections. All of the images you find
            with Museo are completely free-to-use, so download away.
          </p>
        </div>
      </div>

      <div className='image-container'>
        <img
          src={museo}
          alt='View of the Golden Bend in the Herengracht, Gerrit Adriaensz.'
        />
        <img
          src={museoLandscape}
          className='mobile-only mobile-breakout'
          alt='View of the Golden Bend in the Herengracht, Gerrit Adriaensz.'
        />
      </div>
    </Container>
  )
}

export default Museo
