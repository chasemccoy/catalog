import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { Row, Column } from 'components/Grid'
import Header from 'components/Header'
import Link from 'components/Link'
import media from 'utils/media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: calc(100vw - 240px);
  min-height: 100vh;
  margin: 0 auto;
  padding: 120px 0;
  color: white;
  overflow: hidden;

  ${media.medium`
    max-width: calc(100vw - 120px);
  `}

  ${media.small`
    max-width: calc(100vw - 48px);
  `}

  a {
    color: white;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`

const Lead = styled.p`
  font-size: 18px;
  font-family: ${p => p.theme.fontFamily.mono};
  margin-bottom: 160px;
  max-width: 60ch;

  a {
    text-decoration: underline;
  }
`

const Symbol = styled.span`
  font-family: LucidaGrande;
`

const Nav = styled(Header)`
  margin: 0;
  padding: 16px 0;

  li {
    color: ${p => p.theme.colors.type.menu};
  }
`

class IndexPage extends React.Component {
  render() {

    return (
      <Layout dark>
        <Container>
          <Row>
            <Column width={[1]}>
              <Lead><Symbol>⎋</Symbol><br /><br />Chase McCoy is a designer living in Chicago who spends a lot of time thinking about how the web works. Right now, I'm building a design system at <Link to='http://sproutsocial.com'>Sprout Social</Link> and thinking about design as it relates to ethics, tooling, art, and engineering. You can follow along here, or on <Link to='http://twitter.com/chase_mccoy'>Twitter</Link> and <Link to='http://instagram.com/chs_mc'>Instagram</Link>.</Lead>
            </Column>

            <Column style={{maxWidth: '100%'}}>
              <Nav short />
            </Column>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
