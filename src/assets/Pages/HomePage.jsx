import React, { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import WelcomeComp from '../Components/WelcomeComp'
import MainLayoutComp from '../Components/MainLayoutComp'
import fantasyBooks from '../books/fantasy.json'

export default function HomePage({search}) {
  const [books, setBooks] = useState(fantasyBooks)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      
      <WelcomeComp />
      <MainLayoutComp books={books} search={search} />
      
    </div>
  )
}
