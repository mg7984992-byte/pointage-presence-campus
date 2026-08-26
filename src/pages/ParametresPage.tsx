function ParametresPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Paramètres</h1>

      <div className="bg-white rounded-lg shadow p-6 max-w-lg space-y-6">
        <div>
          <h2 className="font-semibold mb-3">Notifications</h2>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-700">Notifications par email</span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Alertes d'absence</span>
            <input type="checkbox" defaultChecked className="w-5 h-5" />
          </label>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Langue</h2>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Français</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <h2 className="font-semibold mb-3">Sécurité</h2>
          <button className="text-blue-600 hover:underline text-sm">
            Changer le mot de passe
          </button>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Enregistrer les paramètres
        </button>
      </div>
    </div>
  )
}

export default ParametresPage