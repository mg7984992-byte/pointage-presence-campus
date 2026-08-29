function ParametresPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <h1 className="text-2xl font-bold text-orange-400 mb-6">Paramètres</h1>

      <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 max-w-lg space-y-6">
        <div>
          <h2 className="font-semibold mb-3 text-slate-100">Notifications</h2>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-300">Notifications par email</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-orange-500" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Alertes d'absence</span>
            <input type="checkbox" defaultChecked className="w-5 h-5 accent-orange-500" />
          </label>
        </div>

        <div>
          <h2 className="font-semibold mb-3 text-slate-100">Langue</h2>
          <select className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2">
            <option>Français</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <h2 className="font-semibold mb-3 text-slate-100">Sécurité</h2>
          <button className="text-orange-400 hover:underline text-sm">
            Changer le mot de passe
          </button>
        </div>

        <button className="w-full bg-orange-500 text-slate-950 font-medium py-2 rounded hover:bg-orange-400">
          Enregistrer les paramètres
        </button>
      </div>
    </div>
  )
}

export default ParametresPage