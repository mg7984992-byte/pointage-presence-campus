function ProfilPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <h1 className="text-2xl font-bold text-orange-400 mb-6">Mon Profil</h1>

      <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 max-w-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-slate-800 border border-orange-400 flex items-center justify-center text-orange-400 font-bold text-xl">
            UN
          </div>
          <div>
            <p className="font-semibold text-lg text-slate-100">Utilisateur</p>
            <p className="text-sm text-slate-400">Étudiant</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Nom complet
            </label>
            <input
              type="text"
              defaultValue="Utilisateur Nom"
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              defaultValue="utilisateur@campus.com"
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Classe
            </label>
            <input
              type="text"
              defaultValue="L3 Info"
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2"
            />
          </div>

          <button className="w-full bg-orange-500 text-slate-950 font-medium py-2 rounded hover:bg-orange-400">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilPage