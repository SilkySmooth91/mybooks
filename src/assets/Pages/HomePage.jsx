import React, { useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'
import WelcomeComp from '../Components/WelcomeComp'
import MainLayoutComp from '../Components/MainLayoutComp'

export default function HomePage({ books, currentCategory }) {
  const { isDarkMode } = useTheme()

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <WelcomeComp />
      <MainLayoutComp books={books} currentCategory={currentCategory} />
    </div>
  )
}
