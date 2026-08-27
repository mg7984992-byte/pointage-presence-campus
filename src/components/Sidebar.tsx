import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const liens = [
    { path: '/dashboard', label: 'Tableau de bord' },
    { path: '/pointage', label: 'Pointage' },
    { path: '/etudiants', label: 'Étudiants' },
    { path: '/classes', label: 'Classes' },
    { path: '/rapports', label: 'Rapports' },
    { path: '/profil', label: 'Profil' },
    { path: '/parametres', label: 'Paramètres' },
  ]

  function handleDeconnexion() {
    navigate('/')
  }

  return (
    <>
      {/* Bouton menu mobile */}
      <div className="md:hidden flex items-center justify-between bg-white border-b p-4">
        <h2 className="font-bold text-blue-600 text-lg">Campus</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 border rounded px-3 py-1"
        >
          {isOpen ? 'Fermer' : 'Menu'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-full md:w-56 md:min-h-screen bg-white border-r shadow-sm flex flex-col justify-between`}
      >
        <div>
          <div className="hidden md:block p-4 border-b">
            <h2 className="font-bold text-blue-600 text-lg">Campus</h2>
          </div>
          <nav className="p-3 space-y-1">
            {liens.map((lien) => (
              <Link
                key={lien.path}
                to={lien.path}
                onClick={() => setIsOpen(false)}
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
        </div>

        <div className="p-3 border-t">
          <button
            onClick={handleDeconnexion}
            className="w-full text-left px-3 py-2 rounded text-sm text-red-600 hover:bg-red-50"
          >
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar