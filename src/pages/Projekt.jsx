import { useState, useEffect } from 'react';
import projekt01 from "../assets/projekt-01.png";
import projekt02 from "../assets/projekt-02.png";
import swPlan from "../assets/SW plan-1.png";
import { useTranslation } from 'react-i18next';

export default function Projekt() {
  const { t } = useTranslation();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      // 核心优化：加0.8的下限，最小缩放到80%，不会过小
      const newScale = Math.max(0.8, Math.min(1, window.innerWidth / 1920));
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    // 清理监听，避免内存泄漏
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <div style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: 1920,
        // 加最小高度，避免缩放过小导致页面高度不足
        minHeight: '100vh'
      }}>
        
        <div className="bg-background text-white min-h-screen px-20 py-0">
          <section className="relative">
            <div className="w-1/2">
              <img 
                src={projekt01} 
                alt={t('projekt.alt_vision')} 
                className="w-full h-auto object-contain" 
              />
            </div>

            <h2 
              className="absolute left-[40%] top-1/2 transform -translate-y-1/2 translate-y-[-180px] translate-x-[-36px] font-serif text-6xl md:text-7xl font-light tracking-wide text-white z-10 uppercase"
              dangerouslySetInnerHTML={{ __html: t('projekt.title') }}
            />

            {/* 🛠️ 终极精准修改：
                1. right-20, w-96, h-64 甚至 flex 布局全部完全恢复你最初的样子！
                2. bottom-[180px] 完璧归赵，在 100% 画面下左侧起点和垂直对齐线绝对不动。
                3. 只加了一个 max-xl:bottom-[130px]：当笔记本 125% 缩放导致屏幕变矮时，
                   它才会临时向下让出 50px 的安全距离，彻底消除与大标题的碰撞重叠。 */}
            <div className="absolute right-20 bottom-[180px] max-xl:bottom-[130px] w-96 h-64 flex flex-col justify-center">
              <p className="text-gray-300 text-sm leading-normal text-left">
                {t('projekt.desc')}
              </p>
            </div>
          </section>

          <section className="relative mt-16">
            <div className="absolute left-20 top-36 w-72 flex flex-col justify-center z-10">
              <h2 
                className="font-serif text-5xl md:text-6xl font-light tracking-wide text-white uppercase mb-6"
                dangerouslySetInnerHTML={{ __html: t('projekt.bau_title') }}
              />
              <p className="text-gray-300 text-sm leading-normal">
                {t('projekt.bau_desc')}
              </p>
            </div>

            <div className="w-1/2 ml-auto">
              <img 
                src={projekt02} 
                alt={t('projekt.alt_bau')} 
                className="w-full h-auto object-contain" 
              />
            </div>

            <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-20">
              <img 
                src={swPlan} 
                alt={t('projekt.alt_plan')} 
                className="w-96 h-auto object-contain" 
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}