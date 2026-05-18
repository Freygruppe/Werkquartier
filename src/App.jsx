import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Startseite from './pages/Startseite'
import Projekt from './pages/Projekt'
import Ueber from './pages/Ueber'
import Termine from './pages/Termine'
import Kontakt from './pages/Kontakt'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-white min-h-screen w-full overflow-x-hidden">
        <div className="w-full min-h-screen flex flex-col">
          <Navbar />

          {/* pt从28改成24，适配缩小后的导航栏，不会有空隙了 */}
          <main className="flex-1 pt-24">
            <Routes>
              <Route path="/" element={<Startseite />} />
              <Route path="/projekt" element={<Projekt />} />
              <Route path="/ueber" element={<Ueber />} />
              <Route path="/termine" element={<Termine />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App