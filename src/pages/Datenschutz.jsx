/* =========================================
   🖼️ Datenschutz 页面
   ========================================= */
import { useTranslation } from 'react-i18next'; // 新增：引入多语言hook

export default function Datenschutz() {
  const { t } = useTranslation(); // 新增：初始化翻译函数

  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        {/* 内容容器：居中，限制最大宽度，两侧留出合理间距 */}
        <div className="max-w-3xl mx-auto">
          {/* 大标题：换成多语言 */}
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
            {t('datenschutz.title')}
          </h1>

          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section1_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section1_p1')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Werkquartier Baugruppe<br/>
              [Adresse]<br/>
              info@werkquartier-dietenbach.de
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 2. Allgemeine Hinweise zur Datenverarbeitung */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section2_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section2_p1')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section2_p2')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section2_p3')}
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 3. Hosting und Server-Logfiles */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section3_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section3_p1')}
            </p>
            <ul className="text-gray-300 leading-relaxed text-sm pl-5 space-y-1 mb-4">
              <li>{t('datenschutz.section3_li1')}</li>
              <li>{t('datenschutz.section3_li2')}</li>
              <li>{t('datenschutz.section3_li3')}</li>
              <li>{t('datenschutz.section3_li4')}</li>
              <li>{t('datenschutz.section3_li5')}</li>
              <li>{t('datenschutz.section3_li6')}</li>
            </ul>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section3_p2')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section3_p3')}
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 4. Kontaktaufnahme per E-Mail */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section4_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section4_p1')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section4_p2')}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section4_p3')}
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 5. SSL- bzw. TLS-Verschlüsselung */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section5_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section5_p1')}
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 6. Ihre Rechte */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section6_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              {t('datenschutz.section6_p1')}
            </p>
            <ul className="text-gray-300 leading-relaxed text-sm pl-5 space-y-1 mb-4">
              <li>{t('datenschutz.section6_li1')}</li>
              <li>{t('datenschutz.section6_li2')}</li>
              <li>{t('datenschutz.section6_li3')}</li>
              <li>{t('datenschutz.section6_li4')}</li>
              <li>{t('datenschutz.section6_li5')}</li>
              <li>{t('datenschutz.section6_li6')}</li>
            </ul>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section6_p2')}
            </p>
          </div>

          <div className="border-b border-gray-700 my-8"></div>

          {/* 7. Änderungen dieser Datenschutzerklärung */}
          <div>
            <h2 className="text-base md:text-lg text-white mb-4 mt-8">
              {t('datenschutz.section7_title')}
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              {t('datenschutz.section7_p1')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}