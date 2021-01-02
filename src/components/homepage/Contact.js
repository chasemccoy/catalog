import React from 'react'
import Link from 'components/Link'
import media from 'utils/media-new'
import Twitter from 'assets/icons/twitter.component.svg'
import GitHub from 'assets/icons/github.component.svg'
import Camera from 'assets/icons/camera.component.svg'
import Email from 'assets/icons/email.component.svg'
import Spotify from 'assets/icons/spotify.component.svg'

// const ContactMe = () => {
//   return (
//     <p
//       className='mb-12 hyphens lead'
//       css={`
//         svg {
//           margin-top: -4px;
//         }
//       `}
//     >
//       The best way to get in touch with me is via{' '}
//       <Link
//         unstyled
//         to='https://twitter.com/chase_mccoy'
//         css={`
//           --link-color: var(--color-blue);
//           --section-color: var(--color-blue);
//         `}
//       >
//         Twitter <Twitter className='inline' />
//       </Link>{' '}
//       or{' '}
//       <Link
//         unstyled
//         to='mailto:hi@chasem.co'
//         css={`
//           --link-color: var(--color-green);
//           --section-color: var(--color-green);
//         `}
//       >
//         email <Email className='inline' />
//       </Link>
//       &nbsp;&nbsp; You can also find me on{' '}
//       <Link
//         unstyled
//         to='https://github.com/chasemccoy'
//         css={`
//           --link-color: var(--color-text);
//           --section-color: var(--color-gray--400);
//         `}
//       >
//         GitHub <GitHub className='inline' />
//       </Link>{' '}
//       and{' '}
//       <Link
//         unstyled
//         to='https://instagram.com/chs_mc'
//         css={`
//           --link-color: var(--color-red);
//         `}
//       >
//         Instagram <Camera className='inline' />
//       </Link>
//     </p>
//   )
// }

const ContactMe = () => {
  return (
    <React.Fragment>
      <h3
        className='mt-24 color-gray--500'
        css='font-size: .7rem !important; font-weight: normal;'
      >
        Get in touch
      </h3>

      <ul
        className='mt-8 mb-12 bold'
        css={`
          li {
            display: block;

            ${media.small`
            display: inline;
          `}
          }

          li + li {
            margin-left: 0;

            ${media.small`
            margin-left: 1.5em;
          `}
          }

          svg {
            margin-top: -4px;
            margin-right: 2px;
          }

          a:hover > span {
            text-decoration: underline;
          }
        `}
      >
        <li>
          <Link
            unstyled
            to='https://chs.is/tweeting'
            css={`
              --link-color: var(--color-blue);
              --section-color: var(--color-blue);
            `}
          >
            <Twitter className='inline' />&nbsp;<span>Twitter</span>
          </Link>
        </li>
        <li>
          <Link
            unstyled
            to='mailto:hi@chasem.co'
            css={`
              --link-color: var(--color-yellow);
              --section-color: var(--color-yellow);
            `}
          >
            <Email className='inline' />&nbsp;<span>Email</span>
          </Link>
        </li>
        <li>
          <Link
            unstyled
            to='https://chs.is/coding'
            css={`
              --link-color: var(--color-text);
              --section-color: var(--color-text);
            `}
          >
            <GitHub className='inline' />&nbsp;<span>GitHub</span>
          </Link>
        </li>
        <li>
          <Link
            unstyled
            to='https://chs.is/ig'
            css={`
              --link-color: var(--color-red);
              --section-color: var(--color-red);
            `}
          >
            <Camera className='inline' />&nbsp;<span>Instagram</span>
          </Link>
        </li>
        <li>
          <Link
            unstyled
            to='https://chs.is/listening'
            css={`
              --link-color: var(--color-green);
              --section-color: var(--color-green);
            `}
          >
            <Spotify className='inline' />&nbsp;<span>Spotify</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default ContactMe
