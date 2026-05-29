/* =========================================
   🖼️ 导入项目图片
   ========================================= */
import projekt01 from "../assets/projekt-01.png";
import projekt02 from "../assets/projekt-02.png";
import swPlan from "../assets/SW plan-1.png";

export default function Projekt() {
  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      {/* 上部区域：最后调整标题的垂直位置 */}
      <section className="relative">
        {/* 左边的图片：顶部顶到导航栏下方，左半页面，等比例缩小，不裁剪 */}
        <div className="w-1/2">
          <img 
            src={projekt01} 
            alt="Projekt Vision" 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* 👇 小标题：最后再垂直向上移动36px（正好是一个标题字母的高度），完成所有微调 */}
        <h2 className="absolute left-[40%] top-1/2 transform -translate-y-1/2 translate-y-[-180px] translate-x-[-36px] font-serif text-6xl md:text-7xl font-light tracking-wide text-white z-10 uppercase">
          Eine Vision für<br/>inspiriertes<br/>Wohnen
        </h2>

        {/* 文字段落：完全不动，保持最终的位置 */}
        <div className="absolute right-20 bottom-[180px] w-96 h-64 flex flex-col justify-center">
          <p className="text-gray-300 text-sm leading-normal text-left">
            Willkommen im Projekt Grünwerk – wir entwickeln ein modernes Wohnquartier, das Komfort, Nachhaltigkeit und Lebensqualität vereint. Unser Fokus liegt darauf, Räume zu schaffen, die nicht nur schön sind, sondern auch ein Zuhause bieten, in dem Sie sich rundum wohlfühlen.
          </p>
        </div>
      </section>

      {/* 下部区域：完全没有改动，保持你之前调好的所有状态 */}
      <section className="relative mt-16">
        {/* 左边的文字：位置不变 */}
        <div className="absolute left-20 top-36 w-72 flex flex-col justify-center z-10">
          <h2 className="font-serif text-5xl md:text-6xl font-light tracking-wide text-white uppercase mb-6">
            1.<br/>Bau-<br/>Abschnitt
          </h2>
          <p className="text-gray-300 text-sm leading-normal">
            Wir sind aktuell im ersten Bauabschnitt tätig. Hier realisieren wir die ersten Wohngebäude, die modernste Architektur, energieeffiziente Technik und hochwertige Ausstattung kombinieren. Dieser Abschnitt legt den Grundstein für das gesamte Quartier und wird bereits bald fertiggestellt.
          </p>
        </div>

        {/* 右边的大图片：占据右半页面，等比例缩小，不裁剪 */}
        <div className="w-1/2 ml-auto">
          <img 
            src={projekt02} 
            alt="Bauabschnitt" 
            className="w-full h-auto object-contain" 
          />
        </div>

        {/* 小图片：中心线正好和页面宽度的1/3线重合，保持不变 */}
        <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-120 z-20">
          <img 
            src={swPlan} 
            alt="Bauplan" 
            className="w-96 h-auto object-contain" 
          />
        </div>
      </section>
    </div>
  );
}