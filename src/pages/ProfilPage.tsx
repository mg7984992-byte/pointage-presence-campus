function ProfilPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Mon Profil</h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
            UN
          </div>
          <div>
            <p className="font-semibold text-lg">Utilisateur</p>
            <p className="text-sm text-gray-500">Étudiant</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              defaultValue="Utilisateur Nom"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              defaultValue="utilisateur@campus.com"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Classe
            </label>
            <input
              type="text"
              defaultValue="L3 Info"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilPage