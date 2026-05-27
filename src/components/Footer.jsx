import { Link } from "react-router-dom"

export default function Footer() {
  return (
    // 👇 改了背景色为深灰绿莫兰迪色，加了默认白色文字
    <footer className="flex items-center justify-between px-6 py-5 bg-[#4a5d54] text-white">

      {/* LEFT: Language */}
      <div className="flex items-center gap-2">
        <button className="text-sm font-medium hover:underline">
          EN
        </button>
        {/* 👇 分隔线改成半透明白色，适配深色背景 */}
        <span className="text-sm text-white/70">|</span>
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

          {/* 👇 删掉了Impressum这一行 */}

          <Link to="/datenschutz" className="text-sm hover:underline">
            Datenschutz
          </Link>

        </div>
      </div>

    </footer>
  )
}