import React from 'react';
import { NavLink } from 'react-router-dom'
import './menu.css'


export default () => {
    return (
        <div className="menu" >
            {/* <br /> */}
            <div >
                <img src={`${process.env.PUBLIC_URL}/homeicon.png`} width='210px' height='60px' alt='' />
                {/* ‘process.env.PUBLIC_URL’会返回公共文件夹的绝对路径 */}
            </div>
            <div className='menu-box'>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src={`${process.env.PUBLIC_URL}/frontpage.png`} alt='' />
                        </div>
                        <NavLink className={({ isActive }) => { return isActive ? 'menu-text menu-selected' : 'menu-text' }} to="/frontpage" >首页</NavLink>
                    </div>
                </div>
                <div className='dividing-line'></div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src={`${process.env.PUBLIC_URL}/originalworks.png`} alt='' />
                        </div>
                        <NavLink className={({ isActive }) => { return isActive ? 'menu-text menu-selected' : 'menu-text' }} to="/original" >原创</NavLink>
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src={`${process.env.PUBLIC_URL}/article.png`} alt='' />
                        </div>
                        <NavLink className={({ isActive }) => { return isActive ? 'menu-text menu-selected' : 'menu-text' }} to="/article" >文章</NavLink>
                    </div>
                </div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src={`${process.env.PUBLIC_URL}/video.png`} alt='' />
                        </div>
                        <NavLink className={({ isActive }) => { return isActive ? 'menu-text menu-selected' : 'menu-text' }} to="/video" >视频</NavLink>
                    </div>
                </div>
                <div className='dividing-line'></div>
                <div className='menu-bar'>
                    <div className='menu-text'>
                        <div className='menu-icon'>
                            <img src={`${process.env.PUBLIC_URL}/shop.png`} alt='' />
                        </div>
                        <NavLink className={({ isActive }) => { return isActive ? 'menu-text menu-selected' : 'menu-text' }} to="/shop" >开源</NavLink>
                    </div>
                </div>

            </div>
        </div>

    );
}

