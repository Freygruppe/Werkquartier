import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // 加载远程语言包（这里用本地文件，实际也支持远程接口）
  .use(Backend)
  // 自动检测用户语言（浏览器默认语言）
  .use(LanguageDetector)
  // 集成 react-i18next
  .use(initReactI18next)
  // 初始化配置
  .init({
    fallbackLng: 'de', // 默认语言：德语
    debug: false, // 开发时可设为 true 查看调试信息
    interpolation: {
      escapeValue: false, // React 已自带 XSS 防护，无需开启
    },
    supportedLngs: ['de', 'en'], // 支持的语言列表
    backend: {
      // 语言包文件路径模板
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      // 检测优先级：URL 参数 > 本地存储 > 浏览器语言 > 默认语言
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'], // 缓存语言设置到本地存储
    }
  });

export default i18n;