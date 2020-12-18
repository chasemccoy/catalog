import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Pre from 'components/mdx/Pre'
import Link from 'components/Link'
import { Box, Grid, Text } from '@chasemccoy/kit'
import Image from 'components/Image'
import { UnorderedList, OrderedList } from 'components/Lists'
import Bookmark from 'components/mdx/Bookmark'
import Tweet from 'components/mdx/Tweet'
import Wide from 'components/Wide'
import Callout from 'components/mdx/Callout'
import Video from 'components/mdx/Video'
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
    Link,
    Image,
    Bookmark,
    Tweet,
    Wide,
    Callout,
    Tags,
    Video
  }

  const newProps = { components, ...props }

  return <MDXProvider {...newProps} />
}

const MDX = {
  Provider,
  Renderer: MDXRenderer
}

export default MDX
