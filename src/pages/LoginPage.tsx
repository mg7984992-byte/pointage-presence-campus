function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Connexion
        </h1>

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          placeholder="exemple@campus.com"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">
          Mot de passe
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-6"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Se connecter
        </button>
      </form>
    </div>
  )
}

export default LoginPage