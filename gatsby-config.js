require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Chase McCoy',
    titleTemplate: '%s | Chase McCoy',
    description:
      'Chase McCoy is a product designer, front-end engineer, and internet explorer working on design systems at Stripe.',
    siteUrl: 'https://chasem.co',
    social: {
      twitter: '@chase_mccoy',
      github: '@chasemccoy',
      instagram: '@chs_mc'
    }
  },
  // flags: {
  //   FAST_REFRESH: true,
  //   QUERY_ON_DEMAND: true,
  //   PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //   LAZY_IMAGES: true
  // },
  plugins: [
    // 'gatsby-plugin-preact',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
              linkImagesToOriginal: true,
              showCaptions: ['title'],
              disableBgImageOnAlpha: true
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files'
          },
          {
            resolve: 'gatsby-remark-smartypants'
          }
        ]
      },
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1400,
            linkImagesToOriginal: true,
            showCaptions: ['title'],
            disableBgImageOnAlpha: true
          }
        }
      ]
    },
    {
      resolve: require.resolve(`./themes/blog`)
    },
    {
      resolve: require.resolve(`./themes/notes`)
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`)
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-hjson`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/data/portfolio.hjson`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/data/books/books.hjson`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `${__dirname}/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quotes`,
        path: `${__dirname}/data/quotes.hjson`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chase McCoy`,
        short_name: `chasem.co`,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#FFC700',
        display: 'standalone',
        icon: 'src/favicon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/.*.component\.svg/
        }
      }
    }
  ]
}
