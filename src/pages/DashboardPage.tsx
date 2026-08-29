function DashboardPage() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </main>
    </div>
  )
}

export default DashboardPage