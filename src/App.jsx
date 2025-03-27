import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import NavbarComp from './assets/Components/NavbarComp'
import FooterComp from './assets/Components/FooterComp'
import WelcomeComp from './assets/Components/WelcomeComp'
import AllTheBooksComp from './assets/Components/AllTheBooksComp';
import fantasyBooks from './assets/books/fantasy.json'
import { ThemeProvider } from "./context/ThemeContext.jsx"



function App() {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState(fantasyBooks)

  const handleSearch = (event) => {
    setSearch(event.target.value);
    console.log(search)
    const filteredBooks = fantasyBooks.filter((book) => {
      return book.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setBooks(filteredBooks);
  }

  return (
      <ThemeProvider>
        <NavbarComp books={books} handleSearch={handleSearch}></NavbarComp>
        <WelcomeComp />
        <AllTheBooksComp books={books} handleSearch={handleSearch} />
        <FooterComp />
      </ThemeProvider>
  )
}

export default App
