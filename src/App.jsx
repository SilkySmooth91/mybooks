import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import NavbarComp from './assets/Components/NavbarComp'
import FooterComp from './assets/Components/FooterComp'
import WelcomeComp from './assets/Components/WelcomeComp'
import AllTheBooksComp from './assets/Components/AllTheBooksComp';


function App() {

  return (
    <>
      <NavbarComp></NavbarComp>
      <WelcomeComp></WelcomeComp>
      <AllTheBooksComp></AllTheBooksComp>
      <FooterComp></FooterComp>
    </>
  )
}

export default App
