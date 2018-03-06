# gatsby-source-dribbble
> Gatsby.js source plugin for loading data from Dribbble

[![Package Version](https://img.shields.io/npm/v/gatsby-source-dribbble.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-source-dribbble)
[![Package Downloads](https://img.shields.io/npm/dt/gatsby-source-dribbble.svg?style=flat-square)](https://www.npmjs.com/package/gatsby-source-dribbble)

Learn more about [Gatsby](https://www.gatsbyjs.org/) and its plugins here: [https://www.gatsbyjs.org/docs/plugins/](https://www.gatsbyjs.org/docs/plugins/)

**See it in live action on the [example site](https://dribbble-example.netlify.com)!**
[Source Code](https://github.com/smakosh/gatsby-source-dribbble-example) for the example site.

## Install

```bash
npm install gatsby-source-dribbble
```

## How to use

```Javascript
// In your gatsby-config.js
plugins: [
    {
        resolve: `gatsby-source-dribbble`,
        options: {
            // You can get your Access Token by following this tutorial: http://developer.dribbble.com/v2/oauth/
            access_token: '<< Your_Access_Token_here >>'
        }
    }
]
```

## GraphQL Queries

Get all your details

```graphql
{
    dribleUser {
      name
      username
      bio
      avatar
      location
      url
      links
      created_at
      can_upload
      pro
      teams
    }
}
```

Get all your shots

```graphql
{
    allDribleProjects {
        edges {
            node {
                title
                description
                id
                published
                updated
                url
                tags
                cover
                width
                height
            }
        }
    }
}
```
