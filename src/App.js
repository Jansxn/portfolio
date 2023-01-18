import React from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { Techstacks } from './components/Techstacks'
import { Experience } from './components/Experience'
import Projects from './components/Projects'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div>
      <Navbar />
    <main>
      <Intro />
      <Techstacks />
      <Experience />
      <Projects />
    </main>
    <footer>
      <Contact />
    </footer>
    </div>
  )
}