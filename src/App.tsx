
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/footer'
import { HomePage } from './pages/HomePage'
import { MenPage } from './pages/MenPage'
import { WomenPage } from './pages/WomenPage'
import { KidsPage } from './pages/Kidspage'
import { SalePage } from './pages/SalePage'
export default function App() {
  return (
    <HashRouter>
      <div className="w-full min-h-screen bg-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/sale" element={<SalePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

