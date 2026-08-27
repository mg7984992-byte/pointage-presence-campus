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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Rapports</h1>
        <div className="flex gap-2">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            {showForm ? 'Annuler' : '+ Ajouter un rapport'}
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 text-sm">
            Exporter en PDF
          </button>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={handleAjouter}
          className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Classe (ex: L1 Info)"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Période (ex: Semaine du 25-29 août)"
            value={periode}
            onChange={(e) => setPeriode(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="Taux de présence (%)"
            value={tauxPresence}
            onChange={(e) => setTauxPresence(e.target.value)}
            min="0"
            max="100"
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Enregistrer le rapport
          </button>
        </form>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Classe</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Période</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Taux de présence</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {rapports.map((rapport) => (
              <tr key={rapport.id} className="border-b last:border-0">
                <td className="px-6 py-4">{rapport.classe}</td>
                <td className="px-6 py-4 text-gray-600">{rapport.periode}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    rapport.tauxPresence >= 90
                      ? "text-green-600"
                      : rapport.tauxPresence >= 75
                      ? "text-orange-500"
                      : "text-red-600"
                  }`}
                >
                  {rapport.tauxPresence}%
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline text-sm mr-3">
                    Voir détails
                  </button>
                  <button
                    onClick={() => handleSupprimer(rapport.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RapportsPage