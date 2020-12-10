import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Pre from 'components/mdx/Pre'
import Link from 'components/Link'
import { Box, Grid, Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Image from 'components/Image'
import { UnorderedList, OrderedList } from 'components/Lists'
import Float from 'components/mdx/Float'
import Quote from 'components/mdx/Quote'
import Bookmark from 'components/notes/Bookmark'
import Tweet from 'components/notes/Tweet'
import Wide from 'components/Wide'
import Callout from 'components/mdx/Callout'
import Tags from 'components/Tags'

const LinkAdapter = ({ href, ...rest }) => <Link to={href} {...rest} />

const Provider = (props) => {
  const components = {
    pre: Pre,
    a: LinkAdapter,
    P: Text.p,
    ul: UnorderedList,
    ol: OrderedList,
    Box,
    Grid,
    Text,
    Heading,
    Link,
    Image,
    Float,
    Quote,
    Bookmark,
    Tweet,
    Wide,
    Callout,
    Tags
  }

  const newProps = { components, ...props }

  return <MDXProvider {...newProps} />
}

const MDX = {
  Provider,
  Renderer: MDXRenderer
}

export default MDX
