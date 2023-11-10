import React from 'react'
import './frontpage.css'

export default () => {
    const articleList = [{ tag: '安利大帝', title: '协力同心，其利断金！《双人成行》公布全新预告片', desc: '越看越好', imgUrl: `${process.env.PUBLIC_URL}/ittakestwo.png`, webUrl: 'https://www.gcores.com/articles/134782' },
    { tag: '知识挖掘机', title: '游戏展谈·《塞尔达》总结篇：系列故事线串讲', desc: '《塞尔达》故事线串讲', imgUrl: `${process.env.PUBLIC_URL}/zelda.png`, webUrl: 'https://www.gcores.com/articles/137454' },
    { tag: '工程师学习', title: '各知名科技公司技术博客合集', desc: '包括Meta、Google、AWS、Quora、Spotify、Instagram 等等，持续更新', imgUrl: `${process.env.PUBLIC_URL}/techblog.png`, webUrl: 'https://github.com/ryanmcdermott/clean-code-javascript' },
    { tag: '知识挖掘机', title: '《EVA》文化原型溯源解读（一）：预言、福音和末日', desc: '从预言书开始谈《EVA》的文化原型', imgUrl: `${process.env.PUBLIC_URL}/eva.png`, webUrl: 'https://www.gcores.com/articles/125099' },]
    const videoList = [{ tag: '安利大帝', title: '「谁在怀念例外状态？今年最应景的短篇小说《南方高速》', desc: '所有稳定都可以看做一种拥堵的结果，发展永远不够快，关系才被结构出来。', imgUrl: `${process.env.PUBLIC_URL}/south.png`, webUrl: 'https://www.bilibili.com/video/BV1D24y1D7pN/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '荒原狼的剧场手术：不要庸俗的自我和解', desc: '巴勃罗在等我，莫扎特也在等我', imgUrl: `${process.env.PUBLIC_URL}/wolf.png`, webUrl: 'https://www.bilibili.com/video/BV14V4y1W7JF/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '安利大帝', title: '黑塞的主奴辩证法：去当奴仆，向死而生', desc: '一节音乐课，解读两本没人看的黑塞小说', imgUrl: `${process.env.PUBLIC_URL}/hesse.png`, webUrl: 'https://www.bilibili.com/video/BV1g8411t7w8/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '再见，姜俊宇先生。', desc: '西方即日起，上海龙之队的传奇队长——Void选手将正式退役', imgUrl: `${process.env.PUBLIC_URL}/void.png`, webUrl: 'https://www.bilibili.com/video/BV1M84y1y7FC/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },]
    const shopList = [{ tag: '工程师工具', title: 'responsively', desc: '一个开源免费的网页响应式测试工具，适用于所有 Web 开发者，能够让你的工作轻松很多', imgUrl: `${process.env.PUBLIC_URL}/responsively.png`, webUrl: 'https://responsively.app/' },
    { tag: '工程师工具', title: 'HTML/URL To Markdown', desc: '可以很好的把网页转换成 Markdown 格式存储,同时也支持用 HTML 的方式来转换', imgUrl: `${process.env.PUBLIC_URL}/markdown.png`, webUrl: 'https://devtool.tech/html-md' },
    { tag: '工程师工具', title: 'I Miss My Bar', desc: '相比其他的白噪音工具多了不少情趣，调酒师的工作、与他人交谈、雨滴拍打在窗户上等音效', imgUrl: `${process.env.PUBLIC_URL}/imissmybar.png`, webUrl: 'http://imissmybar.com/' },
    { tag: '工程师工具', title: 'Lottie', desc: '设计师只需要用 AE 做好动画用插件导出 JSON，技术可以像引一张图片地址那样简单来使用动画', imgUrl: `${process.env.PUBLIC_URL}/lottie.png`, webUrl: 'https://airbnb.design/lottie/' },]
    const originalList = [{ tag: '游戏简介', title: '《秋之回忆》游戏介绍', desc: 'KID“纯爱系”游戏的开山鼻祖，奠定秋之回忆系列之后的开发方向', imgUrl: `${process.env.PUBLIC_URL}/memoriesoff.png`, webUrl: 'https://soulcuter.cn/creative-page/Memoriesoff.html' },
    { tag: '智能AI', title: '使用Vercel部署私人chatgpt', desc: '仅仅是一个开源项目', imgUrl: `${process.env.PUBLIC_URL}/gptnextweb.png`, webUrl: 'https://chat.soulcuter.cn' },
    { tag: '个人博客', title: '使用github开源项目部署博客', desc: '仅需在notion修改即可同步到网页', imgUrl: `${process.env.PUBLIC_URL}/notionnext.png`, webUrl: 'https://notion.soulcuter.cn' },
    { tag: '个人网站', title: '一个react项目', desc: '放了很多喜欢的文章和视频', imgUrl: `${process.env.PUBLIC_URL}/xxplog.png`, webUrl: 'https://1ceyo.soulcuter.cn/build/index.html' },
    ]
    return (
        <div className="frontpage-page-container" >
            <div className='ah-block'>
                <div className='container'>
                    <div className='ah-section'>
                        <div className='ah-title'>
                            文章
                        </div>
                        <div className="both-card">
                            {
                                <ul>
                                    {articleList.map((card, index) => {
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
                    <div className='ah-section'>
                        <div className='ah-title'>
                            视频
                        </div>
                        <div className="both-card">
                            {
                                <ul>
                                    {videoList.map((card, index) => {
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
                    <div className='ah-section'>
                        <div className='ah-title'>
                            开源
                        </div>
                        <div className="both-card">
                            {
                                <ul>
                                    {shopList.map((card, index) => {
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
                    <div className='ah-section'>
                        <div className='ah-title'>
                            原创
                        </div>
                        <div className="both-card">
                            {
                                <ul>
                                    {originalList.map((card, index) => {
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


