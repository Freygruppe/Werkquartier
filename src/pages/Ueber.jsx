/* =========================================
   🖼️ Über 页面
   ========================================= */

import ueber05 from "../assets/ueber-05.jpg";
import ueber03 from "../assets/ueber-03.jpg";
import ueber04 from "../assets/ueber-04.png";

export default function Ueber() {
  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      <section className="py-16">

        <div className="grid grid-cols-3 gap-8 items-center">

          {/* 左侧：两个小图，上下排列（整体缩小8%） */}
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

          {/* 中间：主图（缩小8%） */}
          <div className="-ml-24 scale-[0.92] origin-top">
            <img
              src={ueber04}
              alt="Team Member"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* 右侧文字 */}
          <div className="w-96">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-8">
              Architektur,<br />
              Gemeinschaft<br />
              und Verantwortung
            </h2>

            <p className="text-white text-sm leading-normal mb-16">
              WerkQuartier ist eine Baugruppe aus Architekt:innen, Fachplaner:innen und engagierten Menschen mit einem gemeinsamen Verständnis für nachhaltiges und verantwortungsbewusstes Wohnen.
              Für das neue Stadtquartier Dietenbach bewerben wir uns um ein Grundstück, um dort gemeinsam ein Mehrfamilienhaus zu entwickeln, das die Leitgedanken des Quartiers – sozial, ökologisch und nachhaltig – konsequent weiterführt.
              Unser Ziel ist es, qualitätsvollen Wohnraum zu entwerfen, der moderne Architektur mit sozialem Miteinander und langfristiger Umweltverantwortung verbindet.
            </p>

            <p className="text-white text-sm leading-normal">
              Durch unsere fachlichen Hintergründe und interdisziplinären
              Erfahrungen legen wir besonderen Wert auf zukunftsfähige
              Planungs- und Energiekonzepte. Dazu gehören
              ressourcenschonende Bauweisen, der Einsatz nachhaltiger
              Materialien, energieeffiziente Gebäudetechnik sowie die
              Integration erneuerbarer Energien. Gleichzeitig verstehen wir
              Architektur nicht nur als gebauten Raum, sondern als Beitrag zu
              einer lebenswerten, offenen und generationenübergreifenden
              Nachbarschaft mit hoher sozialer und ökologischer Qualität.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}