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
  const [modeEdition, setModeEdition] = useState(false)
  const [editNom, setEditNom] = useState('')
  const [editEnseignant, setEditEnseignant] = useState('')

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

  function ouvrirDetails(classe: typeof classes[0]) {
    setClasseSelectionnee(classe)
    setModeEdition(false)
  }

  function commencerEdition() {
    if (!classeSelectionnee) return
    setEditNom(classeSelectionnee.nom)
    setEditEnseignant(classeSelectionnee.enseignant)
    setModeEdition(true)
  }

  function enregistrerEdition() {
    if (!classeSelectionnee) return
    setClasses(
      classes.map((classe) =>
        classe.id === classeSelectionnee.id
          ? { ...classe, nom: editNom, enseignant: editEnseignant }
          : classe
      )
    )
    setClasseSelectionnee({ ...classeSelectionnee, nom: editNom, enseignant: editEnseignant })
    setModeEdition(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-orange-400">Classes</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-orange-500 text-slate-950 font-medium px-4 py-2 rounded hover:bg-orange-400 text-sm"
        >
          {showForm ? 'Annuler' : '+ Ajouter une classe'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAjouter}
          className="bg-slate-900 border border-slate-700 p-6 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            placeholder="Nom de la classe (ex: L1 Info)"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Enseignant responsable"
            value={enseignant}
            onChange={(e) => setEnseignant(e.target.value)}
            required
            className="bg-slate-800 border border-slate-700 text-slate-200 placeholder-slate-500 rounded px-3 py-2"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-green-500 text-slate-950 font-medium py-2 rounded hover:bg-green-400"
          >
            Enregistrer la classe
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((classe) => (
          <div key={classe.id} className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-2 text-slate-100">{classe.nom}</h2>
            <p className="text-sm text-slate-400 mb-1">
              {classe.nbEtudiants} étudiants
            </p>
            <p className="text-sm text-slate-400 mb-4">
              Enseignant : {classe.enseignant}
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => ouvrirDetails(classe)}
                className="text-orange-400 hover:underline text-sm"
              >
                Voir les détails
              </button>
              <button
                onClick={() => handleSupprimer(classe.id)}
                className="text-red-400 hover:underline text-sm"
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
        {classeSelectionnee && !modeEdition && (
          <div className="space-y-3 text-sm text-slate-300">
            <p><strong className="text-slate-100">Nombre d'étudiants :</strong> {classeSelectionnee.nbEtudiants}</p>
            <p><strong className="text-slate-100">Enseignant :</strong> {classeSelectionnee.enseignant}</p>
            <button
              onClick={commencerEdition}
              className="mt-2 text-orange-400 hover:underline text-sm"
            >
              Modifier
            </button>
          </div>
        )}

        {classeSelectionnee && modeEdition && (
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Nom de la classe</label>
              <input
                value={editNom}
                onChange={(e) => setEditNom(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Enseignant</label>
              <input
                value={editEnseignant}
                onChange={(e) => setEditEnseignant(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={enregistrerEdition}
                className="text-green-400 hover:underline text-sm"
              >
                Enregistrer
              </button>
              <button
                onClick={() => setModeEdition(false)}
                className="text-slate-400 hover:underline text-sm"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default ClassesPage