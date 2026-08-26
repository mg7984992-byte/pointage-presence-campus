import { useState } from 'react'

function EtudiantsPage() {
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: "Diop Awa", classe: "L3 Info", email: "awa.diop@campus.com" },
    { id: 2, nom: "Ndiaye Moussa", classe: "L2 Info", email: "moussa.ndiaye@campus.com" },
    { id: 3, nom: "Fall Fatou", classe: "L3 Info", email: "fatou.fall@campus.com" },
  ])

  const [showForm, setShowForm] = useState(false)
  const [nom, setNom] = useState('')
  const [classe, setClasse] = useState('')
  const [email, setEmail] = useState('')

  function handleAjouter(e: React.FormEvent) {
    e.preventDefault()
    const nouvelEtudiant = {
      id: etudiants.length + 1,
      nom,
      classe,
      email,
    }
    setEtudiants([...etudiants, nouvelEtudiant])
    setNom('')
    setClasse('')
    setEmail('')
    setShowForm(false)
  }

  function handleSupprimer(id: number) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Étudiants</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          {showForm ? 'Annuler' : '+ Ajouter un étudiant'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAjouter}
          className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Classe (ex: L3 Info)"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Enregistrer l'étudiant
          </button>
        </form>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Nom</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Classe</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((etudiant) => (
              <tr key={etudiant.id} className="border-b last:border-0">
                <td className="px-6 py-4">{etudiant.nom}</td>
                <td className="px-6 py-4">{etudiant.classe}</td>
                <td className="px-6 py-4 text-gray-600">{etudiant.email}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline text-sm mr-3">
                    Modifier
                  </button>
                  <button
                    onClick={() => handleSupprimer(etudiant.id)}
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

export default EtudiantsPage