import React from 'react'
import styled from 'styled-components'
import theme from 'utils/theme'
import Markdown from 'components/Markdown'
import { space } from 'styled-system'
import Heading from 'components/Heading'
import { Text } from '@chasemccoy/kit'

const TimelineContainer = styled.section`
  position: relative;

  ul {
    margin: 0;

    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      width: ${theme.sizes.timeline.lineWidth};
      background: ${props=> props.theme.colors.accent.light};
      left: 50%;

      left: calc(${theme.sizes.timeline.pointWidth} / 2);
    }
  }

  ul li {
    list-style-type: none;
    position: relative;
  }

  a {
    text-decoration: underline;
  }

  ${space}
`

const TimelineListItem = styled.li`
  & + & {
    margin-top: 48px;
  }

  &:after {
    content: '';
    position: absolute;
    left: calc(50% + ${theme.sizes.timeline.lineWidth} / 2);
    top: 2px;
    transform: translateX(-50%);
    width: ${theme.sizes.timeline.pointWidth};
    height: ${theme.sizes.timeline.pointWidth};
    border-radius: 50%;
    background: ${p => p.theme.colors.page.background};
    border: ${theme.sizes.timeline.lineWidth} solid ${props => props.theme.colors.accent};
    box-shadow: 0 0 0 5px ${p => p.theme.colors.page.background};
    z-index: 1;

		left: calc(${theme.sizes.timeline.pointWidth} / 2);
		transform: translateX(-42%);
  }

  > div {
    position: relative;
    width: calc(50% - ${theme.sizes.timeline.linePadding});
    top: -6.5px;

    width: calc(100% - ${theme.sizes.timeline.linePadding});;
  }

  &:nth-child(odd) > div {
    left: calc(50% + ${theme.sizes.timeline.linePadding});

    left: ${theme.sizes.timeline.linePadding};
  }

  &:nth-child(even) > div {
    left: 0;
    text-align: right;

		left: ${theme.sizes.timeline.linePadding};
		text-align: left;
  }
`

const Meta = styled(Heading.h4)`
  text-transform: uppercase;
  letter-spacing: 1px;
`

class TimelineItem extends React.Component {
  render() {
    return (
      <TimelineListItem>
        <div>
          <Meta pt='6px' mb={4} fontFamily='mono' fontSize='14px' >
            <Text.span pr={2} color='accent'>{this.props.type}</Text.span>
            <Text.span fontWeight='normal' color='gray.3'>{this.props.dateRange}</Text.span>
          </Meta>

          <Heading.h2 mb={2}>{this.props.title}</Heading.h2>

          <Markdown mt={3}>{this.props.children}</Markdown>
        </div>
      </TimelineListItem>
    )
  }
}

class Timeline extends React.Component {
  render() {
    return (
      <TimelineContainer {...this.props}>
        <ul>{this.props.children}</ul>
      </TimelineContainer>
    )
  }
}

export { Timeline, TimelineItem }
