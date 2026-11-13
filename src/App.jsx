import Navbar from './components/Navbar'
import SightingList from './components/SightingList'
import sightings from './data/sightings'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="p-4">
        <SightingList sightings={sightings} />
      </main>
    </div>
  )
}

export default App