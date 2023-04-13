import React, { useState } from 'react'
import "./Header.css";
import CreateIcon from '@mui/icons-material/Create';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
const Header = () => {
    let [displayValue1, setIsDisplay1] = useState('none')
    // let [colorwhite, setcolorwhite] = useState('black')
    // const colorchange = () => {
    //     if (colorwhite === 'false')
    //         setcolorwhite('true');
    //     else
    //         setcolorwhite('false');
    // }

    const changeDisplay = () => {
        if (displayValue1 === 'none')
            setIsDisplay1('block');
    }
    const cancelBtn1 = () => {
        setIsDisplay1('none')
    }

    return (
        <div className='header' >


            <div className="header1">
                <a href="https://www.cipherschools.com/courses">

                    <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" className='navlogo' />

                    <h2>CipherSchools</h2>

                </a>

                <div className="cipher">
                    <ExploreOutlinedIcon className='icon1' />
                    <h2>Browse</h2>
                    <KeyboardArrowDownIcon className='icon2' onClick={changeDisplay} />
                    <div className="container" style={{ display: displayValue1 }}>
                        <div className="header-6" onClick={cancelBtn1}>App Development</div>
                        <div className="header-6" onClick={cancelBtn1}>Game Development</div>
                        <div className="header-6" onClick={cancelBtn1}>Data Structures</div>
                        <div className="header-6" onClick={cancelBtn1}>Programming</div>
                        <div className="header-6" onClick={cancelBtn1}>Machine Learning</div>
                        <div className="header-6" onClick={cancelBtn1}>Data Science</div>
                        <div className="header-6" onClick={cancelBtn1}>Others</div>

                    </div>

                </div>
            </div>
            <div className="header2">
                <div className="search_bar">
                    <div className="icon3">
                        <SearchOutlinedIcon className='icon3' />
                    </div>

                    <input
                        type="text"
                        id="header-search"
                        placeholder="Search and Learn" />
                    <div className="icon3">
                        <DragIndicatorOutlinedIcon className='icon3' />
                    </div>
                </div>
                <div className="notification">
                    <NotificationsNoneIcon />
                    <div className="counter">0</div>
                </div>

                <img src="https://png.pngtree.com/svg/20170518/274aed119e.png" className='navlogo1' />

                <img src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" className='navlogo2' />
                <div className="counter1">
                    0
                </div>

                <label>
                    <input type="checkbox" id="toggle" />
                    <span />
                </label>
            </div>
        </div>



    )
}

export default Header
