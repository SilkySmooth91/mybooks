import { describe, it } from 'vitest'
import { screen, render, fireEvent, waitFor } from '@testing-library/react'
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
    // Aggiunto timeout per aspettare il caricamento dei libri
    const books = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })
    expect(books.length).toBe(12)
  })

  it("test button load more books", async () => {
    render(<App />)
    
    // Aggiunto timeout per aspettare il caricamento dei libri
    const initialBooks = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })
    const initialCount = initialBooks.length
    
    // Test click del pulsante "Carica altri"
    const loadMoreButton = screen.getByText(/Carica altri/i)
    expect(loadMoreButton).toBeInTheDocument()
    fireEvent.click(loadMoreButton)

    
    // Test dell'incremento del numero di libri
    // waitFor aspetta il render dei nuovi libri
    await waitFor(() => {
      const updatedBooks = screen.getAllByTestId("book-card")
      expect(updatedBooks).toHaveLength(initialCount + 8)
    })
  })
})

describe("render commentArea", () => {
  it("renders the CommentArea component", () => {
    render(<App />)
    const commentArea = screen.getByText(/Seleziona un libro per visualizzare le recensioni/i)
    expect(commentArea).toBeInTheDocument()
  })

  it("renders the comment components when a book is selected", async () => {
    render(<App />)

    const bookCard = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })

    fireEvent.click(bookCard[0])

    await waitFor(() => {
      expect(screen.getByText(/Recensioni degli utenti/i)).toBeInTheDocument()
      expect(screen.getByText(/Lascia una recensione/i)).toBeInTheDocument()
      expect(screen.getByText(/Il tuo voto/i)).toBeInTheDocument()
      expect(screen.getByText(/Lascia un commento/i)).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Invia recensione/i })).toBeInTheDocument()
    })
  })
})

describe("test filtered search", () => {
  it("renders the filtered books searching sword", async () => {
    render(<App />)
    
    // caricamento iniziale dei libri
    await screen.findAllByTestId("book-card", {}, { timeout: 2000 })
    
    // Trova il campo di ricerca e simula un input
    const searchInput = screen.getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'sword' } })

    // Attende il caricamento dei libri filtrati
    await waitFor(() => {
      const filteredBooks = screen.getAllByTestId("book-card")
      
      // Controlla che i libri filtrati contengano il termine di ricerca
      filteredBooks.forEach(book => {
        expect(book.textContent.toLowerCase()).toContain('sword')
      })
      
      // Confronta il numero di libri filtrati con il numero di libri fantasy che contengono 'sword'
      const expectedCount = fantasyBooks.filter(book => 
        book.title.toLowerCase().includes('sword')
      ).length
      expect(filteredBooks).toHaveLength(expectedCount)
    })
  })

  it("renders the filtered books searching destiny", async () => {
    render(<App />)
    
    // caricamento iniziale dei libri
    await screen.findAllByTestId("book-card", {}, { timeout: 2000 })
    
    // Trova il campo di ricerca e simula un input
    const searchInput = screen.getByRole('textbox')
    fireEvent.change(searchInput, { target: { value: 'destiny' } })

    // Attende il caricamento dei libri filtrati
    await waitFor(() => {
      const filteredBooks = screen.getAllByTestId("book-card")
      
      // Controlla che i libri filtrati contengano il termine di ricerca
      filteredBooks.forEach(book => {
        expect(book.textContent.toLowerCase()).toContain('destiny')
      })
      
      // Confronta il numero di libri filtrati con il numero di libri fantasy che contengono 'sword'
      const expectedCount = fantasyBooks.filter(book => 
        book.title.toLowerCase().includes('destiny')
      ).length
      expect(filteredBooks).toHaveLength(expectedCount)
    })
  })
})

describe("test red border on selected book", () => {
  it("renders the red border on selected book", async () => {
    render(<App />)

    const bookCard = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })

    fireEvent.click(bookCard[0])
    
    await waitFor(() => {
      expect(bookCard[0]).toHaveStyle('border: 3px solid red')
    })
  })

  it("remove the border when another book is selected", async () => {
    render(<App />)

    const bookCard = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })

    fireEvent.click(bookCard[0])
    await waitFor(() => {
      expect(bookCard[0]).toHaveStyle('border: 3px solid red')
    })
    fireEvent.click(bookCard[1])

    await waitFor(() => {
      expect(bookCard[0]).not.toHaveStyle('border: 3px solid red')
      expect(bookCard[1]).toHaveStyle('border: 3px solid red')
    })
  })
})

it("test that SingleCommentComp is not rendered when no book is selected", () => {
  render(<App />)
  const commentArea = screen.getByText(/Seleziona un libro per visualizzare le recensioni/i)
  expect(commentArea).toBeInTheDocument()
  expect(screen.queryByTestId('single-comment')).not.toBeInTheDocument()
})

it("test that SingleCommentComp is rendered when a book is selected", async () => {
  render(<App/>)

  const bookCard = await screen.findAllByTestId("book-card", {}, { timeout: 2000 })

  fireEvent.click(bookCard[0])

  await waitFor(() => {
    const commentList = screen.getByTestId("comment-list")
    expect(commentList).toBeInTheDocument()
  })
})

describe("test theme switch", () => {
  it("changes theme when switch button is clicked", async () => {
    render(<App />)

    // Wait for initial render
    await screen.findAllByTestId("book-card", {}, { timeout: 2000 })
    
    // Get the theme switch button (using emoji as identifier)
    const themeButton = screen.getByRole('button', { name: /☀️/i })
    expect(themeButton).toBeInTheDocument()
    
    // Initially, the page should be in light mode
    expect(document.body.classList.contains('dark-mode')).toBe(true)
    
    // Click the theme switch
    fireEvent.click(themeButton)
    
    // Verify dark mode is active
    await waitFor(() => {
      expect(document.body.classList.contains('dark-mode')).toBe(false)
      expect(screen.getByRole('button', { name: /🌙/i })).toBeInTheDocument()
    })
    
    // Click again to switch back to light mode
    fireEvent.click(screen.getByRole('button', { name: /🌙/i }))
    
    // Verify light mode is restored
    await waitFor(() => {
      expect(document.body.classList.contains('dark-mode')).toBe(true)
      expect(screen.getByRole('button', { name: /☀️/i })).toBeInTheDocument()
    })
  })
})