import React from 'react'
import styled from 'styled-components'
import theme from 'utils/theme'
import Markdown from 'components/Markdown'

const TimelineContainer = styled.section`
  position: relative;
  margin: 56px 0;

  ul {
    margin: 0;

    &:after {
      position: absolute;
      content: '';
      top: 0;
      bottom: 0;
      width: ${theme.sizes.timeline.lineWidth};
      background: ${props=> props.theme.colors.gray[2]};
      left: 50%;

      left: calc(${theme.sizes.timeline.pointWidth} / 2);
    }
  }

  ul li {
    list-style-type: none;
    position: relative;
  }
`

const TimelineListItem = styled.li`
  & + & {
    margin-top: 48px;
  }

  &:after {
    content: '';
    position: absolute;
    left: calc(50% + ${theme.sizes.timeline.lineWidth} / 2);
    top: 0;
    transform: translateX(-50%);
    width: ${theme.sizes.timeline.pointWidth};
    height: ${theme.sizes.timeline.pointWidth};
    border-radius: 50%;
    background: white;
    border: ${theme.sizes.timeline.lineWidth} solid ${props => props.theme.colors.gray[2]};
    box-shadow: 0 0 0 5px white;
    z-index: 1;

		left: calc(${theme.sizes.timeline.pointWidth} / 2);
		transform: translateX(-42%);
  }

  > div {
    position: relative;
    width: calc(50% - ${theme.sizes.timeline.linePadding});
    top: -5px;

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

  .header {
    margin-bottom: 8px;
  }

  .title {
    margin-bottom: 16px;
  }

  span.type {
    padding-right: 8px;
  }

  span.date {
    font-weight: normal;
    color: ${props => props.theme.colors.gray[3]};
  }
`

class TimelineItem extends React.Component {
  render() {
    return (
      <TimelineListItem>
        <div>
          <h4 className="header">
            <span className="type">{this.props.type}</span>
            <span className="date">{this.props.dateRange}</span>
          </h4>

          <h2 className="title">{this.props.title}</h2>

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
