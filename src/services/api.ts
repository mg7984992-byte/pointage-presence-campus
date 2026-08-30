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
/*
=== EXEMPLE : comment utiliser ces fonctions dans une page ===

Une fois le backend prêt, voici comment on remplacera les données
fictives (useState) par de vraies données venant de l'API :

import { useState, useEffect } from 'react'
import { getEtudiants, addEtudiant, deleteEtudiant } from '../services/api'

function EtudiantsPage() {
  const [etudiants, setEtudiants] = useState([])
  const [chargement, setChargement] = useState(true)

  // useEffect se déclenche une seule fois, au chargement de la page
  useEffect(() => {
    getEtudiants()
      .then((data) => setEtudiants(data))
      .catch((erreur) => console.error("Erreur de chargement :", erreur))
      .finally(() => setChargement(false))
  }, [])

  async function handleAjouter(nouvelEtudiant) {
    const etudiantCree = await addEtudiant(nouvelEtudiant)
    setEtudiants([...etudiants, etudiantCree]) // on l'ajoute à l'affichage
  }

  async function handleSupprimer(id) {
    await deleteEtudiant(id)
    setEtudiants(etudiants.filter((e) => e.id !== id)) // on le retire de l'affichage
  }

  if (chargement) return <p>Chargement...</p>

  // ... le reste du JSX reste identique à ce qu'on a déjà fait
}
*/