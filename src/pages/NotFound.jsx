import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Konkan Cashew Co." />
      <section className="section-pad">
        <div className="container-page text-center">
          <p className="font-display text-6xl text-husk-300">404</p>
          <h1 className="mt-4 text-2xl sm:text-3xl">Page not found</h1>
          <p className="mt-3 text-husk-600">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center rounded-full bg-husk-800 px-6 py-3 text-sm font-semibold text-cream hover:bg-husk-900"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
