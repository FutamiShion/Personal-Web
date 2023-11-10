import React, { useEffect } from 'react'
import './global.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Menu from './components/Menu/index.tsx'
import Header from './components/Header/index.tsx'
import News from './components/Content/News/index.tsx'
import Follow from './components/Content/Follow/index.tsx'
import Introduction from './components/Content/Introduction/index.tsx'
import FrontPage from './components/Content/Frontpage/index.tsx'
import Article from './components/Content/Article/index.tsx'
import VideoBar from './components/Content/Videobar/index.tsx'
import Shop from './components/Content/Shop/index.tsx'
import Original from './components/Content/Original/index.tsx'



export default function App() {
    const navigate = useNavigate();
    useEffect(() => {
        // 在组件加载后触发导航到'/follow'
        navigate('/follow');
    }, []); // 空数组表示仅在组件加载时触发
    return (
        <div style={{ backgroundColor: '' }}>
            <Menu />
            <Header />
            <Routes >
                <Route path="/news" element={<News />} />
                <Route path="/follow" element={<Follow />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/frontpage" element={<FrontPage />} />
                <Route path="/original" element={<Original />} />
                <Route path="/article" element={<Article />} />
                <Route path="/video" element={<VideoBar />} />
                <Route path="/shop" element={<Shop />} />
            </Routes >
            {/* <News /> */}
        </div>

    )
}