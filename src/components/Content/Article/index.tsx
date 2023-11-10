import React from 'react'
import './styles.css'

export default () => {
    const cardList = [{ tag: '有感而发', title: '痛苦的升华：浅谈《过于喧嚣的孤独》', desc: '对于赫拉巴尔而言，《过于喧嚣的孤独》就是他的love story', imgUrl: `${process.env.PUBLIC_URL}/hrabal.png`, webUrl: 'https://www.gcores.com/articles/134351' },
    { tag: '安利大帝', title: '上帝选我做他的替罪羊', desc: '尼尔·盖曼的又一部精彩作品。', imgUrl: `${process.env.PUBLIC_URL}/neilman.png`, webUrl: 'https://www.gcores.com/articles/116733' },
    { tag: '知识挖掘机', title: '从机核聊起，讲讲好的设计', desc: '从我自己对机核设计的感受来和大家聊聊什么才是好的设计', imgUrl: `${process.env.PUBLIC_URL}/gceores.png`, webUrl: 'https://www.gcores.com/articles/132508' },
    { tag: '有感而发', title: '《潮骚》或三岛由纪夫的爱与欲', desc: '把绝对与相对，生与死，精神与肉体，理性与疯狂，绝望与快乐等观念融为表里一体', imgUrl: `${process.env.PUBLIC_URL}/mishima.png`, webUrl: 'https://www.gcores.com/articles/96820' },
    { tag: '红游睹思', title: '《INMOST》：关于痛苦的游戏，关于爱的故事', desc: '你还记得吗？那个关于痛苦的故事？我错了，那是一个关于爱的故事。', imgUrl: `${process.env.PUBLIC_URL}/inmost.png`, webUrl: 'https://www.gcores.com/articles/133083' },
    { tag: '工程师学习', title: '一站式 LLM底层技术原理入门指南', desc: '用于零基础入门大语言模型（Large Language Model, LLM)底层技术原理', imgUrl: `${process.env.PUBLIC_URL}/llm.png`, webUrl: 'https://s3tlxskbq3.feishu.cn/docx/NyPqdCKraoXz9gxNVCfcIFdnnAc' },
    { tag: '有感而发', title: '杂谈 | 漫画是如何描绘“小说家”这一形象的？', desc: '随意谈谈我对“小说家”的理解。也可当做漫画推荐类文章来看。', imgUrl: `${process.env.PUBLIC_URL}/rain.png`, webUrl: 'https://www.gcores.com/articles/110432' },
    { tag: '工程师学习', title: '年少的游戏厅', desc: '一个超级全的设计师知识库', imgUrl: `${process.env.PUBLIC_URL}/tuulih6pyq.png`, webUrl: 'https://tuulih6pyq.feishu.cn/wiki/AVhMwAP14iXVKxkc32ackfGInAc?table=tblRDWwExRzsy5TE&view=vewGwwbpzl' },
    { tag: '工程师学习', title: 'clean-code-javascript', desc: '一份关于如何在 JavaScript 中编写可读性强、可重用性高且易于重构的软件的指南。', imgUrl: `${process.env.PUBLIC_URL}/cleancode.png`, webUrl: 'https://github.com/ryanmcdermott/clean-code-javascript' },
    { tag: '知识挖掘机', title: '再见，三浦建太郎。再见，《剑风传奇》', desc: '5月20日这本应该充满爱与幸福的一天，我们却收获了一则突如其来的噩耗。', imgUrl: `${process.env.PUBLIC_URL}/berserk.png`, webUrl: 'https://www.gcores.com/articles/137572' },
    { tag: '安利大帝', title: '协力同心，其利断金！《双人成行》公布全新预告片', desc: '越看越好', imgUrl: `${process.env.PUBLIC_URL}/ittakestwo.png`, webUrl: 'https://www.gcores.com/articles/134782' },
    { tag: '知识挖掘机', title: '游戏展谈·《塞尔达》总结篇：系列故事线串讲', desc: '《塞尔达》故事线串讲', imgUrl: `${process.env.PUBLIC_URL}/zelda.png`, webUrl: 'https://www.gcores.com/articles/137454' },
    { tag: '工程师学习', title: '各知名科技公司技术博客合集', desc: '包括Meta、Google、AWS、Quora、Spotify、Instagram 等等，持续更新', imgUrl: `${process.env.PUBLIC_URL}/techblog.png`, webUrl: 'https://github.com/ryanmcdermott/clean-code-javascript' },
    { tag: '知识挖掘机', title: '《EVA》文化原型溯源解读（一）：预言、福音和末日', desc: '从预言书开始谈《EVA》的文化原型', imgUrl: `${process.env.PUBLIC_URL}/eva.png`, webUrl: 'https://www.gcores.com/articles/125099' },
    { tag: '工程师学习', title: 'Web Development for Beginners', desc: '提供的全面的 12 周课程，通过简单项目的方式学习前端基础知识', imgUrl: `${process.env.PUBLIC_URL}/webdevelopment.png`, webUrl: 'https://microsoft.github.io/Web-Dev-For-Beginners/#/' },
    { tag: '知识挖掘机', title: '法的隐喻', desc: '解读卡夫卡《在法的门前》', imgUrl: `${process.env.PUBLIC_URL}/kafkaphoto.png`, webUrl: 'https://zhuanlan.zhihu.com/p/430161985' },
    { tag: '活着', title: '《声之形》：真正的欺凌者，从来不会被简简单单的原谅', desc: '这是一部否定了他人痛苦的电影', imgUrl: `${process.env.PUBLIC_URL}/silentvoice.png`, webUrl: 'https://www.gcores.com/articles/92887' },
    { tag: '工程师学习', title: 'TypeScript 教程', desc: '很适合前端初学者看看，还是一如既然的通俗易懂', imgUrl: `${process.env.PUBLIC_URL}/tsstudy.png`, webUrl: 'https://wangdoc.com/typescript/' },
    { tag: '有感而发', title: '浅析《白色相簿2》TV版冬马和纱的角色演出设计', desc: '一个冬马党的自言自语', imgUrl: `${process.env.PUBLIC_URL}/touma.png`, webUrl: 'https://www.gcores.com/articles/132005' },
    { tag: '有感而发', title: '《剑风传奇》的内容探讨', desc: '现在的格里菲斯还能再度“洗白”吗？', imgUrl: `${process.env.PUBLIC_URL}/gurifisu.png`, webUrl: 'https://www.gcores.com/articles/107118' },
    ]
    return (
        <div className="article_page_container" >
            <div className='ah-block'>
                <div className='container'>
                    <div className='ah-section'>
                        <div className='ah-title'>
                            文章
                        </div>
                        <div className="both-card">
                            {
                                <ul>
                                    {cardList.map((card, index) => {
                                        return <li key={index}>
                                            <a href={card.webUrl} target="_blank">
                                                <img src={card.imgUrl} alt="" />
                                                <div className="card-inner" >
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

