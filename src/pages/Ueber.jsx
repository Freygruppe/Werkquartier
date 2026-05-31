/* =========================================
   🖼️ Über 页面
   ========================================= */
import { useTranslation } from 'react-i18next';
import ueber05 from "../assets/ueber-05.jpg";
import ueber03 from "../assets/ueber-03.jpg";
import ueber04 from "../assets/ueber-04.png";

export default function Ueber() {
  const { t } = useTranslation();

  return (
    <div className="bg-background text-white min-h-screen px-4 2xl:px-20 py-10 2xl:py-0">
      <section className="py-8 2xl:py-16">
        <div className="grid grid-cols-1 gap-6 items-start 2xl:grid-cols-3 2xl:gap-8 2xl:items-center">
          <div className="w-full flex flex-col gap-4 2xl:-ml-20 2xl:w-[110%] 2xl:scale-[0.92] 2xl:origin-top">
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

          <div className="w-full my-4 2xl:-ml-24 2xl:scale-[0.92] 2xl:origin-top">
            <img
              src={ueber04}
              alt="Team Member"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          <div className="w-full 2xl:w-96">
            <h2 
              className="font-serif text-2xl md:text-3xl 2xl:text-4xl font-light tracking-wide text-white uppercase mb-6 2xl:mb-8"
              dangerouslySetInnerHTML={{ __html: t('ueber.title') }} 
            />

            <p className="text-white text-sm leading-normal mb-6 2xl:mb-16">
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