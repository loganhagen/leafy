import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('shows the message returned by the API', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ message: 'Hello from Leafy' }),
        } as Response),
      ),
    )

    render(<App />)

    expect(screen.getByText('Loading…')).toBeInTheDocument()
    await waitFor(() => expect(screen.getByText('Hello from Leafy')).toBeInTheDocument())
  })

  it('shows a fallback message when the API call fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(() => Promise.reject(new Error('network error'))),
    )

    render(<App />)

    await waitFor(() => expect(screen.getByText('Could not reach the API')).toBeInTheDocument())
  })
})
