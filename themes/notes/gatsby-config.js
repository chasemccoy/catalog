module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              sizeByPixelDensity: true,
              linkImagesToOriginal: true
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'notes',
        path: 'notes'
      }
    }
  ]
}