module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md']
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