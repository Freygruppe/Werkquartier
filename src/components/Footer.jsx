import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-6 py-6 bg-[#4a5d54] text-white">
      <div className="flex items-center">
        {/* 版权说明文字，右侧添加了更大的外边距，拉开和链接的距离 */}
        <div className="text-sm text-white/90 mr-12">
          © 2026 Werkquartier Baugruppe Freiburg
        </div>
        {/* 链接组，两个链接之间保持原来的舒适间距，同时加了font-bold加粗，和版权文字区分开 */}
        <div className="flex gap-8">
          <Link to="/kontakt" className="text-sm font-bold hover:underline">
            Kontakt
          </Link>
          <Link to="/datenschutz" className="text-sm font-bold hover:underline">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}