import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Button } from '@chasemccoy/kit'
import { UnorderedList } from 'components/Lists'

const Form = styled.form`
  input,
  textarea {
    width: 100%;
    border: 2px solid ${p => p.theme.colors.gray[1]};
    padding: 4px 8px;
    border-radius: 4px;
    resize: vertical;
    appearance: none;

    &:focus {
      outline: none;
      border-color: ${p => p.theme.colors.accent.pop};
    }
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 4px;
  }

  ul li + li {
    margin-top: 24px;
  }

  details {
    margin-top: 32px;
  }

  ${Button} {
    background: ${p => p.theme.colors.accent.pop};
    color: black;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.2s;

    &:hover {
      background: ${p => p.theme.colors.accent.medium};
    }
  }
`

const SharingForm = ({
  isLoading,
  title,
  url,
  body,
  slug,
  username,
  token,
  onUpdate,
  onSubmit,
  ...rest
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <Form onSubmit={handleSubmit} accept-charset='UTF-8'>
      <div>
        <UnorderedList unstyled>
          <li>
            <label for='sharing-title'>Title</label>
            <input
              type='text'
              id='sharing-title'
              name='title'
              value={title}
              onInput={onUpdate}
            />
          </li>
          <li>
            <label for='sharing-url'>URL</label>
            <input
              type='url'
              id='sharing-url'
              name='url'
              value={url}
              onInput={onUpdate}
              required
            />
          </li>
          <li>
            <label for='sharing-body'>Content</label>
            <textarea
              id='sharing-body'
              maxlength='300'
              name='body'
              rows='10'
              value={body}
              onInput={onUpdate}
            />
          </li>
          <li>
            <label for='sharing-slug'>Slug</label>
            <input
              type='text'
              id='sharing-slug'
              name='slug'
              value={slug}
              onInput={onUpdate}
              required
            />
          </li>
        </UnorderedList>

        <details>
          <summary>⚙️ Config</summary>

          <UnorderedList unstyled mt={16}>
            <li>
              <label for='sharing-username'>User Name</label>
              <input
                type='text'
                id='sharing-username'
                name='username'
                autoComplete='username'
                value={username}
                onInput={onUpdate}
              />
            </li>
            <li>
              <label for='sharing-token'>Access Token</label>
              <input
                type='password'
                id='sharing-token'
                name='token'
                autoComplete='current-password'
                value={token}
                onInput={onUpdate}
              />
            </li>
          </UnorderedList>
        </details>

        <div style={{ visibility: 'hidden' }} aria-hidden='true'>
          <label className='form__label' for='sharing-hp'>
            Don’t fill this out if you're human:
          </label>
          <input
            type='text'
            name='_honeyp0t'
            id='sharing-hp'
            tabindex='-1'
            value=''
          />
        </div>
      </div>

      <div>
        {isLoading ? (
          <Text fontWeight='bold'>Loading...</Text>
        ) : (
          <Button type='submit'>Publish Note</Button>
        )}
      </div>
    </Form>
  )
}

export default SharingForm
