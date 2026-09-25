import { useState } from 'react'

const types = [
  { name: 'Fire', color: 'bg-orange-500', emoji: '🔥' },
  { name: 'Water', color: 'bg-sky-500', emoji: '💧' },
  { name: 'Grass', color: 'bg-emerald-500', emoji: '🌿' },
  { name: 'Ground', color: 'bg-amber-600', emoji: '⛰️' },
]

function App() {
  const [selectedType, setSelectedType] = useState('')
  
  function getMatchup(type) {
  // API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setResult(response);
}

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <section className="w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-slate-200 px-7 py-5">
          <span className="relative grid size-9 place-items-center rounded-full border-4 border-slate-800 bg-poke-red before:absolute before:h-1 before:w-9 before:bg-slate-800 after:size-3 after:rounded-full after:border-2 after:border-slate-800 after:bg-white" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-poke-red">Battle helper</p>
            <h1 className="text-lg font-bold text-slate-900">Pokémon Battle Assistant</h1>
          </div>
        </div>

        <div className="p-7">
          <p className="text-lg font-semibold text-slate-900">What type are you fighting?</p>
          <p className="mt-1 text-sm text-slate-500">Choose the opposing Pokémon's primary type.</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {types.map((type) => (
              <button
                key={type.name}
                type="button"
                onClick={() => handleTypeClick(type.name)}
                className="group flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-left font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-poke-blue focus:ring-offset-2"
              >
                <span className={`grid size-9 place-items-center rounded-xl ${type.color} text-lg`}>{type.emoji}</span>
                {type.name}
              </button>
            ))}
          </div>

          {selectedType && (
            <p className="mt-5 text-center text-sm font-medium text-slate-700">
              You selected: {selectedType}
            </p>
          )}

          <div className="mt-7 flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3 text-sm text-poke-blue">
            <span className="font-bold">Tip:</span> Match your move to the type advantage.
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
