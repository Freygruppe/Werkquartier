/* =========================================
   🖼️ 导入图片和React状态
   ========================================= */
import { useState } from "react";
import kontakt01 from "../assets/Kontakt-01.png";

export default function Kontakt() {
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
    
    // 构造邮件内容：移除了Unternehmen相关行
    const subject = "Kontaktanfrage von WerkQuartier Website";
    const body = `
Neue Kontaktanfrage:

Vorname: ${formData.vorname}
Nachname: ${formData.nachname}
E-Mail: ${formData.email}
Telefon: ${formData.telefon || "-"}

Nachricht:
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
            {/* 标题：字号缩小2个等级，从text-5xl md:text-6xl调整为text-3xl md:text-4xl */}
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white uppercase mb-10">
              Kontakt aufnehmen
            </h2>

            {/* 表单 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 第一行：Vorname 和 Nachname */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm text-gray-300 mb-2">Vorname</label>
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
                  <label className="block text-sm text-gray-300 mb-2">Nachname</label>
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

              {/* E-Mail */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">E-Mail Adresse</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors"
                />
              </div>

              {/* Telefon */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm text-gray-300">Telefon</label>
                  <span className="text-xs text-gray-500">Optional</span>
                </div>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors"
                />
              </div>

              {/* Nachricht */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">Nachricht</label>
                <textarea
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-panel border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4a5d54] transition-colors resize-none"
                />
              </div>

              {/* 提交按钮：和参考图一样的绿色样式，匹配我们网站的主题色 */}
              <button
                type="submit"
                className="bg-[#4a5d54] hover:bg-[#3a4d44] text-white px-8 py-3 rounded transition-colors font-medium"
              >
                Abschicken
              </button>
            </form>
          </div>
        </div>

        {/* 右边的图片：保持1/2页面宽度，高度撑满整个section，实现顶部对齐导航栏、底部对齐footer */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img 
            src={kontakt01} 
            alt="Kontakt Büro" 
            className="w-full h-full object-cover" 
          />
        </div>
      </section>
    </div>
  );
}
