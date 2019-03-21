import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import Pre from 'components/mdx/Pre'

const Provider = props => {
  const components = {
    pre: Pre
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