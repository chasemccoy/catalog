import React from 'react'
import media from 'utils/media-new'

const Marker = ({ children, ...rest }) => {
  return (
    <h2
      css={`
        display: grid;
        grid-template-columns: auto minmax(20px, 1fr);
        align-items: center;
        width: calc(100% + 16px);
        margin-right: -16px;
        font-size: 0.8rem;

        span {
          color: var(--color-body-background);
          background: var(--color-accent, var(--color-red));
          border-radius: 999px;
          padding: 2px 16px;
        }

        &:after {
          content: '';
          border-top: 2px solid var(--color-accent, var(--color-red));
        }

        ${media.tiny`
          width: 100%;
          margin-right: 0;
        `}
      `}
      {...rest}
    >
      <span>{children}</span>
    </h2>
  )
}

export default Marker