import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white fixed top-0 left-0 w-full z-50">
      {/* Logo你自己换横向设计，这里先不动 */}
      <img 
        src={Logo} 
        alt="WerkQuartier" 
        className="h-16 w-auto object-contain"
      />

      {/* 语言切换：右移了一点，和汉堡菜单留出间距 */}
      <div className="absolute right-28 flex gap-2 text-sm">
        <button className="text-white font-medium">EN</button>
        <span className="text-white/50">/</span>
        <button className="text-white/50 hover:text-white transition">DE</button>
      </div>

      {/* 右上角汉堡菜单 */}
      <div className="relative group">
        <button className="flex flex-col gap-1.5 p-2">
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        <div className="absolute right-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/10 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div className="flex flex-col py-2">
            <Link to="/" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              Startseite
            </Link>
            <Link to="/projekt" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              Projekt
            </Link>
            <Link to="/ueber" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              Über
            </Link>
            <Link to="/termine" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              Termine
            </Link>
            <Link to="/kontakt" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              Kontakt
            </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}