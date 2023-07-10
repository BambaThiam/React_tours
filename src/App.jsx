import { useEffect, useState } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])

  // Remove by filtre
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  // fetch tours
  const fetchTours = async () => {
    // Initialiser l'état à true pour l'API
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours) // retourne data API en lieu et place tab vide (useState)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  )
}

export default App
