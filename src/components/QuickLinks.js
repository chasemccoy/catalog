import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Image from 'components/Image'

const Container = styled.div`
  border-radius: 12px;
  padding: 12px 16px 8px 16px;
`

const Grid = styled.ul`
  display: flex;
  list-style: none;
  white-space: nowrap;
  margin: 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 0 0 8px 0;
`

const Header = styled.h2.attrs({
  className: 'sans',
})`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`

const Item = styled.li`
  display: flex;
  flex: 0 0 auto;
  max-width: 24rem;
  white-space: normal;
  margin: 0;
  align-items: center;
  position: relative;
  padding-right: 16px;

  & + & {
    margin-left: 32px;
  }

  a {
    text-decoration: none;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    height: 80%;
    width: 2px;
    border-radius: 1px;
  }

  &:last-child:after {
    content: none;
  }
`

const ImageContainer = styled.div`
  min-width: 96px;
  max-width: 96px;
  padding-right: 16px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60%;
  justify-content: space-between;

  span {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
  }
`

const QuickLinks = props => (
  <Container>
    <Header>Quick Links</Header>

    <Grid>
      {props.data.map(({ node }, i) => (
        <Item key={i}>
          <ImageContainer>
            {node.preview_url && (
              <Image
                cover
                src={node.preview_url}
                alt={node.title}
                to={node.link}
              />
            )}
          </ImageContainer>

          <Content>
            <Link to={node.link}>{node.title}</Link>
            <span>{node.collection}</span>
          </Content>
        </Item>
      ))}
    </Grid>
  </Container>
)

export default QuickLinks
