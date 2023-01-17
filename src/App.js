import React from 'react'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import { Techstacks } from './components/Techstacks'
import { Experience } from './components/Experience'
import Projects from './components/Projects'

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
    </div>
  )
}