function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barre de navigation */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          Pointage Présence Campus
        </h1>
        <span className="text-sm text-gray-600">Bonjour, Utilisateur</span>
      </header>

      {/* Contenu principal */}
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Tableau de bord</h2>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Présents aujourd'hui</p>
            <p className="text-3xl font-bold text-green-600">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Absents aujourd'hui</p>
            <p className="text-3xl font-bold text-red-600">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">Total étudiants</p>
            <p className="text-3xl font-bold text-blue-600">0</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage