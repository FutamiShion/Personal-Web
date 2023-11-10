import React from 'react'
import { NavLink } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import './header.css'

export default () => {
    return (
        < div className='header-bar' >
            <div className='header-main'>
                <div className='main-prime'>
                    <div className='change-button'>
                        <img src={`${process.env.PUBLIC_URL}/change.png`} alt="" />
                    </div>
                    <div className='header-search'>
                        <div className='search-main'>
                            <div className='main-icon'>
                                <img src={`${process.env.PUBLIC_URL}/search.png`} alt="" />
                            </div>
                            <div className='main-text'>
                                <input type='text' className='form-control' placeholder='欢迎来到我的网页'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='header-button'>
                    <NavLink className={({ isActive }) => { return isActive ? 'button-tag1 button-tag2' : 'button-tag1' }} to="/follow">AI</NavLink>
                    <NavLink className={({ isActive }) => { return isActive ? 'button-tag1 button-tag2' : 'button-tag1' }} to="/news">精选</NavLink>
                    {/* <Button color='primary' fill='outline'>
                        Out
                    </Button> */}
                </div>
                <div className='header-user'>
                    <div className='user-login'>
                        {/* <button className='button-tag4'>网站简介</button> */}
                        <NavLink className={({ isActive }) => { return isActive ? 'button-tag4 button-tag4' : 'button-tag4' }} to="/introduction">网站简介</NavLink>
                    </div>
                    <div className='user-member'>
                        <button className='button-tag3' onClick={() => { Toast.show('欢迎来到1ceyo的个人网站') }}>1ceyo</button>
                    </div>
                </div>
            </div>
        </div >
    )
}