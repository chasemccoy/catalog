module.exports = {
  siteMetadata: {
    title: `Chase McCoy`,
  },
  pathPrefix: '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bookmarks`,
        path: `${__dirname}/data/bookmarks.json`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `favorites`,
        path: `${__dirname}/data/favorites.json`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/data/portfolio.json`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/data/books.json`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `movies`,
        path: `${__dirname}/data/movies.json`,
      }
    }
  ],
}
