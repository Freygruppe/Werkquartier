/* =========================================
   🖼️ 导入 Hero 背景图片
   ========================================= */
import heroImage from "../assets/hero.png";

export default function Startseite() {
  return (

    /* =========================================
       🌑 页面整体背景
       ========================================= */
    <div className="bg-background text-white">

      {/* =========================================
         🖼️ HERO 首屏区域
         ========================================= */}
      <section

        className="
          relative
          h-screen
          flex
          items-center
          justify-end
          bg-cover
          bg-center
        "
        
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >

        <div className="absolute inset-0 bg-black/60"></div>

        {/* =========================================
           ✍️ 右侧文字区域
           ========================================= */}
        <div className="relative z-10 px-20 max-w-6xl ml-auto text-right">

          {/* 主标题：放大2倍，从原来的60px改成120px，字体不变 */}
          <h1 className="text-[120px] font-serif text-white font-light tracking-wide">
            WerkQuartier
          </h1>

          {/* 副标题：按比例放大2倍，从18px改成36px，间距也同步调整 */}
          <p className="mt-8 text-gray-300 text-[36px] leading-relaxed">
            Urban Space · Architecture · Future City · Sustainability
          </p>

        </div>

      </section>

      {/* =========================================
         📦 第二区：项目介绍
         ========================================= */}
      <section className="px-20 py-32">

        {/* 区域标题：加上font-serif，和大字字体统一，大小不变 */}
        <h2 className="text-3xl mb-10 font-serif text-white">
          Projektidee
        </h2>

        <p className="text-gray-300 max-w-3xl leading-relaxed text-lg">
          WerkQuartier verbindet moderne Architektur,
          nachhaltige Stadtentwicklung und flexible urbane Räume.

          Ziel ist die Schaffung eines lebendigen Quartiers
          mit hoher Aufenthaltsqualität und zukunftsorientiertem Design.
        </p>

      </section>

      {/* =========================================
         🧱 第三区：卡片模块
         ========================================= */}
      <section className="px-20 pb-32">

        {/* 标题：加上font-serif，和大字字体统一，大小不变 */}
        <h2 className="text-3xl mb-12 font-serif text-white">
          Schwerpunkte
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div
            className="
              bg-panel
              p-8
              rounded-xl
              shadow-soft
              transition
              hover:scale-105
            "
          >
            <h3 className="text-xl mb-4">
              Architektur
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Moderne und funktionale Baukonzepte
              mit Fokus auf Ästhetik und Nachhaltigkeit.
            </p>
          </div>

          <div
            className="
              bg-panel
              p-8
              rounded-xl
              shadow-soft
              transition
              hover:scale-105
            "
          >
            <h3 className="text-xl mb-4">
              Städtebau
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Integration in bestehende urbane Strukturen
              und Schaffung neuer öffentlicher Räume.
            </p>
          </div>

          <div
            className="
              bg-panel
              p-8
              rounded-xl
              shadow-soft
              transition
              hover:scale-105
            "
          >
            <h3 className="text-xl mb-4">
              Nachhaltigkeit
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Energieeffiziente Lösungen und
              verantwortungsvoller Umgang mit Ressourcen.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}