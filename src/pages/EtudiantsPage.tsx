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
  const [recherche, setRecherche] = useState('')
  const [idEnEdition, setIdEnEdition] = useState<number | null>(null)
  const [editNom, setEditNom] = useState('')
  const [editClasse, setEditClasse] = useState('')
  const [editEmail, setEditEmail] = useState('')

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.nom.toLowerCase().includes(recherche.toLowerCase())
  )

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

  function commencerEdition(etudiant: typeof etudiants[0]) {
    setIdEnEdition(etudiant.id)
    setEditNom(etudiant.nom)
    setEditClasse(etudiant.classe)
    setEditEmail(etudiant.email)
  }

  function annulerEdition() {
    setIdEnEdition(null)
  }

  function enregistrerEdition(id: number) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id
          ? { ...etudiant, nom: editNom, classe: editClasse, email: editEmail }
          : etudiant
      )
    )
    setIdEnEdition(null)
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-orange-400">Étudiants</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 text-slate-950 font-medium px-4 py-2 rounded hover:bg-orange-400 text-sm"
        >
          {showForm ? 'Annuler' : '+ Ajouter un étudiant'}
        </button>
      </div>

      <input
        type="text"
        placeholder="Rechercher un étudiant..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        className="bg-slate-900 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2 mb-4 w-full md:w-64"
      />

      {showForm && (
        <form
          onSubmit={handleAjouter}
          className="bg-slate-900 border border-slate-700 p-6 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <input
            type="text"
            placeholder="Nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Classe (ex: L3 Info)"
            value={classe}
            onChange={(e) => setClasse(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-3 bg-green-500 text-slate-950 font-medium py-2 rounded hover:bg-green-400"
          >
            Enregistrer l'étudiant
          </button>
        </form>
      )}

      <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-800 border-b border-slate-700">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Nom</th>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Classe</th>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Email</th>
              <th className="px-6 py-3 text-sm font-medium text-slate-400">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700">
            {etudiantsFiltres.map((etudiant) =>
              idEnEdition === etudiant.id ? (
                <tr key={etudiant.id} className="bg-slate-800">
                  <td className="px-6 py-3">
                    <input
                      value={editNom}
                      onChange={(e) => setEditNom(e.target.value)}
                      className="bg-slate-700 border border-slate-600 text-slate-200 rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      value={editClasse}
                      onChange={(e) => setEditClasse(e.target.value)}
                      className="bg-slate-700 border border-slate-600 text-slate-200 rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <input
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      className="bg-slate-700 border border-slate-600 text-slate-200 rounded px-2 py-1 w-full"
                    />
                  </td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => enregistrerEdition(etudiant.id)}
                      className="text-green-400 hover:underline text-sm mr-3"
                    >
                      Enregistrer
                    </button>
                    <button
                      onClick={annulerEdition}
                      className="text-slate-400 hover:underline text-sm"
                    >
                      Annuler
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={etudiant.id}>
                  <td className="px-6 py-4 text-slate-200">{etudiant.nom}</td>
                  <td className="px-6 py-4 text-slate-300">{etudiant.classe}</td>
                  <td className="px-6 py-4 text-slate-400">{etudiant.email}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => commencerEdition(etudiant)}
                      className="text-orange-400 hover:underline text-sm mr-3"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleSupprimer(etudiant.id)}
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

export default EtudiantsPage