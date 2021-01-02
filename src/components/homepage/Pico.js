import React from 'react'
import picoLogo from 'assets/pico-logo.png'
import picoScreenshot from 'assets/pico.png'
import picoBox1 from 'assets/pico-box-1.png'
import picoBox2 from 'assets/pico-box-2.png'
import picoBox3 from 'assets/pico-box-3.png'
import picoBox4 from 'assets/pico-box-4.png'
import media from 'utils/media-new'
import Link from 'components/Link'

const picoBoxes = [picoBox1, picoBox2, picoBox3, picoBox4]

const Pico = () => {
  return (
    <div
      className='pr-24 pt-16 mobile-breakout mt-24'
      css={`
        background: black;
        align-items: center;
        padding-left: 24px;

        ${media.tiny`
          display: flex;
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

          ${media.tiny`
            margin-right: 40px;
          `}
        `}
        className='py-24 prose smaller color-gray--500'
      >
        <img src={picoLogo} alt='Pico logo' width='72' className='mb-40' />
        <p>
          A fun little camera app for iOS designed by{' '}
          <Link to='http://louiemantia.com/'>Louie Mantia</Link> and built using
          Swift by yours truly. Pico Cam allowed you to pick from one of a few
          carefully crafted films, and shoot photos pre-processed with that
          film.
        </p>
        <p>
          Pico is no longer available for sale, and the domain for the website
          has expired. However, you can still{' '}
          <Link to='https://web.archive.org/web/20190620065334/http://pico.camera/'>
            check out the site on the Internet Archive
          </Link>
          . Louie also{' '}
          <Link to='https://medium.com/@mantia/pico-digital-film-5ad232977394'>
            wrote about the history of the project when it launched back in 2017
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

          img {
            object-fit: cover;
            height: 350px;
            width: 75%;
            object-position: 100% 0;
            margin: 0 auto;
          }

          ${media.tiny`
              img {
                height: auto;
                width: auto;
              }
            `}

          ${media.small`
              flex-basis: 30%;
            `}
        `}
      >
        <img src={picoScreenshot} alt='Screenshot of the Pico Cam app.' />
      </div>
    </div>
  )
}

export default Pico
