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
      <div className="md:hidden flex items-center justify-between bg-slate-900 border-b border-slate-700 p-4">
        <h2 className="font-bold text-orange-400 text-lg">Campus</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 border border-slate-600 rounded px-3 py-1"
        >
          {isOpen ? 'Fermer' : 'Menu'}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-full md:w-56 md:min-h-screen bg-slate-900 border-r border-slate-700 flex flex-col justify-between`}
      >
        <div>
          <div className="hidden md:block p-4 border-b border-slate-700">
            <h2 className="font-bold text-orange-400 text-lg">Campus</h2>
          </div>
          <nav className="p-3 space-y-1">
            {liens.map((lien) => (
              <Link
                key={lien.path}
                to={lien.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded text-sm ${
                  location.pathname === lien.path
                    ? 'bg-slate-800 text-orange-400 font-medium'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                {lien.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-3 border-t border-slate-700">
          <button
            onClick={handleDeconnexion}
            className="w-full text-left px-3 py-2 rounded text-sm text-red-400 hover:bg-slate-800"
          >
            Déconnexion
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar