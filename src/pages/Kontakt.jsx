/* =========================================
   🖼️ 导入图片和React状态
   ========================================= */
import { useState } from "react";
import { useTranslation } from 'react-i18next'; // 新增：引入多语言hook
import kontakt01 from "../assets/Kontakt-01.png";

export default function Kontakt() {
  const { t } = useTranslation(); // 新增：初始化翻译函数

  // 表单状态管理：移除了unternehmen字段
  const [formData, setFormData] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    nachricht: ""
  });

  // 处理输入变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 处理表单提交：自动打开邮件客户端发送到指定邮箱
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 构造邮件内容：所有文本都换成了多语言，跟着界面语言自动变
    const subject = t('kontakt.mail_subject');
    const body = `
${t('kontakt.mail_new')}

${t('kontakt.vorname')}: ${formData.vorname}
${t('kontakt.nachname')}: ${formData.nachname}
${t('kontakt.email')}: ${formData.email}
${t('kontakt.telefon')}: ${formData.telefon || "-"}

${t('kontakt.mail_nachricht')}:
${formData.nachricht}
    `.trim();

    // 构造mailto链接，自动填充所有内容
    const mailtoLink = `mailto:info@werkquartier-dietenbach.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // 打开默认邮件客户端
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-background text-white min-h-screen px-20 py-0">
      {/* section增加min-h-screen，让高度撑满整个内容区域，保证图片上下对齐导航栏和footer */}
      <section className="relative min-h-screen">
        {/* 左边的表单区域：保持占1/2页面宽度，内部改为flex居中布局 */}
        <div className="w-1/2 py-10 flex flex-col items-center">
          {/* 表单内容容器：宽度缩短为左半区域的80%，并在左半区域内水平居中 */}
          <div className="w-4/5">
            {/* 标题：换成多语言 */}
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
              {t('kontakt.title')}
            </h2>

            {/* 表单 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 第一行：Vorname 和 Nachname，label换成多语言 */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-300 mb-2">
                    {t('kontakt.vorname')}
                  </label>
                  <input
                    type="text"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleChange}
                    required
                    className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-sm text-gray-300 mb-2">
                    {t('kontakt.nachname')}
                  </label>
                  <input
                    type="text"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleChange}
                    required
                    className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors"
                  />
                </div>
              </div>

              {/* E-Mail，label换成多语言 */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  {t('kontakt.email')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors"
                />
              </div>

              {/* Telefon，label和Optional都换成多语言 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm text-gray-300">
                    {t('kontakt.telefon')}
                  </label>
                  <span className="text-xs text-gray-500">
                    {t('kontakt.optional')}
                  </span>
                </div>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors"
                />
              </div>

              {/* Nachricht，label换成多语言 */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  {t('kontakt.nachricht')}
                </label>
                <textarea
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors resize-none"
                />
              </div>

              {/* 新增：隐私提示小字，刚好在发送按钮上方，浅灰色 */}
              <p className="text-gray-400 text-xs mb-4">
                {t('kontakt.privacy_notice')}
              </p>

              {/* 提交按钮：文本换成多语言 */}
              <button
                type="submit"
                className="bg-[#4a5d54] hover:bg-[#3a4d44] text-white px-8 py-3 rounded transition-colors font-medium"
              >
                {t('kontakt.submit')}
              </button>
            </form>
          </div>
        </div>

        {/* 右边的图片：alt换成多语言 */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src={kontakt01} 
            alt={t('kontakt.alt_buro')} 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>
    </div>
  );
}