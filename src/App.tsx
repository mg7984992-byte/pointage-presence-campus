import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PointagePage from './pages/PointagePage'
import EtudiantsPage from './pages/EtudiantsPage'
import ClassesPage from './pages/ClassesPage'
import RapportsPage from './pages/RapportsPage'
import ProfilPage from './pages/ProfilPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pointage" element={<PointagePage />} />
        <Route path="/etudiants" element={<EtudiantsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/rapports" element={<RapportsPage />} />
        <Route path="/profil" element={<ProfilPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App