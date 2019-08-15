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
  isLoading = false,
  title = '',
  url = '',
  body = '',
  slug = '',
  username = '',
  token = '',
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
            <label htmlFor='sharing-title'>Title</label>
            <input
              type='text'
              id='sharing-title'
              name='title'
              value={title}
              onChange={onUpdate}
            />
          </li>
          <li>
            <label htmlFor='sharing-url'>URL</label>
            <input
              type='url'
              id='sharing-url'
              name='url'
              value={url}
              onChange={onUpdate}
              required
            />
          </li>
          <li>
            <label htmlFor='sharing-body'>Content</label>
            <textarea
              id='sharing-body'
              name='body'
              rows='8'
              value={body}
              onChange={onUpdate}
            />
          </li>
          <li>
            <label htmlFor='sharing-slug'>Slug</label>
            <input
              type='text'
              id='sharing-slug'
              name='slug'
              value={slug}
              onChange={onUpdate}
              required
            />
          </li>
        </UnorderedList>

        <details>
          <summary>⚙️ Config</summary>

          <UnorderedList unstyled mt={16}>
            <li>
              <label htmlFor='sharing-username'>User Name</label>
              <input
                type='text'
                id='sharing-username'
                name='username'
                autoComplete='username'
                value={username}
                onChange={onUpdate}
                required
              />
            </li>
            <li>
              <label htmlFor='sharing-token'>Access Token</label>
              <input
                type='password'
                id='sharing-token'
                name='token'
                autoComplete='current-password'
                value={token}
                onChange={onUpdate}
                required
              />
            </li>
          </UnorderedList>
        </details>

        <div style={{ visibility: 'hidden' }} aria-hidden='true'>
          <label className='form__label' htmlFor='sharing-hp'>
            Don’t fill this out if you're human:
          </label>
          <input
            type='text'
            name='_honeyp0t'
            id='sharing-hp'
            tabIndex='-1'
            defaultValue=''
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
