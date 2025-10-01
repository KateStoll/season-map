import events from "../data/events.json";

export default function EventsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Events</h2>
      <ul className="space-y-3">
        {events.map(ev => (
          <li key={ev.id} className="p-4 bg-white rounded shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{ev.title}</h3>
                <p className="text-sm text-gray-600">{ev.date} • {ev.location}</p>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">{ev.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
