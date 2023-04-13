import React, { useState } from 'react'
import "./Follower.css"
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'
const Follower = () => {



    return (
        <div >
            <Header />
            <div className='div'>
                <Sidebar />
                <div className="user_following">
                    <h2>Users Following You</h2>

                    <div className="big_div">



                        <div className="card">
                            <div className="img">
                                <img src="https://i.redd.it/3qn242wpuwn11.jpg" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Shiva</h1>
                                <h4>College Student</h4>
                                <h5>50000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>


                        <div className="card">
                            <div className="img">
                                <img src="https://th.bing.com/th/id/OIP.w0cGkdTZUpPAd5PFGTNQ7gHaOt?pid=ImgDet&w=1762&h=3499&rs=1" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Krishna</h1>
                                <h4>Professor</h4>
                                <h5>5000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>


                        <div className="card">
                            <div className="img">
                                <img src="https://th.bing.com/th/id/OIP.UGlKxiZQylR3CnJIXSbFIAHaLL?pid=ImgDet&rs=1" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Brahma</h1>
                                <h4>College Student</h4>
                                <h5>1000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Ram</h1>
                                <h4>College Student</h4>
                                <h5>3000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="https://purepng.com/public/uploads/large/purepng.com-men-in-suitmanpeoplepersonsmalesuit-1121525121426f88dk.png" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Vishnu</h1>
                                <h4>College Student</h4>
                                <h5>50000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F36%2F2b%2F362bfe503b67d3929f51662789a7526141d3c4fc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Parvati</h1>
                                <h4>College Student</h4>
                                <h5>100000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="https://th.bing.com/th/id/OIP.lfq10Y4d1zOMcd_dvEw80AAAAA?pid=ImgDet&rs=1" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Kali</h1>
                                <h4>Professor</h4>
                                <h5>10000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="img">
                                <img src="https://th.bing.com/th/id/R.4605ed8c9e3fc51b9e10b2dd6f12ce20?rik=aZ2yLVFO1OyHmg&riu=http%3a%2f%2fwww.ourcampaigns.com%2fimages%2fcandidates%2fb29%2fFullC29090D0000-00-00.jpg&ehk=P0ESTGrvSqGCQLvNiVo78DQrqieUMiY3inqTflXf5sA%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            </div>
                            <div className="other_details">
                                <h1>Saraswati</h1>
                                <h4>College Student</h4>
                                <h5>100000 followers</h5>
                                <button className='btn1'>Follow</button>
                            </div>
                        </div>




















                    </div>

                </div>
            </div>

        </div>
    )
}

export default Follower
