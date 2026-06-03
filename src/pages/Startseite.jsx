/* =========================================
   🖼️ 导入 Hero 背景图片
   ========================================= */
import heroImage from "../assets/hero.png";
import { useTranslation } from 'react-i18next';

export default function Startseite() {
  // 初始化翻译函数
  const { t } = useTranslation();

  return (
    <div className="bg-background text-white">
      <section
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        {/* 👇 整体向上平移了大标题的一个字母高度（160px，对应大标题的字号），内部相对位置完全不变 */}
        <div className="absolute left-28 bottom-8 flex items-end gap-16 z-10 -translate-y-40">
          {/* 大标题：品牌名，不用翻译，保留原样 */}
          <h1 className="font-serif text-white font-light tracking-wide text-7xl md:text-[160px]">
            WERK<span className="font-sans">-</span><br/>QUARTIER
          </h1>

          {/* 👇 整段小字：先向上移3倍行距，再向右移2个大标题字母的宽度 */}
          <div className="text-gray-300 max-w-xs transform translate-x-40 -translate-y-16">
            {/* 小标题：因为有换行<br/>，用了和Über页面一样的渲染方式，保证换行正常 */}
            <h3 
              className="font-serif text-xl md:text-2xl uppercase tracking-wider mb-2"
              dangerouslySetInnerHTML={{ __html: t('start.subtitle') }}
            />
            <p className="text-sm leading-normal opacity-90">
              {t('start.desc')}
            </p>
          </div>
        </div>
      </section>

      {/* 💡 核心修改区域在这里 👇 */}
      <section className="px-20 py-32">
        <h2 className="text-3xl mb-10 font-serif text-white">
          {t('start.projektidee_title')}
        </h2>
        {/* 加上了 whitespace-pre-wrap，完美识别 \n 且手机端自动缩进 */}
        <p className="text-gray-300 max-w-3xl leading-relaxed text-lg whitespace-pre-wrap">
          {t('start.projektidee_desc')}
        </p>
      </section>

      <section className="px-20 pb-32">
        <h2 className="text-3xl mb-12 font-serif text-white">
          {t('start.schwerpunkte_title')}
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-panel p-8 rounded-xl shadow-soft transition hover:scale-105">
            <h3 className="text-xl mb-4">
              {t('start.architektur_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('start.architektur_desc')}
            </p>
          </div>
          <div className="bg-panel p-8 rounded-xl shadow-soft transition hover:scale-105">
            <h3 className="text-xl mb-4">
              {t('start.staedtebau_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('start.staedtebau_desc')}
            </p>
          </div>
          <div className="bg-panel p-8 rounded-xl shadow-soft transition hover:scale-105">
            <h3 className="text-xl mb-4">
              {t('start.nachhaltigkeit_title')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('start.nachhaltigkeit_desc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}