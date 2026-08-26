import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PointagePage from './pages/PointagePage'
import EtudiantsPage from './pages/EtudiantsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/pointage" element={<PointagePage />} />
        <Route path="/etudiants" element={<EtudiantsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App