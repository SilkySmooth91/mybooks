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

describe("render books", () => {
  it("renders the correct number of books", async () => {
    render(<App />)
    // Add a longer timeout since we're waiting for async operations
    const books = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })
    expect(books.length).toBe(12)
  })
})