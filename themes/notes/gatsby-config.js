module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'notes',
        path: 'notes'
      }
    }
  ]
}
