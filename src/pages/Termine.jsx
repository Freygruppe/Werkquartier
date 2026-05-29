/* =========================================
   🖼️ Termine 页面
   ========================================= */
export default function Termine() {
  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        {/* 内容容器：居中，限制最大宽度，两侧留出合理间距，和其他页面保持一致 */}
        <div className="max-w-3xl mx-auto">
          {/* 大标题：和其他页面保持统一的样式 */}
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
            Termine
          </h1>

          {/* 最上方：即将到来的两个Termine，卡片样式完全复制Startseite里的三个卡片的样式 */}
          <div className="bg-panel p-8 rounded-xl shadow-soft mb-12">
            {/* 小标题：颜色改为logo的绿色，行首保留缩进效果 */}
            <h2 className="text-green-500 text-lg mb-6">Bevorstehende Termine</h2>
            <div className="space-y-8">
              {/* 3. Juni 2026 - Afterworkabende */}
              <div className="flex gap-8 pb-8 border-b border-gray-700">
                <div className="text-right min-w-[100px]">
                  <div className="text-white text-2xl font-bold">3</div>
                  <div className="text-gray-400 text-sm">Jun 2026</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm mb-1">18:30 Uhr</p>
                  <h3 className="text-white text-xl mb-2">Best Practice: Afterworkabende</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Das Dreierspann aus Bauherr*in, Projektsteuerung und Architekt*in berichtet
                  </p>
                </div>
              </div>

              {/* 3. Juli 2026 - Projektmanagement */}
              <div className="flex gap-8">
                <div className="text-right min-w-[100px]">
                  <div className="text-white text-2xl font-bold">3</div>
                  <div className="text-gray-400 text-sm">Jul 2026</div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm mb-1">9:30-17:00 Uhr</p>
                  <h3 className="text-white text-xl mb-2">Projektmanagement Baugemeinschaften</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Seminarreihe in drei Modulen zwischen Juli und Oktober
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 剩下的Termine：顺序反过来，从晚到早排列 */}
          <div className="space-y-8">
            <h2 className="text-white text-lg mb-6">Weitere Termine</h2>

            {/* 8. Dezember 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">8</div>
                <div className="text-gray-400 text-sm">Dez 2026</div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">Gemeinderat Vergabeentscheidung</p>
              </div>
            </div>

            {/* 18. September 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">18</div>
                <div className="text-gray-400 text-sm">Sep 2026</div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">Frist zur Abgabe der finalen Bewerbung</p>
              </div>
            </div>

            {/* 15. Juli bis 29. Juli 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">15</div>
                <div className="text-gray-400 text-sm">Jul - 29. Jul</div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">Gespräche mit den Bewerbern</p>
              </div>
            </div>

            {/* 12. Juni 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">12</div>
                <div className="text-gray-400 text-sm">Jun 2026</div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">Frist zur Abgabe der Erstbewerbung</p>
              </div>
            </div>

            {/* 02. März bis 15. Mai 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">02</div>
                <div className="text-gray-400 text-sm">Mär - 15. Mai</div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">Zeitraum für Rückfragen</p>
              </div>
            </div>

            {/* 27. Februar 2026 */}
            <div className="flex gap-8">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">27</div>
                <div className="text-gray-400 text-sm">Feb 2026</div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">Start der Bewerbungsphase</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
