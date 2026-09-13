import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState([])
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data) => setTechnologies(data))
      .catch(() => toast.error('Could not load technology data.'))
      .finally(() => setLoading(false))
  }, [])

  const handleAdd = (technology) => {
    const alreadyAdded = selected.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelected([...selected, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const handleRemove = (id) => {
    const item = selected.find((technology) => technology.id === id)
    setSelected(selected.filter((technology) => technology.id !== id))
    if (item) toast.info(`${item.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    if (selected.length === 0) {
      toast.warning('Your stack is already empty.')
      return
    }
    setSelected([])
    toast.info('All technologies were removed.')
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies
          technologies={technologies}
          loading={loading}
          selected={selected}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
