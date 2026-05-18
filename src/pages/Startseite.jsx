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

        /* -----------------------------------------
           Tailwind 布局说明：

           relative
           → 允许内部 absolute 定位

           h-screen
           → 高度 = 整个屏幕

           flex items-center justify-end
           → 内容垂直居中 + 靠右

           px-20
           → 左右留白（高级感关键）

           bg-cover
           → 背景图铺满

           bg-center
           → 背景图居中
           ----------------------------------------- */
        className="
          relative
          h-screen
          flex
          items-center
          justify-end
          bg-cover
          bg-center
        "
        
        /* -----------------------------------------
           设置背景图片
           ----------------------------------------- */
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >

        {/* =========================================
           🌑 黑色遮罩层
           =========================================

           bg-black/60
           → 黑色 + 60%透明度

           作用：
           ✔ 压暗背景
           ✔ 提升高级感
           ✔ 保证白字清晰
        ========================================= */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* =========================================
           ✍️ 右侧文字区域
           ========================================= */}
        <div className="relative z-10 px-20 max-w-6xl ml-auto text-right">

          {/* 主标题 */}
          <h1 className="text-6xl font-serif text-white font-light tracking-wide">
            WerkQuartier
          </h1>

          {/* 副标题 */}
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Urban Space · Architecture · Future City · Sustainability
          </p>

        </div>

      </section>

      {/* =========================================
         📦 第二区：项目介绍
         ========================================= */}
      <section className="px-20 py-32">

        {/* 区域标题 */}
        <h2 className="text-3xl mb-10">
          Projektidee
        </h2>

        {/* 介绍文字 */}
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

        {/* 标题 */}
        <h2 className="text-3xl mb-12">
          Schwerpunkte
        </h2>

        {/* -----------------------------------------
           三列 Grid 布局
           ----------------------------------------- */}
        <div className="grid grid-cols-3 gap-10">

          {/* =====================================
             卡片 1
             ===================================== */}
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

          {/* =====================================
             卡片 2
             ===================================== */}
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

          {/* =====================================
             卡片 3
             ===================================== */}
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