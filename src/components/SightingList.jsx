import SightingCard from './SightingCard'

function SightingList({ sightings }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sightings.map((sighting) => (
        <SightingCard key={sighting.id} sighting={sighting} />
      ))}
    </div>
  )
}

export default SightingList