import React from 'react'
import './videobar.css'

export default () => {
    const cardList = [{ tag: '有感而发', title: '暴力美学，美少女的血与枪', desc: '【风筝——梅津泰臣】', imgUrl: `${process.env.PUBLIC_URL}/kite.png`, webUrl: 'https://www.bilibili.com/video/BV1EK4y1w7rY/?spm_id_from=333.999.0.0' },
    { tag: '安利大帝', title: '「脚踏两只船“红玫瑰与白玫瑰”最终你会怎么选择？」', desc: '陶喆《爱我还是他》', imgUrl: `${process.env.PUBLIC_URL}/lovemeorhe.png`, webUrl: 'https://www.bilibili.com/video/BV1zh4y1Y7kM/?spm_id_from=333.999.0.0' },
    { tag: '知识挖掘机', title: '为什么我们注定会迷失？', desc: '阿尔贝·加缪', imgUrl: `${process.env.PUBLIC_URL}/camus.png`, webUrl: 'https://www.bilibili.com/video/BV1414y167in/?spm_id_from=333.999.0.0' },
    { tag: '安利大帝', title: '三岛的自杀是一个假面悖论', desc: '《丰饶之海》详解', imgUrl: `${process.env.PUBLIC_URL}/videomishima.png`, webUrl: 'https://www.bilibili.com/video/BV1Uu411A7pn/?spm_id_from=333.999.0.0' },
    { tag: '有感而发', title: '旷课、读博、搞钱！大作家如何从不喜欢的专业中出逃？', desc: '西方文学', imgUrl: `${process.env.PUBLIC_URL}/kafka.png`, webUrl: 'https://www.bilibili.com/video/BV1er4y1Z7Hb/?vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '《美国精神病人》深度分析', desc: '幻灭的英雄与消失的主体性', imgUrl: `${process.env.PUBLIC_URL}/american.png`, webUrl: 'https://www.bilibili.com/video/BV1Qe4y1P7ot/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '我在遥远的时代遇到了许多不同的人', desc: '亲爱的塞尔达', imgUrl: `${process.env.PUBLIC_URL}/zeldavideo.png`, webUrl: 'https://www.bilibili.com/video/BV1tm4y1v7kg/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '“一切障碍都在粉碎我”', desc: '卡夫卡的绝望之笔所传达出的希望', imgUrl: `${process.env.PUBLIC_URL}/kafkavideo.png`, webUrl: 'https://www.bilibili.com/video/BV1tM411M7Fk/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '【饥饿艺术家】', desc: '现代人的敏感和孤独是自作自受吗？(卡夫卡)', imgUrl: `${process.env.PUBLIC_URL}/odell.png`, webUrl: 'https://www.bilibili.com/video/BV1mo4y177Xp/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '卡夫卡的悖论式写作：演得越精彩，活得越荒谬', desc: '把饥饿和表演这两件风马牛不相及甚至完全悖谬的事情，编织进了这位饥饿艺术家的人生当中', imgUrl: `${process.env.PUBLIC_URL}/kafkazhou.png`, webUrl: 'https://www.bilibili.com/video/BV1Yo4y1J7ak/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '安利大帝', title: '把 Mac mini 用作家用服务器 | 入门教程 + 体验感受', desc: '将上手一只全新的基础版本 M2 Mac mini 并将其部署为家庭服务器', imgUrl: `${process.env.PUBLIC_URL}/macmini.png`, webUrl: 'https://www.bilibili.com/video/BV1mT41187DD/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '在神经症泛滥的时代，替弗洛伊德说点公道话', desc: '这是一期很纠结的视频，也终于正面提及了精神分析,听了别不开心', imgUrl: `${process.env.PUBLIC_URL}/heart.png`, webUrl: 'https://www.bilibili.com/video/BV1Ho4y1M74Z/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '【有趣的辩证法】', desc: '当我们谈论“有趣”时，我们在谈论什么？', imgUrl: `${process.env.PUBLIC_URL}/survive.png`, webUrl: 'https://www.bilibili.com/video/BV118411T7z1/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '安利大帝', title: '「谁在怀念例外状态？今年最应景的短篇小说《南方高速》', desc: '所有稳定都可以看做一种拥堵的结果，发展永远不够快，关系才被结构出来。', imgUrl: `${process.env.PUBLIC_URL}/south.png`, webUrl: 'https://www.bilibili.com/video/BV1D24y1D7pN/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '荒原狼的剧场手术：不要庸俗的自我和解', desc: '巴勃罗在等我，莫扎特也在等我', imgUrl: `${process.env.PUBLIC_URL}/wolf.png`, webUrl: 'https://www.bilibili.com/video/BV14V4y1W7JF/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '安利大帝', title: '黑塞的主奴辩证法：去当奴仆，向死而生', desc: '一节音乐课，解读两本没人看的黑塞小说', imgUrl: `${process.env.PUBLIC_URL}/hesse.png`, webUrl: 'https://www.bilibili.com/video/BV1g8411t7w8/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '再见，姜俊宇先生。', desc: '西方即日起，上海龙之队的传奇队长——Void选手将正式退役', imgUrl: `${process.env.PUBLIC_URL}/void.png`, webUrl: 'https://www.bilibili.com/video/BV1M84y1y7FC/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '知识挖掘机', title: '卡夫卡的《变形记》', desc: '小人物用什么对抗虚无？', imgUrl: `${process.env.PUBLIC_URL}/metamorphosis.png`, webUrl: 'https://www.bilibili.com/video/BV1SS4y1v7Dg/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '“实现自我”是不是特别了不起？', desc: '聊聊黑塞、契诃夫……和别的', imgUrl: `${process.env.PUBLIC_URL}/self.png`, webUrl: 'https://www.bilibili.com/video/BV15V411A7LA/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    { tag: '有感而发', title: '【昨日之歌】', desc: '喝一杯解不了渴的白开水，点一支能看见过往与记忆的香烟', imgUrl: `${process.env.PUBLIC_URL}/singyesterday.png`, webUrl: 'https://www.bilibili.com/video/BV1qK4y1x7VS/?spm_id_from=333.999.0.0&vd_source=58bc8fdec0ca471b517d9eab303e7887' },
    ]
    return (
        <div className="videobar-page-container" >
            <div className='ah-block'>
                <div className='container'>
                    <div className='ah-section'>
                        <div className='ah-title'>
                            视频
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
