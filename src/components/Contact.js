import React from 'react'
import Link from 'components/Link'
import Twitter from 'assets/icons/twitter.component.svg'
import GitHub from 'assets/icons/github.component.svg'
import Camera from 'assets/icons/camera.component.svg'
import Email from 'assets/icons/email.component.svg'

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
    <ul
      className='mb-12 bold'
      css={`
        li {
          display: inline;
        }

        li + li {
          margin-left: 1.5em;
        }

        svg {
          margin-top: -5px;
        }

        a:hover > span {
          text-decoration: underline;
        }
      `}
    >
      <li>
        <Link
          unstyled
          to='https://twitter.com/chase_mccoy'
          css={`
            --link-color: var(--color-blue);
            --section-color: var(--color-blue);
          `}
        >
          <Twitter className='inline' /> <span>Twitter</span> 
        </Link>
      </li>
      <li>
        <Link
          unstyled
          to='mailto:hi@chasem.co'
          css={`
            --link-color: var(--color-green);
            --section-color: var(--color-green);
          `}
        >
          <Email className='inline' /> <span>Email</span>
        </Link>
      </li>
      <li>
        <Link
          unstyled
          to='https://github.com/chasemccoy'
          css={`
            --link-color: var(--color-text);
            --section-color: var(--color-text);
          `}
        >
          <GitHub className='inline' /> <span>GitHub</span>
        </Link>
      </li>
      <li>
        <Link
          unstyled
          to='https://instagram.com/chs_mc'
          css={`
            --link-color: var(--color-red);
            --section-color: var(--color-red);
          `}
        >
          <Camera className='inline' /> <span>Instagram</span>
        </Link>
      </li>
    </ul>
  )
}

export default ContactMe
