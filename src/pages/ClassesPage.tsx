import { useState } from 'react'
import Modal from '../components/Modal'

function ClassesPage() {
  const [classes, setClasses] = useState([
    { id: 1, nom: "L2 Info", nbEtudiants: 32, enseignant: "M. Sarr" },
    { id: 2, nom: "L3 Info", nbEtudiants: 28, enseignant: "Mme Diallo" },
    { id: 3, nom: "M1 Info", nbEtudiants: 20, enseignant: "M. Ba" },
  ])

  const [showForm, setShowForm] = useState(false)
  const [nom, setNom] = useState('')
  const [enseignant, setEnseignant] = useState('')
  const [classeSelectionnee, setClasseSelectionnee] = useState<typeof classes[0] | null>(null)

  function handleAjouter(e: React.FormEvent) {
    e.preventDefault()
    const nouvelleClasse = {
      id: classes.length + 1,
      nom,
      nbEtudiants: 0,
      enseignant,
    }
    setClasses([...classes, nouvelleClasse])
    setNom('')
    setEnseignant('')
    setShowForm(false)
  }

  function handleSupprimer(id: number) {
    setClasses(classes.filter((classe) => classe.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Classes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          {showForm ? 'Annuler' : '+ Ajouter une classe'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAjouter}
          className="bg-white p-6 rounded-lg shadow mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Nom de la classe (ex: L1 Info)"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Enseignant responsable"
            value={enseignant}
            onChange={(e) => setEnseignant(e.target.value)}
            required
            className="border border-gray-300 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Enregistrer la classe
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((classe) => (
          <div key={classe.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{classe.nom}</h2>
            <p className="text-sm text-gray-500 mb-1">
              {classe.nbEtudiants} étudiants
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Enseignant : {classe.enseignant}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setClasseSelectionnee(classe)}
                className="text-blue-600 hover:underline text-sm"
              >
                Voir les détails
              </button>
              <button
                onClick={() => handleSupprimer(classe.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={classeSelectionnee !== null}
        onClose={() => setClasseSelectionnee(null)}
        title={classeSelectionnee?.nom || ''}
      >
        {classeSelectionnee && (
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Nombre d'étudiants :</strong> {classeSelectionnee.nbEtudiants}</p>
            <p><strong>Enseignant :</strong> {classeSelectionnee.enseignant}</p>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ClassesPage