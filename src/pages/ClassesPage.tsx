function ClassesPage() {
  const classes = [
    { id: 1, nom: "L2 Info", nbEtudiants: 32, enseignant: "M. Sarr" },
    { id: 2, nom: "L3 Info", nbEtudiants: 28, enseignant: "Mme Diallo" },
    { id: 3, nom: "M1 Info", nbEtudiants: 20, enseignant: "M. Ba" },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">Classes</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
          + Ajouter une classe
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {classes.map((classe) => (
          <div key={classe.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">{classe.nom}</h2>
            <p className="text-sm text-gray-500 mb-1">
              {classe.nbEtudiants} étudiants
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Enseignant : {classe.enseignant}
            </p>
            <button className="text-blue-600 hover:underline text-sm">
              Voir les détails
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClassesPage