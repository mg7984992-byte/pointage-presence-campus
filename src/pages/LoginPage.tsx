import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function LoginPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<'connexion' | 'creation'>('connexion')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 px-4">
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setMode('creation')}
          className={`px-4 py-2 rounded text-sm font-medium ${
            mode === 'creation'
              ? 'bg-orange-500 text-slate-950'
              : 'bg-slate-900 border border-slate-700 text-slate-300'
          }`}
        >
          Créer un compte
        </button>
        <button
          onClick={() => setMode('connexion')}
          className={`px-4 py-2 rounded text-sm font-medium ${
            mode === 'connexion'
              ? 'bg-orange-500 text-slate-950'
              : 'bg-slate-900 border border-slate-700 text-slate-300'
          }`}
        >
          J'ai déjà un compte
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 border border-slate-700 p-8 rounded-lg w-80"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-400">
          {mode === 'creation' ? 'Créer un compte' : 'Connexion'}
        </h1>

        <label className="block mb-2 text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          type="email"
          className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2 mb-4"
          placeholder="exemple@campus.com"
        />

        <label className="block mb-2 text-sm font-medium text-slate-300">
          Mot de passe
        </label>
        <input
          type="password"
          className="w-full bg-slate-800 border border-slate-700 text-slate-200 rounded px-3 py-2 mb-6"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full bg-orange-500 text-slate-950 font-medium py-2 rounded hover:bg-orange-400"
        >
          {mode === 'creation' ? "S'inscrire" : 'Se connecter'}
        </button>
      </form>
    </div>
  )
}

export default LoginPage