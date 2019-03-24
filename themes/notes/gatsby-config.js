module.exports = {
  plugins: [
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        globalScope: `
          import { Box, Grid, Text } from '@chasemccoy/kit';
          import Heading from 'components/Heading';
          export default { Text, Heading, Grid, Box };
        `,
        gatsbyRemarkPlugins: [
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