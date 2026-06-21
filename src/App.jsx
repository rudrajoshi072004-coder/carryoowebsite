import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Booking } from './pages/Booking.jsx'
import { AppShowcase } from './pages/AppShowcase.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Services } from './pages/Services.jsx'
import { Safety } from './pages/Safety.jsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
