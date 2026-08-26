function PointagePage() {
  const etudiants = [
    { id: 1, nom: "Diop Awa", statut: "Présent" },
    { id: 2, nom: "Ndiaye Moussa", statut: "Absent" },
    { id: 3, nom: "Fall Fatou", statut: "Présent" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">
        Pointage du jour
      </h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Nom</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Statut</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {etudiants.map((etudiant) => (
              <tr key={etudiant.id} className="border-b last:border-0">
                <td className="px-6 py-4">{etudiant.nom}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      etudiant.statut === "Présent"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {etudiant.statut}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PointagePage