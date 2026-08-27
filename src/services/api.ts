// URL de base de l'API backend (à ajuster selon l'adresse du serveur backend)
const API_URL = "http://localhost:3000"

// --- Étudiants ---
export async function getEtudiants() {
  const response = await fetch(`${API_URL}/etudiants`)
  return response.json()
}

export async function addEtudiant(etudiant: { nom: string; classe: string; email: string }) {
  const response = await fetch(`${API_URL}/etudiants`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(etudiant),
  })
  return response.json()
}

export async function deleteEtudiant(id: number) {
  const response = await fetch(`${API_URL}/etudiants/${id}`, {
    method: "DELETE",
  })
  return response.json()
}

// --- Classes ---
export async function getClasses() {
  const response = await fetch(`${API_URL}/classes`)
  return response.json()
}

export async function addClasse(classe: { nom: string; enseignant: string }) {
  const response = await fetch(`${API_URL}/classes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(classe),
  })
  return response.json()
}

// --- Authentification ---
export async function login(email: string, motDePasse: string) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, motDePasse }),
  })
  return response.json()
}