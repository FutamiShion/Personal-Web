import React from 'react'
import './shop.css'

export default () => {
    const cardList = [{ tag: '工程师工具', title: 'qwerty-learner', desc: '一个为键盘工作者设计的单词与肌肉记忆锻炼软件', imgUrl: `${process.env.PUBLIC_URL}/qwerty.png`, webUrl: 'https://github.com/RealKai42/qwerty-learner' },
    { tag: '工程师工具', title: 'AgentVerse', desc: '简化了为大型语言模型创建自定义多智能体环境的过程,比如说让 AI 来模拟囚徒困境', imgUrl: `${process.env.PUBLIC_URL}/agentVerse.png`, webUrl: 'https://github.com/OpenBMB/AgentVerse' },
    { tag: '工程师工具', title: 'CasaOS', desc: '简单、易用的开源个人云系统,页面做得很简洁精致易用', imgUrl: `${process.env.PUBLIC_URL}/casaos.png`, webUrl: 'https://github.com/IceWhaleTech/CasaOS' },
    { tag: '工程师工具', title: 'SaaSPo', desc: '从页面网址设计本身，包括登陆、定价、产品、博客、关于、顾问、联系方式等场景的设计参考获取灵感', imgUrl: `${process.env.PUBLIC_URL}/saaspo.png`, webUrl: 'https://www.saaspo.com/' },
    { tag: '工程师工具', title: 'TomatoBar', desc: '一个好用的番茄钟效率软件', imgUrl: `${process.env.PUBLIC_URL}/tomatobar.png`, webUrl: 'https://github.com/ivoronin/TomatoBar' },
    { tag: '工程师工具', title: 'ActivityWatch', desc: '一个自动追踪你在设备上花费时间的免费开源工具', imgUrl: `${process.env.PUBLIC_URL}/activitywatch.png`, webUrl: 'https://github.com/ActivityWatch/activitywatch' },
    { tag: '工程师工具', title: 'FindMyCat', desc: '一个很精致的软硬件宠物跟踪的开源产品,从硬件设计、3D 打印，到软件引擎、iOS 应用、云配置', imgUrl: `${process.env.PUBLIC_URL}/findmycat.png`, webUrl: 'https://www.findmycat.io/docs' },
    { tag: '工程师学习', title: 'Redesign Design Systemlearner', desc: '重新设计你的设计系统，包括如何创建、记录、维护你的设计系统组件，从研究->设计->建设->发布', imgUrl: `${process.env.PUBLIC_URL}/designsystems.png`, webUrl: 'https://redesigningdesign.systems/component-process/getting-started.html' },
    { tag: '工程师学习', title: 'Modern CSS Solutions', desc: '教你写出现代 CSS 的专题,写出奇妙的效果', imgUrl: `${process.env.PUBLIC_URL}/modern.png`, webUrl: 'https://moderncss.dev/' },
    { tag: '工程师工具', title: 'Awesome-Selfhosted', desc: '在自己的服务器上托管和管理应用程序，包括自动化、博客平台、通信能力、内容管理、监控、API 管理', imgUrl: `${process.env.PUBLIC_URL}/selfhosted.png`, webUrl: 'https://awesome-selfhosted.net/' },
    { tag: '工程师工具', title: 'Open Interpreter', desc: '在本地实现开源的 OpenAI 的代码解释器。', imgUrl: `${process.env.PUBLIC_URL}/open.png`, webUrl: 'https://github.com/KillianLucas/open-interpreter' },
    { tag: '工程师工具', title: 'responsively', desc: '一个开源免费的网页响应式测试工具，适用于所有 Web 开发者，能够让你的工作轻松很多', imgUrl: `${process.env.PUBLIC_URL}/responsively.png`, webUrl: 'https://responsively.app/' },
    { tag: '工程师工具', title: 'HTML/URL To Markdown', desc: '可以很好的把网页转换成 Markdown 格式存储,同时也支持用 HTML 的方式来转换', imgUrl: `${process.env.PUBLIC_URL}/markdown.png`, webUrl: 'https://devtool.tech/html-md' },
    { tag: '工程师工具', title: 'I Miss My Bar', desc: '相比其他的白噪音工具多了不少情趣，调酒师的工作、与他人交谈、雨滴拍打在窗户上等音效', imgUrl: `${process.env.PUBLIC_URL}/imissmybar.png`, webUrl: 'http://imissmybar.com/' },
    { tag: '工程师工具', title: 'Lottie', desc: '设计师只需要用 AE 做好动画用插件导出 JSON，技术可以像引一张图片地址那样简单来使用动画', imgUrl: `${process.env.PUBLIC_URL}/lottie.png`, webUrl: 'https://airbnb.design/lottie/' },
    { tag: '工程师工具', title: 'useAnimations', desc: '，底层使用 Lottie 的方式来渲染，格式类比于 JSON 描述 + SVG，效果很细腻', imgUrl: `${process.env.PUBLIC_URL}/useanimations.png`, webUrl: 'https://useanimations.com/index.html' },
    { tag: '工程师工具', title: 'Whisky', desc: '为 Wine 提供了一个干净且易于使用的图形界面，基于 CrossOver 22.1.1 和 Game Porting Toolkit 构建的。', imgUrl: `${process.env.PUBLIC_URL}/whisky.png`, webUrl: 'https://github.com/Whisky-App/Whisky' },
    { tag: '工程师工具', title: 'Upscayl', desc: '开源免费的图片 AI 放大工具,对于自动化场景你可以调用 real-esrgan-ncnn-vulkan 命令行工具来进行', imgUrl: `${process.env.PUBLIC_URL}/upscayl.png`, webUrl: 'https://github.com/upscayl/upscayl' },
    { tag: '工程师工具', title: 'Sweep is an AI junior developer', desc: 'Github 安装以后，自动阅读你的 issue，包括功能或 Bug', imgUrl: `${process.env.PUBLIC_URL}/sweepai.png`, webUrl: 'https://github.com/sweepai/sweep' },
    { tag: '工程师工具', title: 'Web-Check', desc: '可以查看一个网站几乎所有信息，如 IP 信息、SSL、DNS记录、Cookies、域名信息,很hacker', imgUrl: `${process.env.PUBLIC_URL}/webcheck.png`, webUrl: 'https://web-check.xyz/' },
    ]
    return (
        <div className="shop-page-container" >
            <div className='ah-block'>
                <div className='container'>
                    <div className='ah-section'>
                        <div className='ah-title'>
                            开源
                        </div>
                        <div className="both-card">
                            {
                                <ul>
                                    {cardList.map((card, index) => {
                                        return <li key={index}>
                                            <a href={card.webUrl} target="_blank">
                                                <img src={card.imgUrl} alt="" />
                                                <div className="card-inner">
                                                    <div className="card-info">
                                                        <a href="xxx">{card.tag}</a>
                                                        <div className='card-title'>
                                                            <h3>{card.title}</h3>
                                                            <p className='card-desc'>{card.desc}</p>
                                                            <div className="card-avatar">

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    })}
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

