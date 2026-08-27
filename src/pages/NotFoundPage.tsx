import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oups, cette page n'existe pas.
      </p>
      <Link
        to="/dashboard"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Retour au tableau de bord
      </Link>
    </div>
  )
}

export default NotFoundPage