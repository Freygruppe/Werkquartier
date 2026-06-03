import { useTranslation } from 'react-i18next';

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        {/* 内容容器：居中限制宽度，和Termine页面完全一致 */}
        <div className="max-w-3xl mx-auto">
          {/* 大标题，从翻译文件读取 */}
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
            {t('impressum.title')}
          </h1>

          {/* 内容区块，统一间距 */}
          <div className="space-y-8">
            {/* 主体信息区块，内容带HTML标签用dangerouslySetInnerHTML渲染 */}
            <div>
              <h2 className="text-white text-lg mb-4">{t('impressum.section1_title')}</h2>
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('impressum.section1_content') }}
              />
            </div>

            {/* 联系方式区块 */}
            <div>
              <h2 className="text-white text-lg mb-4">{t('impressum.section2_title')}</h2>
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('impressum.section2_content') }}
              />
            </div>

            {/* 内容责任区块 */}
            <div>
              <h2 className="text-white text-lg mb-4">{t('impressum.section3_title')}</h2>
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('impressum.section3_content') }}
              />
            </div>

            {/* 内容免责区块 */}
            <div>
              <h2 className="text-white text-lg mb-4">{t('impressum.section4_title')}</h2>
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('impressum.section4_content') }}
              />
            </div>

            {/* 欧盟调解链接区块 */}
            <div>
              <h2 className="text-white text-lg mb-4">{t('impressum.section5_title')}</h2>
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('impressum.section5_content') }}
              />
            </div>

            {/* 说明区块 */}
            <div>
              <h2 className="text-white text-lg mb-4">{t('impressum.section6_title')}</h2>
              <p 
                className="text-gray-300 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('impressum.section6_content') }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}