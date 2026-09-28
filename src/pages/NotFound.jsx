import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

export default function NotFound() {
  return (
    <>
      <PageHero title="Página no encontrada" description="La dirección no existe o cambió de lugar." breadcrumb={false} />
      <section className="container section">
        <Link className="btn btn-primary" to="/">Volver al inicio</Link>
      </section>
    </>
  )
}
