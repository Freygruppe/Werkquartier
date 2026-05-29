import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 py-6 bg-[#4a5d54] text-white">
      {/* 左边空出，删掉了原来的语言切换 */}
      <div></div>

      {/* 中间：版权说明文字，正好居中，和你截图里的红色标注位置一致 */}
      <div className="text-sm text-white/90">
        © 2026 Werkquartier Baugruppe Freiburg
      </div>

      {/* 右边：两个链接挨在一起，离右边边缘加大了距离 */}
      <div className="flex gap-8 pr-8">
        <Link to="/kontakt" className="text-sm hover:underline">
          Kontakt
        </Link>
        <Link to="/datenschutz" className="text-sm hover:underline">
          Datenschutz
        </Link>
      </div>
    </footer>
  )
}