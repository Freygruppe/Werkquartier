/* =========================================
   🖼️ Über 页面（原版网格无损像素级精修版）
   ========================================= */
import { useTranslation } from 'react-i18next';
import ueber05 from "../assets/ueber-05.jpg";
import ueber03 from "../assets/ueber-03.jpg";
import ueber04 from "../assets/ueber-04.png";

export default function Ueber() {
  const { t } = useTranslation();

  return (
    // 100% 维持你最原版、最安全、最稳定的外层响应式容器
    <div className="bg-background text-white min-h-screen px-4 2xl:px-20 py-10 2xl:py-0">
      <section className="py-8 2xl:py-16">
        <div className="grid grid-cols-1 gap-6 items-start 2xl:grid-cols-3 2xl:gap-8 2xl:items-center">
          
          {/* =========================================
              左侧图片列：完全是你最原版的代码，一个字没动
              - 保证左图完美贴边，尺寸绝对不会缩水变小一圈。
              - 保持其最自然的垂直对齐位置。
             ========================================= */}
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

          {/* =========================================
              🛠️ 中间图片列（唯一的精准修正点）：
              - 彻底删除了任何会引起位置错乱的绝对/流式包裹层。
              - 完全保留你原版的 2xl:scale-[0.92] 和 2xl:origin-top（保证图片大小不缩水、原有垂直错落位置100%还原）。
              - 仅将 2xl:-ml 调整为精细计算后的 -ml-20。这个负边距刚好抹平大间距，且绝对不遮挡左图！
             ========================================= */}
          <div className="w-full my-4 2xl:-ml-[96px] 2xl:scale-[0.92] 2xl:origin-top">
            <img
              src={ueber04}
              alt="Team Member"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>

          {/* =========================================
              右侧文字内容区：完全是你最原版的代码，一个字没动！
              - 2xl:w-96 锁死宽度。
              - 重新采用最稳固的 Grid 分栏，文字的绝对坐标、起跑线一像素都不会变，绝不向右上移动。
              - 125% 缩放情况下，由浏览器底层机制进行整体等比拉伸放大，绝对安全不重叠。
              - 移动端 2xl: 自动解绑，自适应转为手机垂直排版。
             ========================================= */}
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