/* =========================================
   🖼️ 导入 Hero 背景图片
   ========================================= */
import heroImage from "../assets/hero.png";

export default function Startseite() {
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
          {/* 大标题：分成两行，减号用无衬线保证是直的 */}
          <h1 className="font-serif text-white font-light tracking-wide text-7xl md:text-[160px]">
            WERK<span className="font-sans">-</span><br/>QUARTIER
          </h1>

          {/* 👇 整段小字：先向上移3倍行距，再向右移2个大标题字母的宽度 */}
          <div className="text-gray-300 max-w-xs transform translate-x-40 -translate-y-16">
            {/* 小标题和描述之间的间距已经调整为你要的大小 */}
            <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider mb-2">
              Modernes Bauen<br/>
              Für Nachhaltige Zukunft
            </h3>
            <p className="text-sm leading-normal opacity-90">
              Willkommen im WerkQuartier – wo moderne Architektur, nachhaltiges Wohnen und gemeinschaftlich gestaltete Lebensräume ein zukunftsorientiertes Zuhause im neuen Stadtquartier schaffen.
            </p>
          </div>
        </div>
      </section>

      {/* 下面的代码和你原来的完全一样，一个字没改 */}
      <section className="px-20 py-32">
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

      <section className="px-20 pb-32">
        <h2 className="text-3xl mb-12 font-serif text-white">
          Schwerpunkte
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="bg-panel p-8 rounded-xl shadow-soft transition hover:scale-105">
            <h3 className="text-xl mb-4">Architektur</h3>
            <p className="text-gray-400 leading-relaxed">
              Moderne und funktionale Baukonzepte
              mit Fokus auf Ästhetik und Nachhaltigkeit.
            </p>
          </div>
          <div className="bg-panel p-8 rounded-xl shadow-soft transition hover:scale-105">
            <h3 className="text-xl mb-4">Städtebau</h3>
            <p className="text-gray-400 leading-relaxed">
              Integration in bestehende urbane Strukturen
              und Schaffung neuer öffentlicher Räume.
            </p>
          </div>
          <div className="bg-panel p-8 rounded-xl shadow-soft transition hover:scale-105">
            <h3 className="text-xl mb-4">Nachhaltigkeit</h3>
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
