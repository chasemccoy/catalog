import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Metadata = ({ title, description, image, pathname, article, children }) => {
  const data = useStaticQuery(query) 

  const { defaultTitle, defaultDescription, titleTemplate, twitterUsername, siteUrl } = data.site.siteMetadata

  const seo = {
    title: title,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || '/'}`,
  }

  return (
    <React.Fragment>
      <Helmet 
        title={seo.title} 
        titleTemplate={titleTemplate} 
        defaultTitle={defaultTitle}
      >
        <meta name="description" content={seo.description} />

        {seo.url && <meta property="og:url" content={seo.url} />}

        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}

        {seo.title && <meta property="og:title" content={seo.title} />}

        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}

        <meta name="twitter:card" content="summary" />

        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}

        {twitterUsername && (
          <meta name="twitter:site" content={twitterUsername} />
        )}

        {seo.title && <meta name="twitter:title" content={seo.title} />}

        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}

        <meta name="application-name" content="Chase McCoy" />
        <meta name="apple-mobile-web-app-title" content="Chase McCoy" />

        <link rel="pingback" href="https://webmention.io/chasem.co/xmlrpc" />
        <link href="https://twitter.com/chase_mccoy" rel="me" />
        <link rel="webmention" href="https://webmention.io/chasem.co/webmention" />

        {children}
      </Helmet>
    </React.Fragment>
  )
}

Metadata.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
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
        twitterUsername
      }
    }
  }
`