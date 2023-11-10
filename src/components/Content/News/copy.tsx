import React, { Component } from 'react'
import './index.css'

export default class Index extends Component {
    render() {
        return (
            <div className="page-container" >
                <div className='ah-block'>
                    <div className='container'>
                        <img src='booom.png' alt='' />
                        <img src='mortalkombat.png' alt='' style={{ transform: 'translate(17px , 0)', }} />
                        <img src='cynerpunk.png' alt='' style={{ float: 'right', }} />
                        <div className='ah-section'>
                            <div className='ah-title'>
                                精选
                            </div>
                            <div className="both-card">
                                {<ul>
                                    <li>
                                        <img src="monkeygame.png" alt="" />
                                        <div className="card-inner">
                                            <div className="card-info">
                                                <a href="xxx">特别企划</a>
                                                <div className='card-title'>
                                                    <h3>今年最佳游戏？你这《金刚》看着不太正经啊</h3>
                                                    <p className='card-desc'>报仇，必须报仇</p>
                                                    <div className="card-avatar">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="gameplace.png" alt="" />
                                        <div className="card-inner">
                                            <div className="card-info">
                                                <a href="xxx">出去走走</a>
                                                <div className='card-title'>
                                                    <h3>往日回忆如潮水袭来！打卡上海烈火老式街机厅</h3>
                                                    <p className='card-desc'>听完节目，勾起了我探店的欲望</p>
                                                    <div className="card-avatar">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="monkey.png" alt="" />
                                        <div className="card-inner">
                                            <div className="card-info">
                                                <a href="xxx">红游思睹</a>
                                                <div className='card-title'>
                                                    <h3>「译介」小岛秀夫谈《金刚：骷髅岛》如何复兴怪兽电影</h3>
                                                    <p className='card-desc'>《骷髅岛》重新定义了怪兽电影</p>
                                                    <div className="card-avatar">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='last'>
                                        <img src="number.png" alt="" />
                                        <div className="card-inner">
                                            <div className="card-info">
                                                <a href="xxx">知识挖掘机</a>
                                                <div className='card-title'>
                                                    <h3>引擎技术漫游指南：有理数与编码</h3>
                                                    <p className='card-desc'>当初就是差了那么一个小数点儿！然后火箭就炸了！</p>
                                                    <div className="card-avatar">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                        <iframe className='chatgpt' title='chatgpt' src="http://chat.soulcuter.cn" ></iframe>
                    </div>
                </div>
            </div>
        )
    }
}
