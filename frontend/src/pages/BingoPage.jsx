export default function BingoPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bingo (placeholder)</h2>
      <p className="mb-4">Interactive bingo comes next — for now, this page will house your 5×5 grid concept and icon art.</p>
      <div className="grid grid-cols-5 gap-2">
        {Array.from({length: 25}).map((_, i) => (
          <div key={i} className="h-20 bg-white rounded border flex items-center justify-center text-sm">{`Square ${i+1}`}</div>
        ))}
      </div>
    </div>
  );
}
