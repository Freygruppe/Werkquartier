import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-5 bg-gray-100">

      {/* LEFT: Language */}
      <div className="flex items-center gap-2">
        <button className="text-sm font-medium hover:underline">
          EN
        </button>
        <span className="text-sm text-gray-400">|</span>
        <button className="text-sm font-medium hover:underline">
          DE
        </button>
      </div>

      {/* RIGHT: Navigation */}
      <div className="flex justify-end flex-1">

        {/* inner container controls width + spacing */}
        <div className="flex justify-between w-full max-w-md ml-auto pr-6">

          <Link to="/kontakt" className="text-sm hover:underline">
            Kontakt
          </Link>

          <Link to="/impressum" className="text-sm hover:underline">
            Impressum
          </Link>

          <Link to="/datenschutz" className="text-sm hover:underline">
            Datenschutz
          </Link>

        </div>
      </div>

    </footer>
  )
}