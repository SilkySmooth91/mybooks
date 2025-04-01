import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ThemeProvider } from "./context/ThemeContext.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './assets/Pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
