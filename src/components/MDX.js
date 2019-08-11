import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Pre from 'notes/src/components/mdx/Pre'
import Link from 'components/Link'
import { Box, Grid, Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Image from 'components/Image'
import { UnorderedList } from 'components/Lists'
import Float from 'notes/src/components/mdx/Float'
import Quote from 'notes/src/components/mdx/Quote'
import Bookmark from 'notes/src/components/notes/Bookmark'
import Wide from 'notes/src/components/mdx/Wide'
import Callout from 'notes/src/components/mdx/Callout'

const LinkAdapter = ({ href, ...rest }) => <Link to={href} {...rest} />

const Provider = props => {
  const components = {
    pre: Pre,
    a: LinkAdapter,
    P: Text.p,
    ul: UnorderedList,
    Box,
    Grid,
    Text,
    Heading,
    Link,
    Image,
    Float,
    Quote,
    Bookmark,
    Wide,
    Callout
  }

  const newProps = { components, ...props }

  return <MDXProvider {...newProps} />
}

const MDX = {
  Provider,
  Renderer: MDXRenderer
}

export default MDX
