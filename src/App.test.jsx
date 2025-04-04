import { describe, it } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from './App'
import fantasyBooks from './assets/books/fantasy.json'


describe('rendering test', () => {
  it('renders the Welcome component', () => {
    render(<App />)
    const title = screen.getByText(/Welcome to MyBooks!/i)
    expect(title).toBeInTheDocument()
  })
})