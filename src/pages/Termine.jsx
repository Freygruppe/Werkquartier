/* =========================================
   🖼️ Termine 页面
   ========================================= */
import { useTranslation } from 'react-i18next'; // 新增：引入多语言hook

export default function Termine() {
  const { t } = useTranslation(); // 新增：初始化翻译函数

  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        {/* 内容容器：居中，限制最大宽度，两侧留出合理间距，和其他页面保持一致 */}
        <div className="max-w-3xl mx-auto">
          {/* 大标题：换成多语言 */}
          <h1 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
            {t('termine.title')}
          </h1>

          {/* 最上方：即将到来的两个Termine，卡片样式完全复制Startseite里的三个卡片的样式 */}
          <div className="bg-panel p-8 rounded-xl shadow-soft mb-12">
            {/* 小标题：换成多语言 */}
            <h2 className="text-green-500 text-lg mb-6">
              {t('termine.upcoming')}
            </h2>
            <div className="space-y-8">
              {/* 3. Juni 2026 - Afterworkabende */}
              <div className="flex gap-8 pb-8 border-b border-gray-700">
                <div className="text-right min-w-[100px]">
                  <div className="text-white text-2xl font-bold">3</div>
                  <div className="text-gray-400 text-sm">
                    {t('termine.month1')}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm mb-1">
                    {t('termine.time1')}
                  </p>
                  <h3 className="text-white text-xl mb-2">
                    {t('termine.event1_title')}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('termine.event1_desc')}
                  </p>
                </div>
              </div>

              {/* 3. Juli 2026 - Projektmanagement */}
              <div className="flex gap-8">
                <div className="text-right min-w-[100px]">
                  <div className="text-white text-2xl font-bold">3</div>
                  <div className="text-gray-400 text-sm">
                    {t('termine.month2')}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 text-sm mb-1">
                    {t('termine.time2')}
                  </p>
                  <h3 className="text-white text-xl mb-2">
                    {t('termine.event2_title')}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('termine.event2_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 剩下的Termine：顺序反过来，从晚到早排列 */}
          <div className="space-y-8">
            <h2 className="text-white text-lg mb-6">
              {t('termine.other')}
            </h2>

            {/* 8. Dezember 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">8</div>
                <div className="text-gray-400 text-sm">
                  {t('termine.month3')}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">
                  {t('termine.event3_title')}
                </p>
              </div>
            </div>

            {/* 18. September 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">18</div>
                <div className="text-gray-400 text-sm">
                  {t('termine.month4')}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">
                  {t('termine.event4_title')}
                </p>
              </div>
            </div>

            {/* 15. Juli bis 29. Juli 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">15</div>
                <div className="text-gray-400 text-sm">
                  {t('termine.month5')}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">
                  {t('termine.event5_title')}
                </p>
              </div>
            </div>

            {/* 12. Juni 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">12</div>
                <div className="text-gray-400 text-sm">
                  {t('termine.month6')}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">
                  {t('termine.event6_title')}
                </p>
              </div>
            </div>

            {/* 02. März bis 15. Mai 2026 */}
            <div className="flex gap-8 pb-8 border-b border-gray-700">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">02</div>
                <div className="text-gray-400 text-sm">
                  {t('termine.month7')}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">
                  {t('termine.event7_title')}
                </p>
              </div>
            </div>

            {/* 27. Februar 2026 */}
            <div className="flex gap-8">
              <div className="text-right min-w-[100px]">
                <div className="text-white text-2xl font-bold">27</div>
                <div className="text-gray-400 text-sm">
                  {t('termine.month8')}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-lg">
                  {t('termine.event8_title')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}