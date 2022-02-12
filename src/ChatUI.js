import React from 'react';
import '../src/css/style.css';
import '../src/js/main.js';
import '../src/js/all.js';

const ChatUI = () => {

    return (
        <>
            <div>
                <div className="sidebar1">

                    <section className="full-width-tinted">
                        <div className="logo-details">
                            <img src="./img/face-1.png" style={{
                                height: 45,
                                width: 45,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17 }}>Guest-12345</div>
                                    <div className="job" style={{ fontSize: 12 }}><span className="dot2"></span>&nbsp;Away</div>

                                </div>
                            </div>
                            <div className="icons">
                                <div >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                    <i className="fa-solid fa-bell"></i>
                                </div>
                            </div>
                            <i className='bx bx-menu' id="btn"></i>
                        </div>
                    </section>

                    <ul className="nav-list">

                        <li>
                            <a href="#">
                                <span className="links_name">
                                    <h1 style={{ fontSize: 28 }}>Contacts</h1>
                                </span>
                            </a>
                        </li>

                        <li>
                            <i className='bx bx-search'></i>
                            <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                        </li>
                        <li>
                            <a href="#">
                                <span >
                                    <h3 style={{ color: "rgb(150, 146, 146)" }}>A</h3>
                                </span>
                            </a>

                        </li>
                        <div className="logo-details">
                            <img src="./img/logo1.jpg" style={{
                                height: 35,
                                width: 35,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17, color: "black" }}>Darren Adams</div>
                                    <div className="job" style={{ fontSize: 12, color: "rgb(150, 146, 146)" }}><span className="dot"></span>&nbsp;I'm
                                        Available</div>
                                </div>
                            </div>

                        </div>
                        <div className="logo-details">
                            <img src="./img/logo2.jpg" style={{
                                height: 35,
                                width: 35,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17, color: "black" }}>Evelyn Allen</div>
                                    <div className="job" style={{ fontSize: 12, color: "rgb(150, 146, 146)" }}><span className="dot"></span>&nbsp;I'm
                                        Available</div>
                                </div>
                            </div>

                        </div>

                        <li>
                            <a href="#">
                                <span >
                                    <h3 style="color: rgb(150, 146, 146);">C</h3>
                                </span>
                            </a>

                        </li>
                        <div className="logo-details">
                            <img src="./img/logo3.jpg" style={{
                                height: 35,
                                width: 35,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17, color: "black" }}>Kun Chang-Min</div>
                                    <div className="job" style={{ fontSize: 12, color: "rgb(150, 146, 146)" }}><span className="dot1"></span>&nbsp;I'm
                                        Busy</div>
                                </div>
                            </div>

                        </div>
                        <div className="logo-details">
                            <img src="./img/face-1.png" style={{
                                height: 35,
                                width: 35,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17, color: "black" }}>Heather Clark</div>
                                    <div className="job" style={{ fontSize: 12, color: "rgb(150, 146, 146)" }}><span className="dot2"></span>&nbsp;I'm
                                        Away</div>
                                </div>
                            </div>

                        </div>

                        <div className="logo-details">
                            <img src="./img/logo1.jpg" style={{
                                height: 35,
                                width: 35,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17, color: "black" }}>Barbara Cotilla</div>
                                    <div className="job" style={{ fontSize: 12, color: "rgb(150, 146, 146)" }}><span className="dot"></span>&nbsp;I'm
                                        Available</div>
                                </div>
                            </div>

                        </div>


                        <li>
                            <a href="#">
                                <span >
                                    <h3 style={{ color: "rgb(150, 146, 146)" }}>D</h3>
                                </span>
                            </a>
                        </li>
                        <div className="logo-details">
                            <img src="./img/logo2.jpg" style={{
                                height: 35,
                                width: 35,
                                objectFit: "cover",
                                borderRadius: 26,
                                marginRight: 10
                            }} alt="profileImg" />
                            <div className="logo_name">
                                <div className="name_job">
                                    <div className="name" style={{ fontSize: 17, color: "black" }}>Gauthier Drewitt</div>
                                    <div className="job" style={{ fontSize: 12, color: "rgb(150, 146, 146)" }}><span className="dot2"></span>&nbsp;I'm
                                        Away</div>
                                </div>
                            </div>
                        </div>

                        <div className="logo-details">
                            <div className="footer">
                                <div >
                                    <i className="fa-solid fa-user-large" id="footerIcon"></i>
                                    <i className="fa-solid fa-phone" id="footerIcon"></i>
                                    <i className="fa-solid fa-message" id="footerIcon"></i>
                                    <i className="fa-solid fa-user-group" id="footerIcon"></i>
                                </div>
                            </div>
                        </div>

                    </ul>

                </div>
                <section className="home-section">
                    <div className="text">
                        <h1 style={{ marginTop: 18 }}>Select a chat to start messaging</h1>
                    </div>
                </section>
            </div>
        </>

    );
};

export default ChatUI;