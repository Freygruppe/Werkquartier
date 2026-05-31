/* =========================================
   🖼️ Über 页面
   ========================================= */
import { useTranslation } from 'react-i18next'; // 引入多语言 hook
import ueber05 from "../assets/ueber-05.jpg";
import ueber03 from "../assets/ueber-03.jpg";
import ueber04 from "../assets/ueber-04.png";

export default function Ueber() {
  const { t } = useTranslation(); // 初始化多语言翻译函数

  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* 左侧图片（保持不变） */}
          <div className="flex flex-col gap-4 -ml-20 w-[110%] scale-[0.92] origin-top">
            <img
              src={ueber05}
              alt="Team Meeting"
              className="w-full h-auto object-cover rounded-xl"
            />
            <img
              src={ueber03}
              alt="Team Work"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* 中间图片（保持不变） */}
          <div className="-ml-24 scale-[0.92] origin-top">
            <img
              src={ueber04}
              alt="Team Member"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* 右侧文字（替换为多语言） */}
          <div className="w-96">
            <h2 
              className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-8"
              dangerouslySetInnerHTML={{ __html: t('ueber.title') }} 
            />

            <p className="text-white text-sm leading-normal mb-16">
              {t('ueber.paragraph1')}
            </p>

            <p className="text-white text-sm leading-normal">
              {t('ueber.paragraph2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}