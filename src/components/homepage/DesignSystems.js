import React from 'react'
import Components from 'assets/components.component.svg'
// import Scale from 'assets/scale.component.svg'
import Documentation from 'assets/documentation.component.svg'
import Pattern from 'assets/pattern.component.svg'
import Collab from 'assets/collab.component.svg'
import media from 'utils/media-new'

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
          By focusing on design systems, I hope to help ensure that the spaces
          online where we are frequently spending more and more of our time are
          built in ways that are accessible, inclusive, and respectful of the
          web as a material. Using my skills as a hybrid designer/developer, I
          have been able to create tools, systems, and processes that allow
          other designers and developers to consistently deliver experiences
          that are well-designed, well-made, and more inclusive than ever.
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
    </React.Fragment>
  )
}

export default DesignSystems
