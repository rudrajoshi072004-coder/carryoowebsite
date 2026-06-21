import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { StaticPageRedirect } from './components/StaticPageRedirect.jsx'
import { Home } from './pages/Home.jsx'
import { Booking } from './pages/Booking.jsx'
import { AppShowcase } from './pages/AppShowcase.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Services } from './pages/Services.jsx'
import { Safety } from './pages/Safety.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<StaticPageRedirect to="/privacy-policy/" />} />
      <Route path="/privacy-policy.html" element={<StaticPageRedirect to="/privacy-policy/" />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/app" element={<AppShowcase />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
