/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 👈 React 全部生效范围
  ],

  theme: {
    extend: {
      /* =========================
         🎨 全局颜色系统（黑白建筑风）
         ========================= */
      colors: {
        primary: "#ffffff",      // 主文字
        background: "#111111",   // 主背景（深黑）
        panel: "#1a1a1a",        // 卡片/模块背景
        muted: "#a1a1a1",        // 次级文字
        accent: "#ffffff",       // 强调色（保持极简白系）
      },

      /* =========================
         ✍️ 字体系统
         ========================= */
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },

      /* =========================
         📐 间距系统优化
         ========================= */
      spacing: {
        128: "32rem",
        144: "36rem",
      },

      /* =========================
         🌫️ 阴影（轻工业风）
         ========================= */
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.5)",
      },
    },
  },

  plugins: [],
};