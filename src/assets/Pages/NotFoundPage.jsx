import React, { useEffect } from 'react'
import { Container, Image } from 'react-bootstrap'
import { useTheme } from '../../context/ThemeContext'

export default function NotFoundPage() {
  const { isDarkMode } = useTheme()

  useEffect(() => {
      document.body.classList.toggle('dark-mode', isDarkMode)
    }, [isDarkMode])

  return (
    <div className={`page-container ${isDarkMode ? 'dark-mode' : ''} vh-100`}>
      <Container>
        <h1 className="display-1">
          <span className="text-danger">404</span>
          <span className={`fs-5 ${isDarkMode ? 'text-white' : 'text-dark'}`}> Page not found</span>
        </h1>
      </Container>
      <Container className='d-flex justify-content-center align-items-center mx-auto'>
        <Image src="src/assets/IMGS/ChatGPT Image 3 apr 2025, 21_21_07.png" rounded className='notfound-dino'/>
      </Container>
    </div>
  )
}
