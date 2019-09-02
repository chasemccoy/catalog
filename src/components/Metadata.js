import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

const Metadata = ({
  title,
  description,
  image = '/site-image.jpg',
  article,
  children
}) => {
  const data = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    titleTemplate,
    social,
    siteUrl
  } = data.site.siteMetadata

  const seo = {
    title: title,
    description: description || defaultDescription,
    url: siteUrl,
    image: siteUrl + image
  }

  return (
    <Location>
      {({ location: { pathname } }) => (
        <Helmet
          title={seo.title}
          titleTemplate={titleTemplate}
          defaultTitle={defaultTitle}
        >
          <meta name='description' content={seo.description} />

          {article && <meta property='og:type' content='article' />}

          <meta property='og:title' content={seo.title || defaultTitle} />

          {seo.url && pathname && (
            <meta property='og:url' content={seo.url + pathname.replace(/\/$/, "")} />
          )}

          {seo.description && (
            <meta property='og:description' content={seo.description} />
          )}

          {image && <meta property='og:image' content={seo.image} />}

          <meta name='twitter:card' content='summary' />

          {social && social.twitter && (
            <meta name='twitter:creator' content={social.twitter} />
          )}

          {social && social.twitter && (
            <meta name='twitter:site' content={social.twitter} />
          )}

          {seo.title && <meta name='twitter:title' content={seo.title} />}

          {seo.description && (
            <meta name='twitter:description' content={seo.description} />
          )}

          <meta name='application-name' content='Chase McCoy' />
          <meta name='apple-mobile-web-app-title' content='Chase McCoy' />

          <link rel='pingback' href='https://webmention.io/chasem.co/xmlrpc' />
          <link href='https://twitter.com/chase_mccoy' rel='me' />
          <link href='https://github.com/chasemccoy' rel='me' />
          <link
            rel='webmention'
            href='https://webmention.io/chasem.co/webmention'
          />
          <link
            rel='authorization_endpoint'
            href='https://indieauth.com/auth'
          ></link>

          {children}
        </Helmet>
      )}
    </Location>
  )
}

Metadata.defaultProps = {
  title: null,
  description: null,
  pathname: null,
  article: false
}

export default Metadata

const query = graphql`
  query Metadata {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        social {
          twitter
        }
      }
    }
  }
`
