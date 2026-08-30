import { useState } from 'react'

function RapportsPage() {
  const [rapports, setRapports] = useState([
    { id: 1, classe: "L2 Info", periode: "Semaine du 18-22 août", tauxPresence: 92 },
    { id: 2, classe: "L3 Info", periode: "Semaine du 18-22 août", tauxPresence: 87 },
    { id: 3, classe: "M1 Info", periode: "Semaine du 18-22 août", tauxPresence: 95 },
  ])

  const [showForm, setShowForm] = useState(false)
  const [classe, setClasse] = useState('')
  const [periode, setPeriode] = useState('')
  const [tauxPresence, setTauxPresence] = useState('')
  const [idEnEdition, setIdEnEdition] = useState<number | null>(null)
  const [editClasse, setEditClasse] = useState('')
  const [editPeriode, setEditPeriode] = useState('')
  const [editTaux, setEditTaux] = useState('')

  function handleAjouter(e: React.FormEvent) {
    e.preventDefault()
    const nouveauRapport = {
      id: rapports.length + 1,
      classe,
      periode,
      tauxPresence: Number(tauxPresence),
    }
    setRapports([...rapports, nouveauRapport])
    setClasse('')
    setPeriode('')
    setTauxPresence('')
    setShowForm(false)
  }

  function handleSupprimer(id: number) {
    setRapports(rapports.filter((rapport) => rapport.id !== id))
  }

  function commencerEdition(rapport: typeof rapports[0]) {
    setIdEnEdition(rapport.id)
    setEditClasse(rapport.classe)
    setEditPeriode(rapport.periode)
    setEditTaux(String(rapport.tauxPresence))
  }

  function enregistrerEdition(id: number) {
    setRapports(
      rapports.map((rapport) =>
        rapport.id === id
          ? { ...rapport, classe: editClasse, periode: editPeriode, tauxPresence: Number(editTaux) }
          : rapport
      )
    )
    setIdEnEdition(null)
  }

  function couleurTaux(taux: number) {
    if (taux >= 90) return "text-green-400"
    if (taux >= 75) return "text-orange-400"
    return "text-red-400"
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-orange-400">Rapports</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-orange-500 text-slate-950 font-medium px-4 py-2 rounded hover:bg-orange-400 text-sm"
          >
            {showForm ? 'Annuler' : '+ Ajouter un rapport'}
          </button>
          <button className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded hover:bg-slate-700 text-sm">
            Exporter en PDF
          </button>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={handleAjouter}
          className="bg-slate-900 border border-slate-700 p-6 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Classe (ex: L1 Info)"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Période (ex: Semaine du 25-29 août)"
            value={periode}
            onChange={(e) => setPeriode(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="Taux de présence (%)"
            value={tauxPresence}
            onChange={(e) => setTauxPresence(e.target.value)}
            min="0"
            max="100"
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-green-500 text-slate-950 font-medium py-2 rounded hover:bg-green-400"
          >
            Enregistrer le rapport
          </button>
        </form>
      )}

      <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Classe</th>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Période</th>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Taux de présence</th>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {rapports.map((rapport) =>
              idEnEdition === rapport.id ? (
                <tr key={rapport.id} className="bg-slate-800">
                  <td className="px-6 py-3">
                    <input
                      value={editClasse}
                      onChange={(e) => setEditClasse(e.target.value)}
                      className="bg-slate-700 border border-slate-600 text-slate-200 rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      value={editPeriode}
                      onChange={(e) => setEditPeriode(e.target.value)}
                      className="bg-slate-700 border border-slate-600 text-slate-200 rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      type="number"
                      value={editTaux}
                      onChange={(e) => setEditTaux(e.target.value)}
                      className="bg-slate-700 border border-slate-600 text-slate-200 rounded px-2 py-1 w-20"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => enregistrerEdition(rapport.id)}
                      className="text-green-400 hover:underline text-sm mr-3"
                    >
                      Enregistrer
                    </button>
                    <button
                      onClick={() => setIdEnEdition(null)}
                      className="text-slate-400 hover:underline text-sm"
                    >
                      Annuler
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={rapport.id}>
                  <td className="px-6 py-4 text-slate-200">{rapport.classe}</td>
                  <td className="px-6 py-4 text-slate-400">{rapport.periode}</td>
                  <td className={`px-6 py-4 font-semibold ${couleurTaux(rapport.tauxPresence)}`}>
                    {rapport.tauxPresence}%
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => commencerEdition(rapport)}
                      className="text-orange-400 hover:underline text-sm mr-3"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleSupprimer(rapport.id)}
                      className="text-red-400 hover:underline text-sm"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RapportsPage