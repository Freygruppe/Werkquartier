import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next' // 新增：引入多语言hook

export default function Footer() {
  const { t } = useTranslation() // 新增：初始化翻译函数

  return (
    <footer className="flex items-center justify-center px-6 py-6 bg-[#4a5d54] text-white">
      <div className="flex items-center">
        {/* 版权说明文字，替换为多语言 */}
        <div className="text-sm text-white/90 mr-12">
          {t('footer.copyright')}
        </div>
        {/* 链接组，替换为多语言，保留加粗样式 */}
        <div className="flex gap-8">
          <Link to="/kontakt" className="text-sm font-bold hover:underline">
            {t('footer.kontakt')}
          </Link>
          <Link to="/datenschutz" className="text-sm font-bold hover:underline">
            {t('footer.datenschutz')}
          </Link>
        </div>
      </div>
    </footer>
  )
}