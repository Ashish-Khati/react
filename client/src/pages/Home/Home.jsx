import React, { useState } from 'react'
import "./Home.css"
import Header from '../../component/Header/Header'
import Sidebar from '../../component/Sidebar/Sidebar'
import CreateSharpIcon from '@mui/icons-material/CreateSharp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import axios from "axios";

import { useLocation } from 'react-router-dom';
import { Route, Link, Routes, useParams } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CipherMap from '../../component/CipherMap/CipherMap';
const Home = () => {
    let [buttonText, setButtonText] = useState('Edit')
    let [buttonText1, setButtonText1] = useState('Edit')
    let [buttonText2, setButtonText2] = useState('Edit')
    let [disableValue, setIsDisable] = useState('false')
    let [disableValue1, setIsDisable1] = useState('false')
    let [disableValue2, setIsDisable2] = useState('false')
    let [displayValue, setIsDisplay] = useState('none')
    let [displayValue3, setIsDisplay3] = useState('none')
    let [displayValue4, setIsDisplay4] = useState('none')
    let [image, setimage] = useState("")
    const [credentials5, setCredentials5] = useState({
        aboutme: undefined

    })
    const handleChange5 = (e) => {
        setCredentials5(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
    const params = useParams();

    console.log(params);

    // console.log(result.data.fname);

    const myFunction = async () => {
        const result = await axios.post(`http://localhost:8080/update/${params.id}`, credentials5);

    }



    const location = useLocation();

    console.log();
    const [color, setColor] = useState("");
    function ConvertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setimage(reader.result)
        }
        reader.onerror = error => {
            console.log("error: ", error);
        }
    }

    let [interestValue, setInterestValue] = useState(["Hello", "world"])
    let [selectedValue, isSelected] = useState('false');
    const selectData = (e) => {
        if (!selectedValue) {
            isSelected('true');
            setInterestValue([...interestValue, e.target.value]);
            console.log("hhhh")
            console.log(e.value);
            console.log(interestValue)
        }
        else
            isSelected('false')

    }
    const selectData1 = () => {

    }
    const changeDisplay = () => {
        if (displayValue === 'none')
            setIsDisplay('block');
    }
    const changeDisplay4 = () => {
        if (displayValue4 === 'none')
            setIsDisplay4('block');
    }
    const cancelorBtn = () => {
        setIsDisplay4('none')
    }
    const cancelBtn = () => {
        setIsDisplay('none')
    }
    const saveBtn = (e) => {

    }
    const saviourBtn = (e) => {
        setColor(e.target.value);
    }
    const changeText = (e) => {
        e.preventDefault()
        if (buttonText === 'Edit') {
            setButtonText('Save');
            setIsDisable(!disableValue)


        }
        else {
            setButtonText('Edit');
            setIsDisable(!disableValue)
            myFunction()

        }
    }
    const changeText1 = (e) => {
        e.preventDefault()
        if (buttonText1 === 'Edit') {
            setButtonText1('Save');
            setIsDisable1(!disableValue1)


        }
        else {
            setButtonText1('Edit');
            setIsDisable1(!disableValue1)
        }
    }

    const changeText2 = () => {
        if (buttonText2 === 'Edit') {
            setButtonText2('Save');
            setIsDisable2(!disableValue2)


        }
        else {
            setButtonText2('Edit');
            setIsDisable2(!disableValue2)
        }
    }

    return (
        <div>
            <Header />
            <div className='div'>
                <Sidebar />
                <div className="left">
                    <div className="left1">
                        <div className="img">

                            <img src={image} alt="" />
                            <label className="label" htmlFor="file" >
                                <CreateSharpIcon className='ic' />
                            </label>

                            <div className='details'>
                                <h2>Hello,</h2>
                                <h1>{location.state.fname} {location.state.lname}</h1>
                                <h3>{location.state.email}</h3>
                                <input type="file" id="file" onChange={ConvertToBase64} style={{ display: "none" }} />
                            </div>

                            <h2 className='followers'>0 Followers</h2>

                        </div>
                    </div>

                    <div className='l'>
                        <div className="lefty">
                            <div className="left2">
                                <div className="about">
                                    <h3>ABOUT ME</h3>
                                    <button className='btn' onClick={changeText}>{buttonText}</button>
                                </div>
                                <div className='txtarea' >
                                    <textarea className='txt'
                                        rows={9}
                                        cols={160}
                                        id="aboutme"
                                        placeholder={location.state.aboutme}
                                        disabled={disableValue}
                                        onChange={handleChange5}
                                    />
                                </div>

                                <hr size="0.5" />
                            </div>

                               <div className="ciphermap-div">
                               <CipherMap/>
                               </div>
                               <hr className='ciphermap-hr' size="0.5" />


                            <div className="left3">
                                <div className="web">
                                    <h3>ON THE WEB</h3>
                                    <button className='btn' onClick={changeText2}>{buttonText2}</button>
                                </div>
                                <div className='form'>
                                    <div className="div1">
                                        <div className="linkedin">
                                            <h4>Linkedin</h4>
                                            <div className="iconic">

                                                <i class="fa-brands fa-linkedin fav"></i>
                                                <input type="text" id="f1" placeholder={location.state.linkedin} disabled={disableValue2} />
                                            </div>

                                        </div>
                                        <div className="facebook">
                                            <h4>Facebook</h4>

                                            <div className="iconic">
                                                <FacebookRoundedIcon className='face' />
                                                <input type="text" id="f3" placeholder={location.state.facebook} disabled={disableValue2} />
                                            </div>
                                        </div>
                                        <div className="instagram">
                                            <h4>Instagram</h4>
                                            <div className="iconic">
                                                <i class="fa-brands fa-instagram fav"></i>
                                                <input type="text" id="f3" placeholder={location.state.instagram} disabled={disableValue2} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="div2">
                                        <div className="github">
                                            <h4>Github</h4>
                                            <div className="iconic">
                                                <GitHubIcon className='face' />

                                                <input type="text" id="f4" placeholder={location.state.github} disabled={disableValue2} />
                                            </div>
                                        </div>
                                        <div className="twitter">
                                            <h4>Twitter</h4>
                                            <div className="iconic">
                                                <i class="fa-brands fa-square-twitter fav"></i>
                                                <input type="text" id="f5" placeholder={location.state.twitter} disabled={disableValue2} />
                                            </div>
                                        </div>
                                        <div className="website">
                                            <h4>Website</h4>
                                            <div className="iconic">
                                                <LanguageOutlinedIcon className='face' />

                                                <input type="text" id="f6" placeholder={location.state.website} disabled={disableValue2} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <hr size="0.5" />

                            </div>


                            <div className="left4">
                                <div className="pesonal">
                                    <h3>PERSONAL INFORMATION</h3>
                                    <button className='btn' onClick={changeText1}>{buttonText1}</button>
                                </div>
                                <div className='form'>
                                    <div className="div1">
                                        <div className="higheducation">
                                            <h4>Highest Education</h4>




                                            <select className='iconic decorated' id="f7" disabled={disableValue1}>
                                                <option className='header-5' value="Primary">Primary</option>
                                                <option className='header-5' value="Secondary">Secindary</option>
                                                <option className='header-5' value="Higher Secondary">Higher Secondary</option>
                                                <option className='header-5' value="Graduation">Graduation</option>
                                                <option className='header-5' value="Post Graduation">Post Graduation</option>
                                            </select>

                                        </div>
                                    </div>

                                    <div className="div2">
                                        <div className="currentstudy">
                                            <h4>What do you do currently?</h4>



                                            <select className='iconic decorated' id="f8" disabled={disableValue1} >
                                                <option className='header-5' value="Primary">Primary</option>
                                                <option className='header-5' value="Secondary">Secindary</option>
                                                <option className='header-5' value="Higher Secondary">Higher Secondary</option>
                                                <option className='header-5' value="Graduation">Graduation</option>
                                                <option className='header-5' value="Post Graduation">Post Graduation</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                                <hr size="0.5" />

                            </div>

                            <div className="left4">

                                <div className="passcont" style={{ display: displayValue4 }}>
                                    <div className="info" >
                                        <h6>Current Password</h6>
                                        <input type="password" class="pass" name="password" placeholder='Current Password' />
                                        <h6>New Password</h6>
                                        <input type="password" class="pass" name="password"
                                            onChange={setColor} placeholder='New Password' />
                                        <h6>Confirm Password</h6>
                                        <input type="password" class="pass" name="password" placeholder='Confirm Password' />
                                    </div>
                                    <div className="for_btn">

                                        <button className='sav' onClick={saviourBtn}>Save</button>
                                        <button className='can' onClick={cancelorBtn}>Cancel</button>
                                    </div>
                                </div>
                                <div className="pesonal">
                                    <h3>PASSWORD & SECURITY</h3>
                                    <button className='btn' onClick={changeDisplay4}>Change</button>
                                </div>
                                <div className='form'>
                                    <div className="div1">
                                        <div className="higheducation">
                                            <h4>Password</h4>
                                            <input type="text" id="f9" placeholder="***************" disabled="true" />
                                        </div>
                                    </div>



                                </div>
                                <hr size="0.5" />

                            </div>

                            <div className="left5">
                                <div className="intrest_cont" style={{ display: displayValue }}>
                                    <div className="first_div">
                                        <button onClick={selectData} name="app_development" value='App Development' className='first_div-1'>App Development</button>
                                        <button onClick={selectData} name="web_development" value='Web Development' className='first_div-2'>Web Development</button>
                                    </div>

                                    <div className="first_div">
                                        <div onClick={selectData1} name="game_development" value='Game Development' className='first_div-1'>Game Development</div>
                                        <div onClick={selectData1} name="data_structures" value='Data Structures' className='first_div-2'>Data Structures</div>
                                    </div>
                                    <div className="first_div">
                                        <div onClick={selectData1} name="programming" value='Programming' className='first_div-1'> Programming</div>
                                        <div onClick={selectData1} name="machine_learning" value='Machine Learning' className='first_div-2'>Machine Learning</div>
                                    </div>
                                    <div className="first_div">
                                        <div onClick={selectData1} name="data_science" value='Data Science' className='first_div-1'>Data Science</div>
                                        <div onClick={selectData1} name="others" value='Others' className='first_div-2'>Others</div>
                                    </div>
                                    <div className="for_btn">

                                        <button className='sav' onClick={saveBtn}>Save</button>
                                        <button className='can' onClick={cancelBtn}>Cancel</button>
                                    </div>

                                </div>
                                <div className="pesonal">
                                    <h3>INTRESTS</h3>
                                    <button className='btn' onClick={changeDisplay}>Edit</button>
                                </div>
                                <div className='intrest'>

                                    <div className="div4">
                                        Data Science
                                    </div>
                                    <div className="div4">
                                        Data Structures
                                    </div>
                                    <div className="div4">
                                        Web Development
                                    </div>
                                    <div className="div4">
                                        others
                                    </div>
                                    <div className="div4">
                                        Machine Learning
                                    </div>
                                    <div className="div4">
                                        Programming
                                    </div>
                                    <div className="div4">
                                        Game Development
                                    </div>
                                    <div className="div4">
                                        App Development
                                    </div>

                                    {/* {interestValue.map((val, index) => {
                                        return (<>
                                            <div key={index} className='div4'>{val}</div>
                                        </>)
                                    })} */}

                                </div>


                            </div>


                        </div>

                        <div className="righty">

                            <div className="i1 hov">

                                <DashboardIcon className="i2" />
                                <p>Dashboard</p>
                            </div>

                            <div className="i1 yellow_col">
                                <Person2RoundedIcon className="i2" />

                                <p>Profile</p>
                            </div>

                            <div className="i1 hov">
                                <LibraryBooksIcon className="i2" />

                                <p>Courses</p>
                            </div>

                            <div className="i1 hov">

                                <MenuBookRoundedIcon className="i2" />
                                <p>Wishlist</p>
                            </div>

                            <div className="i1 hov">

                                <ThumbUpOffAltRoundedIcon className="i2" />
                                <p>Liked Videos</p>
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default Home
