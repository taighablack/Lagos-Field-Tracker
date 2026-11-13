function SightingCard({ sighting }) {
  return (
    <div className="rounded-lg shadow p-4 bg-white">
      <h2 className="text-lg font-semibold">{sighting.species}</h2>
      <p className="text-sm text-gray-600">Date: {sighting.date}</p>
      <p className="text-sm text-gray-600">Location: {sighting.location}</p>
      <p className="text-sm text-gray-600">Observer: {sighting.observer}</p>
      <p className="mt-2">{sighting.notes}</p>
    </div>
  )
}

export default SightingCard