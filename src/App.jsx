import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import MaterialesAccesibles from './pages/MaterialesAccesibles.jsx'
import ClasesEnLinea from './pages/ClasesEnLinea.jsx'
import VideosRecapacita from './pages/VideosRecapacita.jsx'
import DentroDelAula from './pages/DentroDelAula.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/materiales-accesibles" element={<MaterialesAccesibles />} />
        <Route path="/clases-en-linea" element={<ClasesEnLinea />} />
        <Route path="/videos-recapacita" element={<VideosRecapacita />} />
        <Route path="/dentro-del-aula" element={<DentroDelAula />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
