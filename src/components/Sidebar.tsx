import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const liens = [
    { path: '/dashboard', label: 'Tableau de bord' },
    { path: '/pointage', label: 'Pointage' },
    { path: '/etudiants', label: 'Étudiants' },
    { path: '/classes', label: 'Classes' },
    { path: '/rapports', label: 'Rapports' },
    { path: '/profil', label: 'Profil' },
    { path: '/parametres', label: 'Paramètres' },
  ]

  return (
    <aside className="w-56 min-h-screen bg-white border-r shadow-sm">
      <div className="p-4 border-b">
        <h2 className="font-bold text-blue-600 text-lg">Campus</h2>
      </div>
      <nav className="p-3 space-y-1">
        {liens.map((lien) => (
          <Link
            key={lien.path}
            to={lien.path}
            className={`block px-3 py-2 rounded text-sm ${
              location.pathname === lien.path
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {lien.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar