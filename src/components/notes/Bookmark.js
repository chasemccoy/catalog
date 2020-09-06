import React from 'react'
import styled from 'styled-components'
import Microlink from '@microlink/react'

const StyledMicrolink = styled(Microlink)`
  &&& {
    max-width: none;
    border-color: ${(p) => p.theme.colors.gray[1]};
    color: inherit;
    margin-bottom: 1.5em;
    border-radius: 8px;

    &:hover {
      background: ${(p) => p.theme.colors.gray[0]};
      border-color: ${(p) => p.theme.colors.gray[1]};
    }

    & + & {
      margin-top: -1em;
    }
  }

  .microlink_card__content {
    padding: 8px 16px;
  }

  .microlink_card__content_title {
    flex-grow: unset;
    margin-bottom: 8px;
  }

  .microlink_card__content_description {
    line-height: inherit;
  }

  .microlink_card__content_url {
    color: ${(p) => p.theme.colors.gray[3]};
  }
`

const Bookmark = ({ media = ['image', 'logo'], ...rest }) => (
  <div>
    <StyledMicrolink media={media} {...rest} />
  </div>
)

export default Bookmark
