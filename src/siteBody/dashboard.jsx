import React, {useEffect, useRef} from "react";
import './dashboard.css';

import { FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";

function DashboardFunc() {

    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.4;
        }
    }, []);

    // React qismi bilan ishlash
    return (
        <div className="dashboardContainr">

            {/* Background qismi bilan ishlash */}
            <video ref={videoRef} autoPlay loop muted playsInline className="video-background">
                <source src={require('../imgVideos/background.mp4')} type="video/mp4"/>
                Sizning brauzeringiz videoni qo'llab-quvvatlamaydi.
            </video>
            <div className="content">
                {/* Sizning dasturnizning kontenti shu yerda bo'ladi */}
            </div>

            {/* Saytning ichki qismi bilan ishlash */}
            <div className="main-text-part">

                {/* Messangers link */}
                <div className="main-site-part-of-links">

                    <div className="sindicate-text-part">
                        <h2 className="sindicate-text">
                            Спортивные товары Ташкент
                        </h2>
                    </div>

                    {/* Telegram link parts */}
                    <div className="messangers-link-part">
                        <a href="https://t.me/sindicat_sport_1" target="_blank" className="messanger-link">
                            <div className="in-button-part">
                                <div className="link-icons">
                                    <FaTelegramPlane className="messanger-icon telegram-icon"/>
                                </div>
                                <div className="link-text">
                                    Telegram
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Instagram link parts */}
                    <div className="messangers-link-part">
                        <a href="https://www.instagram.com/sindicat_sport?igsh=MTZmMW94M3l6aTBlMg==" target="_blank"
                           className="messanger-link">
                            <div className="in-button-part">
                                <div className="link-icons">
                                    <FaInstagram className="messanger-icon instagram-icon"/>
                                </div>
                                <div className="link-text">
                                    Instagram
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Facebook link parts */}
                    <div className="messangers-link-part">
                        <a href="https://www.facebook.com/sindicat.sport?mibextid=ZbWKwL" target="_blank"
                           className="messanger-link">
                            <div className="in-button-part">
                                <div className="link-icons">
                                    <FaFacebook className="messanger-icon facebook-icon"/>
                                </div>
                                <div className="link-text">
                                    Facebook
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Phone numbers */}
                    <div className="phone-numbers-part">
                        <h3 className="phone-numbers">
                            ☎️+998339303939
                            ☎️+998909303939
                        </h3>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default DashboardFunc;