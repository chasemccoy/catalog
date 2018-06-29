import Icon from 'components/Icon'
import React from 'react'
import { media } from 'utils/media'
import styled from 'styled-components'
import { space } from 'styled-system'
import Helmet from 'react-helmet'

const PageContainer = styled.div`
  ${props => props.narrow && 'width: 75%;'} ${props =>
      props.wide && 'width: 145%;'} ${props =>
      props.wide &&
      media.large`
    width: 100%;
	`}

  ${props => props.narrow && media.medium`
    width: 100%;
	`}

  ${space};
`

const PageTitle = styled.h2`
  margin-bottom: 32px;
`

const Page = props => (
  <PageContainer {...props} title="">
    <Helmet
      title={props.title}
      meta={[
        {
          name: 'description',
          content: props.description || 'Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works.'
        },
        {
          name: 'og:title',
          content: props.title || 'Chase McCoy'
        },
        {
          name: 'og:description',
          content: props.description || 'Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works.'
        }
      ]}
    />

    {props.title && !props.untitled && (
      <PageTitle>
        {props.icon && <Icon large name={props.icon} />}

        {props.title}
      </PageTitle>
    )}

    {props.children}
  </PageContainer>
)

export default Page
