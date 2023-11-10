import React from 'react'
import './introduction.css'

export default () => {
    return (
        <div className="introduction-page-container" >
            <img src={`${process.env.PUBLIC_URL}/cute.gif`} alt="欢迎" className='gif'></img>
            <div className='div-text'>
                欢迎来到我的网页！这是一个使用TypeScript、CSS和HTML编写的现代网页文章部分包括了各种主题，涵盖了最新的趋势、教程和深度洞察。我相信，这里的文章会满足您的求知欲，让您不断学习和发展。在视频库中，您将发现各种令人兴奋的视频内容。无论您是对娱乐、教育或灵感寻找，我的视频都将满足您的需求。坐下来，享受视觉和听觉的盛宴。而如果您是一个开发人员或对开源项目感兴趣，我们的开源项目页面将是您的天堂。在这里，您可以探索各种开源项目，了解它们的功能和贡献。或者，您也可以为这些项目做出自己的贡献。
            </div>
            <div className='div-blog'>
                <div className='div-blogtext'>
                    右侧链接是我为制作这个网页中所遇到的问题和解决方案时所写的博客，供为参考
                </div>
                <img src={`${process.env.PUBLIC_URL}/blogurl.png`} alt="欢迎" className='png'></img>
            </div>
        </div>
    )
}
