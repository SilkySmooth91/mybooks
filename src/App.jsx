import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ThemeProvider } from "./context/ThemeContext.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './assets/Pages/HomePage'
import NavbarComp from './assets/Components/NavbarComp'
import FooterComp from './assets/Components/FooterComp'
import { useState } from 'react'
import fantasyBooks from './assets/books/fantasy.json'
import NotFoundPage from './assets/Pages/NotFoundPage.jsx'

function App() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState([])
  const handleSearch = (event) => {
      const searchTerm = event.target.value
      setSearch(searchTerm)
      
      const filteredBooks = fantasyBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setBooks(filteredBooks)
    }

  return (
    <BrowserRouter>
      <ThemeProvider>
        <NavbarComp books={books} handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage />} search={search} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
      <FooterComp />
    </BrowserRouter>
  )
}

export default App
