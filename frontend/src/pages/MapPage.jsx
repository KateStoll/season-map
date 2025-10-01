import pins from "../data/pins.json";

export default function MapPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Map (placeholder)</h2>
      <p className="mb-4">Leaf icons (Ginkgo pins) will appear on an actual map in a later sprint. For now, here are sample places:</p>
      <div className="grid gap-3 md:grid-cols-2">
        {pins.map(pin => (
          <div key={pin.id} className="p-4 bg-white rounded shadow-sm">
            <h3 className="font-semibold">{pin.title}</h3>
            <p className="text-sm text-gray-600">{pin.type} • {pin.notes}</p>
            <p className="text-xs mt-2 text-gray-500">Lat: {pin.lat}, Lng: {pin.lng}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
