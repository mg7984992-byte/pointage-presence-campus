import { useState } from 'react'

function PointagePage() {
  const [etudiants, setEtudiants] = useState([
    { id: 1, nom: "Diop Awa", statut: "Présent" },
    { id: 2, nom: "Ndiaye Moussa", statut: "Absent" },
    { id: 3, nom: "Fall Fatou", statut: "Présent" },
  ])

  function toggleStatut(id: number) {
    setEtudiants(
      etudiants.map((etudiant) =>
        etudiant.id === id
          ? {
              ...etudiant,
              statut: etudiant.statut === "Présent" ? "Absent" : "Présent",
            }
          : etudiant
      )
    )
  }

  function couleurBarre(statut: string) {
    if (statut === "Présent") return "bg-green-400 w-full"
    if (statut === "Absent") return "bg-red-400 w-1/4"
    return "bg-orange-400 w-2/3"
  }

  function couleurTexte(statut: string) {
    if (statut === "Présent") return "text-green-400"
    if (statut === "Absent") return "text-red-400"
    return "text-orange-400"
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <h1 className="text-2xl font-bold text-orange-400 mb-6">
        Pointage du jour
      </h1>

      <div className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden max-w-xl">
        <div className="divide-y divide-slate-700">
          {etudiants.map((etudiant) => (
            <div
              key={etudiant.id}
              className="flex items-center justify-between px-6 py-4"
            >
              <span className="text-slate-200">{etudiant.nom}</span>

              <div className="flex items-center gap-4 flex-1 max-w-xs mx-6">
                <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${couleurBarre(etudiant.statut)}`} />
                </div>
              </div>

              <button
                onClick={() => toggleStatut(etudiant.id)}
                className={`text-sm font-medium ${couleurTexte(etudiant.statut)}`}
              >
                {etudiant.statut.toLowerCase()}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PointagePage