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
    Image,
    Float,
    Quote
  }

  const newProps = { components, ...props }

  return <MDXProvider {...newProps} />
}

const MDX = {
  Provider,
  Renderer: MDXRenderer
}

export default MDX
