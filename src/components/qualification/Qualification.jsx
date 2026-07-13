import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id='qualification'>
            <h2 className="about_title">Qualification </h2>
            <span className="about_subtitle">My Personal Journey</span>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon">Education</i>
                    </div>
                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon">Experience</i>
                    </div>
                </div>
                <div className="qualification_sections">
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content "}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">MSc Software Technology</h3>
                                <span className="qualification_subtitle">St Aloysius(Deemed to be university)</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2025-Present</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">BSc Computer Science</h3>
                                <span className="qualification_subtitle">Swamy Saswathikananda Vidya Mandir</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2022-2025</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Plus Two</h3>
                                <span className="qualification_subtitle">Sree Saraswathi Vidya Mandir</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2020-2022</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">SSLC</h3>
                                <span className="qualification_subtitle">Vivekananda Vidya Mandir</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2019-2020</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content "}>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web Development Intern</h3>
                                <span className="qualification_subtitle">ShadowFox</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2025</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Web Development Intern</h3>
                                <span className="qualification_subtitle">Prodigy InfoTech</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt">2025</i>
                                </div>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification