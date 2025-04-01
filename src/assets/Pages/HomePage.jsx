import React, { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import NavbarComp from '../Components/NavbarComp'
import FooterComp from '../Components/FooterComp'
import WelcomeComp from '../Components/WelcomeComp'
import MainLayoutComp from '../Components/MainLayoutComp'
import fantasyBooks from '../books/fantasy.json'

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(fantasyBooks)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  const handleSearch = (event) => {
    const searchTerm = event.target.value
    setSearch(searchTerm)
    
    const filteredBooks = fantasyBooks.filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setBooks(filteredBooks)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <NavbarComp books={books} handleSearch={handleSearch} />
      <WelcomeComp />
      <MainLayoutComp books={books} />
      <FooterComp />
    </div>
  )
}
