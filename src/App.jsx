import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ThemeProvider } from "./context/ThemeContext.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './assets/Pages/HomePage'
import NavbarComp from './assets/Components/NavbarComp'
import FooterComp from './assets/Components/FooterComp'
import { useState } from 'react'
import fantasyBooks from './assets/books/fantasy.json'
import historyBooks from './assets/books/history.json'
import horrorBooks from './assets/books/horror.json'
import romanceBooks from './assets/books/romance.json'
import scifiBooks from './assets/books/scifi.json'
import NotFoundPage from './assets/Pages/NotFoundPage.jsx'

function App() {
  let allBooks = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks]

  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(fantasyBooks)
  const [categoryBooks, setCategoryBooks] = useState([])
  const [currentCategory, setCurrentCategory] = useState('Fantasy')

  const handleCategoryChange = (category) => {
    setCurrentCategory(category)
    setSearch('')
    
    switch (category) {
      case 'Fantasy':
        setBooks(fantasyBooks)
        setCategoryBooks([])
        break
      case 'History':
        setCategoryBooks(historyBooks)
        setBooks([])
        break
      case 'Horror':
        setCategoryBooks(horrorBooks)
        setBooks([])
        break
      case 'Romance':
        setCategoryBooks(romanceBooks)
        setBooks([])
        break
      case 'Sci-Fi':
        setCategoryBooks(scifiBooks)
        setBooks([])
        break
      default:
        setCategoryBooks(allBooks)
        setBooks([])
    }
  }
  
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    setSearch(searchTerm)

    if (currentCategory === "Fantasy") {
      const filteredBooks = fantasyBooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm)
      )
      setBooks(filteredBooks)
    } else {
      
      let booksToFilter
      switch (currentCategory) {
        case 'History':
          booksToFilter = historyBooks
          break
        case 'Horror':
          booksToFilter = horrorBooks
          break
        case 'Romance':
          booksToFilter = romanceBooks
          break
        case 'Sci-Fi':
          booksToFilter = scifiBooks
          break
        default:
          booksToFilter = allBooks
      }
      
      const filteredBooks = booksToFilter.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
      )
      setCategoryBooks(filteredBooks)
    }
  } 

  return (
    <BrowserRouter>
      <ThemeProvider>
        <NavbarComp 
          handleSearch={handleSearch} 
          onCategoryChange={handleCategoryChange} 
        />
        <Routes>
          <Route path="/" element={<HomePage books={books} currentCategory={currentCategory} />} />
          <Route path="/category/:categoryName" element={<HomePage books={categoryBooks} currentCategory={currentCategory} />} />
          <Route path="/notfound" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
      <FooterComp />
    </BrowserRouter>
  )
}

export default App
