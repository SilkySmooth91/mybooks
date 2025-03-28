import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarComp from './assets/Components/NavbarComp'
import FooterComp from './assets/Components/FooterComp'
import WelcomeComp from './assets/Components/WelcomeComp'
import fantasyBooks from './assets/books/fantasy.json'
import { ThemeProvider } from "./context/ThemeContext.jsx"
import MainLayoutComp from './assets/Components/MainLayoutComp.jsx'

function App() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(fantasyBooks)

  const handleSearch = (event) => {
    const searchTerm = event.target.value
    setSearch(searchTerm)
    
    const filteredBooks = fantasyBooks.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setBooks(filteredBooks)
  }

  return (
    <ThemeProvider>
      <NavbarComp books={books} handleSearch={handleSearch} />
      <WelcomeComp />
      <MainLayoutComp books={books} />
      <FooterComp />
    </ThemeProvider>
  )
}

export default App
