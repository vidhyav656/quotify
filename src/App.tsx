import { useState } from 'react'
import QuoteGenerator from './components/QuoteGenerator'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  return (
    <main className="min-h-screen bg-gray-50">
      <QuoteGenerator />
    </main>
  )
}

export default App