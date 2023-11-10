import React from 'react'
import './original.css'

export default () => {
    const cardList = [
        { tag: '游戏简介', title: '《秋之回忆》游戏介绍', desc: 'KID“纯爱系”游戏的开山鼻祖', imgUrl: `${process.env.PUBLIC_URL}/memoriesoff.png`, webUrl: 'https://soulcuter.cn/creative-page/Memoriesoff.html' },
        { tag: '智能AI', title: '使用Vercel部署私人chatgpt', desc: '一个开源项目', imgUrl: `${process.env.PUBLIC_URL}/gptnextweb.png`, webUrl: 'https://chat.soulcuter.cn' },
        { tag: '个人博客', title: '使用github开源项目部署博客', desc: '仅需在notion修改即可同步到网页', imgUrl: `${process.env.PUBLIC_URL}/notionnext.png`, webUrl: 'https://notion.soulcuter.cn' },
        { tag: '个人网站', title: '一个react项目', desc: '放了很多喜欢的文章和视频', imgUrl: `${process.env.PUBLIC_URL}/xxplog.png`, webUrl: 'https://1ceyo.soulcuter.cn/build/index.html' },
    ]
    return (
        <div className="original-page-container" >
            <div className='ah-block'>
                <div className='container'>
                    <div className='ah-section'>
                        <div className='ah-title'>
                            原创
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

