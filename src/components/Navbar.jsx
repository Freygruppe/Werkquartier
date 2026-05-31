import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next' // 新增：引入多语言hook
import Logo from '../assets/logo.png'

export default function Navbar() {
  const { t, i18n } = useTranslation() // 新增：初始化翻译和语言切换工具

  // 新增：切换语言的方法
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white fixed top-0 left-0 w-full z-50">
      {/* Logo你自己换横向设计，这里先不动 */}
      <img 
        src={Logo} 
        alt="WerkQuartier" 
        className="h-16 w-auto object-contain"
      />

      {/* 语言切换：现在有了点击功能，样式会根据当前语言自动切换 */}
      <div className="absolute right-28 flex gap-2 text-sm">
        <button 
          onClick={() => changeLanguage('en')}
          className={`transition ${i18n.language === 'en' ? 'text-white font-medium' : 'text-white/50 hover:text-white'}`}
        >
          EN
        </button>
        <span className="text-white/50">/</span>
        <button 
          onClick={() => changeLanguage('de')}
          className={`transition ${i18n.language === 'de' ? 'text-white font-medium' : 'text-white/50 hover:text-white'}`}
        >
          DE
        </button>
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
              {t('navbar.startseite')}
            </Link>
            <Link to="/projekt" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              {t('navbar.projekt')}
            </Link>
            <Link to="/ueber" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              {t('navbar.ueber')}
            </Link>
            <Link to="/termine" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              {t('navbar.termine')}
            </Link>
            <Link to="/kontakt" className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition">
              {t('navbar.kontakt')}
            </Link>
          </div>
        </div>
      </div>

    </nav>
  )
}