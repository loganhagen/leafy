import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>('Loading…')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data: { message: string }) => setMessage(data.message))
      .catch(() => setMessage('Could not reach the API'))
  }, [])

  return (
    <main className="container">
      <h1>{message}</h1>
      <p>
        This page is a React app served by Spring Boot, and the message above
        comes from <code>/api/hello</code>.
      </p>
    </main>
  )
}

export default App
