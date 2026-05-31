/* =========================================
   🖼️ 导入项目图片
   ========================================= */
import projekt01 from "../assets/projekt-01.png";
import projekt02 from "../assets/projekt-02.png";
import swPlan from "../assets/SW plan-1.png";
import { useTranslation } from 'react-i18next'; // 新增：引入多语言hook

export default function Projekt() {
  const { t } = useTranslation(); // 新增：初始化翻译函数

  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      {/* 上部区域：最后调整标题的垂直位置 */}
      <section className="relative">
        {/* 左边的图片：alt也换成了多语言 */}
        <div className="w-1/2">
          <img 
            src={projekt01} 
            alt={t('projekt.alt_vision')} 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* 👇 小标题：文本换成多语言，换行用dangerouslySetInnerHTML保证正常显示 */}
        <h2 
          className="absolute left-[40%] top-1/2 transform -translate-y-1/2 translate-y-[-180px] translate-x-[-36px] font-serif text-6xl md:text-7xl font-light tracking-wide text-white z-10 uppercase"
          dangerouslySetInnerHTML={{ __html: t('projekt.title') }}
        />

        {/* 文字段落：文本换成多语言 */}
        <div className="absolute right-20 bottom-[180px] w-96 h-64 flex flex-col justify-center">
          <p className="text-gray-300 text-sm leading-normal text-left">
            {t('projekt.desc')}
          </p>
        </div>
      </section>

      {/* 下部区域：完全没有改动，保持你之前调好的所有状态 */}
      <section className="relative mt-16">
        {/* 左边的文字：标题和描述都换成多语言 */}
        <div className="absolute left-20 top-36 w-72 flex flex-col justify-center z-10">
          <h2 
            className="font-serif text-5xl md:text-6xl font-light tracking-wide text-white uppercase mb-6"
            dangerouslySetInnerHTML={{ __html: t('projekt.bau_title') }}
          />
          <p className="text-gray-300 text-sm leading-normal">
            {t('projekt.bau_desc')}
          </p>
        </div>

        {/* 右边的大图片：alt换成多语言 */}
        <div className="w-1/2 ml-auto">
          <img 
            src={projekt02} 
            alt={t('projekt.alt_bau')} 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* 小图片：alt换成多语言 */}
        <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-20">
          <img 
            src={swPlan} 
            alt={t('projekt.alt_plan')} 
            className="w-96 h-auto object-contain" 
          />
        </div>
      </section>
    </div>
  );
}