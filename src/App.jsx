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
      {/* =========================
         🌑 全局背景层：全屏覆盖，左右都是深灰色背景
         ========================= */}
      <div className="bg-background text-white min-h-screen w-full overflow-x-hidden">
        {/* 🌐 版心容器：所有内容都包裹在这里，内部纵向排列 */}
        <div className="w-full max-w-[1126px] mx-auto min-h-screen flex flex-col ">
          
          {/* 🧭 顶部导航 */}
          <Navbar />

          {/* =========================
             📦 页面内容区域
             ========================= */}
          <main className="flex-1 pt-20">
            {/* pt-20 = 给 fixed navbar 留空间 */}
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

          {/* 📍 Footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App