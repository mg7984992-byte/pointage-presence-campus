import { useState, useEffect } from 'react'

function DashboardPage() {
  const [secondes, setSecondes] = useState(3600) // 1h de départ, exemple

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondes((s) => (s > 0 ? s - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  function formatTemps(s: number) {
    const h = Math.floor(s / 3600)
    const m = Math.floor((s % 3600) / 60)
    const sec = s % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`
  }

  const session = [
    { id: 1, nom: "Maguette", statut: "Présent" },
    { id: 2, nom: "Hassanatou", statut: "Présent" },
    { id: 3, nom: "Thierno", statut: "Retard" },
  ]

  function couleurBarre(statut: string) {
    if (statut === "Présent") return "bg-green-400 w-full"
    if (statut === "Retard") return "bg-orange-400 w-2/3"
    return "bg-red-400 w-1/4"
  }

  function couleurTexte(statut: string) {
    if (statut === "Présent") return "text-green-400"
    if (statut === "Retard") return "text-orange-400"
    return "text-red-400"
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="bg-slate-900 border-b border-slate-700 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-400">
          Pointage Présence Campus
        </h1>
        <span className="text-sm text-slate-300">Bonjour, Utilisateur</span>
      </header>

      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-white">Tableau de bord</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
            <p className="text-sm text-slate-400">Présents aujourd'hui</p>
            <p className="text-3xl font-bold text-green-400">0</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
            <p className="text-sm text-slate-400">Absents aujourd'hui</p>
            <p className="text-3xl font-bold text-red-400">0</p>
          </div>
          <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg">
            <p className="text-sm text-slate-400">Total étudiants</p>
            <p className="text-3xl font-bold text-blue-400">0</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 max-w-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-100">Session — Sprint UI</h3>
            <span className="text-orange-400 font-mono text-sm">
              {formatTemps(secondes)}
            </span>
          </div>

          <div className="divide-y divide-slate-700">
            {session.map((personne) => (
              <div key={personne.id} className="flex items-center justify-between py-3">
                <span className="text-slate-200 text-sm">{personne.nom}</span>
                <div className="flex items-center gap-4 flex-1 max-w-[140px] mx-4">
                  <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${couleurBarre(personne.statut)}`} />
                  </div>
                </div>
                <span className={`text-xs font-medium ${couleurTexte(personne.statut)}`}>
                  {personne.statut.toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage