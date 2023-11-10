import React from 'react';
import './index.css'


export default () => {
    return (
        <div className="menu" >
            {/* <br /> */}
            <div >
                <img src={process.env.PUBLIC_URL + '/Gceores.svg'} width='210px' height='60px' alt='' />
                {/* ‘process.env.PUBLIC_URL’会返回公共文件夹的绝对路径 */}
            </div>
            <div className='menu-box'>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src='fontpage.png' alt='' />
                        </div>
                        首页
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        机组
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        资讯
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        博客
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src='article.png' alt='' />
                        </div>
                        文章
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src='video.png' alt='' />
                        </div>
                        视频
                    </div>
                </div>
                <div className='dividing-line'></div>

                <div className='menu-bar'>
                    <div className='menu-text'>
                        有声书
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src='shop.png' alt='' />
                        </div>
                        商店
                    </div>
                </div>
                <div className='dividing-line'></div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        原创作品
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        原创游戏
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        播单
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        专题
                    </div>
                </div>
                <div className='dividing-line'></div>

                <div className='menu-bar'>
                    <div className='menu-text'>
                        核聚变
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        GameJam 试玩
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        游戏创作招募
                    </div>
                </div>
            </div>
            <div className='menu-bar'>
                <div className='menu-text'>
                    下载机核 App
                </div>
            </div>
        </div>

    );
}

