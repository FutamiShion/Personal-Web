import React from 'react'
import { Swiper, Toast } from 'antd-mobile'
import './index.css'

export default () => {
    /* const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']
    const text = ['红色', '蓝色', '青色', '黑色'] */
    const allItems = [{ backgroundImage: `url(${process.env.PUBLIC_URL}/eva.png)`, text: '初号机' }, { backgroundImage: `url(${process.env.PUBLIC_URL}/touma.png)`, text: '东马和纱' }, { backgroundImage: `url(${process.env.PUBLIC_URL}/gurifisu.png)`, text: '格里菲斯' }, { backgroundImage: `url(${process.env.PUBLIC_URL}/void.png)`, text: '姜俊宇' }]
    const items = allItems.map((allItem, index) => (
        <Swiper.Item key={index}>
            <div
                className='content'
                style={{ backgroundImage: allItem.backgroundImage }}
                onClick={() => {
                    Toast.show(`图中的角色是${allItem.text}`)
                }}
            >
                {/* {allItem.text} */}
            </div>
        </Swiper.Item>
    ))
    const cardList = [{ tag: '红游睹思', title: '《INMOST》：关于痛苦的游戏，关于爱的故事', desc: '你还记得吗？那个关于痛苦的故事？我错了，那是一个关于爱的故事。', imgUrl: `${process.env.PUBLIC_URL}/inmost.png`, webUrl: 'https://www.gcores.com/articles/133083' },
    { tag: '工程师工具', title: 'Open Interpreter', desc: '在本地实现开源的 OpenAI 的代码解释器。', imgUrl: `${process.env.PUBLIC_URL}/open.png`, webUrl: 'https://github.com/KillianLucas/open-interpreter' },
    { tag: '安利大帝', title: '黑塞的主奴辩证法：去当奴仆，向死而生', desc: '一节音乐课，解读两本没人看的黑塞小说', imgUrl: `${process.env.PUBLIC_URL}/hesse.png`, webUrl: 'https://www.bilibili.com/video/BV1g8411t7w8/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '从机核聊起，讲讲好的设计', desc: '从我自己对机核设计的感受来和大家聊聊什么才是好的设计', imgUrl: `${process.env.PUBLIC_URL}/gceores.png`, webUrl: 'https://www.gcores.com/articles/132508' },
    ]
    return (
        <div className="news-page-container" >
            <div className='ah-block'>
                <div className='container'>
                    <img src={`${process.env.PUBLIC_URL}/booom.png`} alt='' />
                    <img src={`${process.env.PUBLIC_URL}/mortalkombat.png`} alt='' style={{ transform: 'translate(17px , 0)', }} />
                    <img src={`${process.env.PUBLIC_URL}/cynerpunk.png`} alt='' style={{ float: 'right', }} />
                    <div className='ah-section'>
                        <div className='ah-title'>
                            精选
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
                    <Swiper autoplay={true} loop >{items}</Swiper>
                </div>
            </div>
        </div>
    )
}
