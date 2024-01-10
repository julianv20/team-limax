import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Works } from './components/Works'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <About />
        <Works />
        <Contact />
      </main>
    </>
  )
}

export default App
