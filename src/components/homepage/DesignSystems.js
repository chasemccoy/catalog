import React from 'react'
import Components from 'assets/components.component.svg'
// import Scale from 'assets/scale.component.svg'
import Documentation from 'assets/documentation.component.svg'
import Pattern from 'assets/pattern.component.svg'
import Collab from 'assets/collab.component.svg'
import media from 'utils/media-new'
import Folder from 'assets/icons/folder.component.svg'
import Link from 'components/Link'

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

const DesignSystems = () => {
  return (
    <React.Fragment>
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
          I believe that design systems can be powerful catalysts for change within a product organization, and provide a shared vocabulary that makes collaboration more efficient and inclusive. By focusing on systems, I hope to help ensure that the spaces where we are frequently spending more and more of our time online are built in ways that are accessible, intentional, and respectful of the web as a material.
        </p>

        <p>
          My love for systems work stems from my love of collaborating with and
          enabling others to ship excellent user experiences. Here are some ways
          in which I accomplish that:
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

          padding-left: 12px;

          ${media.small`
            padding-left: 0;
          `}
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
          <p className='hyphens pr-12'>
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
            Communication
          </h3>
          <p className='hyphens pr-12'>
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
          <p className='hyphens pr-12'>
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
            Pattern making
          </h3>
          <p className='hyphens pr-12'>
            Our responsibility as system practitioners is to be the stewards,
            shepherds, scribes, and librarians of a product experience.
          </p>
        </div>
      </Columns>

      <Link 
        unstyled
        to='/notes/design-systems'
        className='flex mt-40 p-16'
        css={`
          align-items: flex-start;
          border: 1px solid var(--color-border);
          border-radius: 12px;

          &:hover {
            background: var(--color-gray--800);
          }
        `}
      >
        <Folder css={`width: 2rem; flex: 1 0 auto; color: var(--color-purple);`} />

        <div className='ml-16'>
          <h2 className='mb-2'>Read my notes on design systems</h2>
          <p className='color-gray--400'>The notes section of this site contains useful links, quotes, and insights related to design systems and the work that goes into them.</p>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default DesignSystems
