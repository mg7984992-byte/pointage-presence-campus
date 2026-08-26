function RapportsPage() {
  const rapports = [
    { id: 1, classe: "L2 Info", periode: "Semaine du 18-22 août", tauxPresence: "92%" },
    { id: 2, classe: "L3 Info", periode: "Semaine du 18-22 août", tauxPresence: "87%" },
    { id: 3, classe: "M1 Info", periode: "Semaine du 18-22 août", tauxPresence: "95%" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Rapports</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
          Exporter en PDF
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Classe</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Période</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Taux de présence</th>
              <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {rapports.map((rapport) => (
              <tr key={rapport.id} className="border-b last:border-0">
                <td className="px-6 py-4">{rapport.classe}</td>
                <td className="px-6 py-4 text-gray-600">{rapport.periode}</td>
                <td className="px-6 py-4 font-semibold text-green-600">
                  {rapport.tauxPresence}
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline text-sm">
                    Voir détails
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

export default RapportsPage