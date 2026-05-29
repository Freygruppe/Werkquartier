/* =========================================
   🖼️ Über 页面
   ========================================= */
// 导入三张图片，都放在src/assets目录下
import ueber05 from "../assets/ueber-05.jpg";
import ueber03 from "../assets/ueber-03.jpg";
import ueber04 from "../assets/ueber-04.png";

export default function Ueber() {
  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">
        {/* 布局参考参考图，三列网格，间距和参考图一致 */}
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* 左侧：两个小图，上下排列 */}
          <div className="flex flex-col gap-8">
            {/* 左上：ueber-05.jpg，加圆角，局部剪裁适配版式 */}
            <img 
              src={ueber05} 
              alt="Team Meeting" 
              className="w-full h-auto object-cover rounded-xl" 
            />
            {/* 左下：ueber-03.jpg，加圆角，局部剪裁适配版式 */}
            <img 
              src={ueber03} 
              alt="Team Work" 
              className="w-full h-auto object-cover rounded-xl" 
            />
          </div>

          {/* 中间：右侧的大图，高度适配左侧两个图的总高度，加圆角，局部剪裁适配版式 */}
          <div>
            <img 
              src={ueber04} 
              alt="Team Member" 
              className="w-full h-full object-cover rounded-xl" 
            />
          </div>

          {/* 最右侧：文字区域，左对齐，白色文字，垂直居中 */}
          <div className="w-96">
            {/* 小标题：字体和大小参考Projekt页面，白色文字，左对齐 */}
            <h2 className="font-serif text-6xl md:text-7xl font-light tracking-wide text-white uppercase mb-8">
              Architektur,<br/>Gemeinschaft<br/>und Verantwortung
            </h2>
            {/* 正文：分两段，字体和大小参考Projekt页面，白色文字，左对齐 */}
            <p className="text-white text-sm leading-normal mb-4">
              WerkQuartier ist eine Baugruppe aus Architekt, Fachplaner und Menschen mit einem gemeinsamen Verständnis für nachhaltiges und verantwortungsbewusstes Wohnen. Für das neue Stadtquartier Dietenbach entwickeln wir ein gemeinschaftliches Mehrfamilienhaus, das die Leitgedanken des Quartiers – sozial, ökologisch und nachhaltig – konsequent weiterführt. Unser Ziel ist es, qualitätsvollen Wohnraum zu schaffen, der moderne Architektur mit sozialem Miteinander und langfristiger Umweltverantwortung verbindet.
            </p>
            <p className="text-white text-sm leading-normal">
              Durch unsere fachlichen Hintergründe und interdisziplinären Erfahrungen legen wir besonderen Wert auf zukunftsfähige Planungs- und Energiekonzepte. Dazu gehören ressourcenschonende Bauweisen, der Einsatz nachhaltiger Materialien, energieeffiziente Gebäudetechnik sowie die Integration erneuerbarer Energien. Gleichzeitig verstehen wir Architektur nicht nur als gebauten Raum, sondern als Beitrag zu einer lebenswerten, offenen und generationenübergreifenden Nachbarschaft mit hoher sozialer und ökologischer Qualität.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
