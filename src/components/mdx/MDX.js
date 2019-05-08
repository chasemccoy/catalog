import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Pre from 'components/mdx/Pre'
import Link from 'components/Link'
import { Box, Grid, Text } from '@chasemccoy/kit';
import Heading from 'components/Heading';

const LinkAdapter = ({ href, ...rest }) => (
  <Link to={href} {...rest} />
)

const Provider = props => {
  const components = {
    pre: Pre,
    a: LinkAdapter,
    Box: Box,
    Grid: Grid,
    Text: Text,
    Heading: Heading
  }

  const newProps = {components, ...props}

  return (
    <MDXProvider {...newProps} />
  )
}

const Renderer = MDXRenderer

const MDX = {
  Provider,
  Renderer
}

export default MDX