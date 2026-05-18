import { Link } from "react-router-dom"
import Logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white border-b border-white/10">

      {/* LEFT: 原来的文字换成了Logo图片 */}
      <img 
        src={Logo} 
        alt="WerkQuartier" 
        // h-9 控制Logo高度，你可以改成 h-7 更小 / h-9 更大，w-auto保证图片不变形
        className="h-9 w-auto object-contain"
      />

      {/* RIGHT: Navigation 这部分完全不用动 */}
      <div className="flex gap-6 text-sm">
        <Link to="/" className="text-gray-400 hover:text-white transition">
          Startseite
        </Link>
        <Link to="/projekt" className="text-gray-400 hover:text-white transition">
          Projekt
        </Link>
        <Link to="/ueber" className="text-gray-400 hover:text-white transition">
          Über
        </Link>
        <Link to="/termine" className="text-gray-400 hover:text-white transition">
          Termine
        </Link>
        <Link to="/kontakt" className="text-gray-400 hover:text-white transition">
          Kontakt
        </Link>
      </div>

    </nav>
  )
}