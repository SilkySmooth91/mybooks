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
        <h1>
          <span className={`fs-5 ${isDarkMode ? 'text-white' : 'text-dark'}`}> Pagina non trovata. La risorsa potrebbe essere stata rimossa o spostata. Assicurati di essere connesso a internet e che l'indirizzo digitato sia corretto.</span>
        </h1>
      </Container>
      <Container className='d-flex justify-content-center align-items-center mx-auto'>
        <Image src="src/assets/IMGS/not_found_2-removebg-preview.png" rounded className='notfound-dino'/>
      </Container>
    </div>
  )
}
