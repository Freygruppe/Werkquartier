import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 新增：引入路由（导航栏/页面跳转需要）
import './index.css'
import './i18n' // 新增：引入多语言配置文件（核心）
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 新增：包裹BrowserRouter，保证路由和多语言正常工作 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)