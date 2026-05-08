import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { BookingDraftProvider } from './context/BookingDraftProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookingDraftProvider>
        <App />
      </BookingDraftProvider>
    </BrowserRouter>
  </StrictMode>,
)
