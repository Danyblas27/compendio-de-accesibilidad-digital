import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import MaterialesAccesibles from './pages/MaterialesAccesibles.jsx'
import ClasesEnLinea from './pages/ClasesEnLinea.jsx'
import Videos from './pages/Videos.jsx'
import DentroDelAula from './pages/DentroDelAula.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/materiales-accesibles" element={<MaterialesAccesibles />} />
        <Route path="/clases-en-linea" element={<ClasesEnLinea />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos-recapacita" element={<Navigate to="/videos" replace />} />
        <Route path="/dentro-del-aula" element={<DentroDelAula />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
