import React, { useState } from 'react';
import './Cv.css';
// import Image from '../../assert/photo.jpg';
import Button from '../Button/button';
import Heading from '../Heading/heading';
import { GrFormClose } from 'react-icons/gr';


function Cv() {
    const [dispersonal, setdispersonal] = useState(false);
    const [careerObj, setcareerObj] = useState(false);
    const [academics, setacademics] = useState(false);
    const [techskill, settechskill] = useState(false);
    const [project, setproject] = useState(false);
    const [extra, setextra] = useState(false);
    const [soft, setsoft] = useState(false);
    const [strength, setstrength] = useState(false);
    const [beit, setbeit] = useState(false);
    const [hsc, sethsc] = useState(false);
    const [ssc, setssc] = useState(false)

    const perInfoHandler = () => {
        setdispersonal(!dispersonal);
        setcareerObj(false);
        setacademics(false);
        settechskill(false);
        setproject(false);
        setextra(false);
        setsoft(false);
        setstrength(false);
    }

    const careerObjHandler = () => {
        setcareerObj(!careerObj);
        setdispersonal(false);
        setacademics(false);
        settechskill(false);
        setproject(false);
        setextra(false);
        setsoft(false);
        setstrength(false);
    }
    const academicsHandler = () => {
        setacademics(!academics);
        settechskill(false);
        setdispersonal(false);
        setcareerObj(false);
        setproject(false);
        setextra(false);
        setsoft(false);
        setstrength(false);
    }
    const techskillHandler = () => {
        settechskill(!techskill);
        setacademics(false);
        setdispersonal(false);
        setcareerObj(false);
        setproject(false);
        setextra(false);
        setsoft(false);
        setstrength(false);
    }

    const projectHandler = () => {
        setproject(!project);
        setacademics(false);
        settechskill(false);
        setdispersonal(false);
        setcareerObj(false);
        setextra(false);
        setsoft(false);
        setstrength(false);

    }
    const extraHandler = () => {
        setextra(!extra);
        setacademics(false);
        setproject(false);
        settechskill(false);
        setdispersonal(false);
        setcareerObj(false);
        setsoft(false);
        setstrength(false);
    }
    const softHandler = () => {
        setsoft(!soft);
        setacademics(false);
        setextra(false);
        setproject(false);
        settechskill(false);
        setdispersonal(false);
        setcareerObj(false);
        setstrength(false);
    }
    const strengthHandler = () => {
        setstrength(!strength);
        setacademics(false);
        setsoft(false);
        setextra(false);
        setproject(false);
        settechskill(false);
        setdispersonal(false);
        setcareerObj(false);
    }
    const beitHandler = () => {
        setbeit(!beit);
        sethsc(false);
        setssc(false);
    }
    const hscHandler = () => {
        setbeit(false);
        sethsc(!hsc);
        setssc(false);
    }
    const sscHandler = () => {
        setbeit(false);
        sethsc(false);
        setssc(!ssc);
    }
    return (
        <div className='main'>
            <h1> My Resume</h1>
            {!dispersonal ?
                <div className='personalInfo'>
                    <Heading heading={'Personal Info'} />
                    <Button click={perInfoHandler} btnName={'See'} />
                </div> : null
            }
            {dispersonal ?
                <div className='personalInfo1'>
                    <div>
                        <Heading heading={'Personal Info'} />
                        < GrFormClose
                            onClick={() => { setdispersonal(!dispersonal) }}
                            style={{
                                fontSize: '1.5em',
                                marginTop: '10px',
                            }}
                        />
                    </div>

                    <p>Name : Aniket Anant Warang</p>
                    <p>Email Id : aniket111awa@gmail.com</p>
                    <p>Mobile No : 7021619064</p>
                    <p>Date of Birth : 11 / 7 / 1996</p>
                    <p>Nationality : Indian</p>
                    <p>Hobbies : Play Cricket</p>

                </div> : null
            }
            { !careerObj ?
                <div className='careerObjectives' >
                    <Heading heading={'Career Objectives'} />
                    <Button click={careerObjHandler} btnName={'See'} />
                </div> : null
            }
            {careerObj ?
                <div className={'careerObjectives1'}>
                    <div>
                        <Heading heading={'Career Objectives'} />
                        < GrFormClose
                            onClick={() => { setcareerObj(!careerObj) }}
                            style={{
                                fontSize: '1.5em',
                                marginTop: '10px',
                            }}
                        />
                    </div>
                    <p>To work with organization which provides me the opportunity
                    to improve my skills and knowledge to grow along with the organization
                    objectives.
                    </p>
                </div> : null
            }
            {!academics ?
                <div className='academics'  >
                    <Heading heading={'Academics'} />
                    <Button btnName={'See'} click={academicsHandler} />
                </div> : null
            }
            {
                academics ?
                    <div className={'academics1'}>
                        <div>
                            <Heading heading={'Academics'} />
                            < GrFormClose
                                onClick={() => { setacademics(!academics) }}
                                style={{
                                    fontSize: '1.5em',
                                    marginTop: '10px',
                                }}
                            />
                        </div>
                        <div style={{
                            alignItems: 'center',
                            paddingBottom: '20px',
                            paddingLeft: '-25px',
                        }} className={'buttonDiv'}>
                            <Button btnName={'B.E.I.T'} click={beitHandler} />
                            <Button btnName={'HSC'} click={hscHandler} />
                            <Button btnName={'SSC'} click={sscHandler} />
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            {
                                beit ?
                                    <div className={'studies'}>
                                        <p>College : St.John(palghar)</p>
                                        <p>Year of passing : 2018</p>
                                        <p>Percentage : 6.83 CGPA</p>
                                    </div> : null
                            }
                            {
                                hsc ?
                                    <div className={'studies'}>
                                        <p>College : Nirmala (kandiwali)</p>
                                        <p>Year of passing : 2014</p>
                                        <p>Percentage : 60.15 %</p>
                                    </div> : null
                            }
                            {
                                ssc ?
                                    <div className={'studies'}>
                                        <p>School : R.C Patel High School (borivali)</p>
                                        <p>Year of Passing : 2012</p>
                                        <p>Percentage : 74.95 %</p>
                                    </div> : null
                            }
                        </div>
                    </div> : null
            }
            {!techskill ?
                <div className='technicalSkils' >
                    <Heading heading={'Technical Skils'} />
                    <Button click={techskillHandler} btnName={'See'} />
                </div> : null
            }

            {techskill ?
                <div className='technicalSkils1'>
                    <div>
                        <Heading heading={'Technical Skils'} />
                        < GrFormClose
                            onClick={() => { settechskill(!techskill) }}
                            style={{
                                fontSize: '1.5em',
                                marginTop: '10px',
                            }}
                        />
                    </div>
                    <p>Languages : C++, Core Java, Python, Sql, HTML, CSS/Bootstrap.</p>
                    <p>Application Tool : IDE(Eclips), VS Code.</p>
                    <p>Database : MySql, Mongo DB, MongoDB Atlas.</p>
                    <p> Web development : using Html, Css, React.js.</p>

                </div> : null
            }
            { !project ?
                <div className='projects' >
                    <Heading heading={'Projects'} />
                    <Button click={projectHandler} btnName={'See'} />
                </div> : null
            }
            { project ?
                <div className='projects1'>
                    <div>
                        <Heading heading={'Project'} />
                        < GrFormClose
                            onClick={() => { setproject(!project) }}
                            style={{
                                fontSize: '1.5em',
                                marginTop: '10px',
                            }}
                        />
                    </div>
                    <h3>Second year project : Shopping Website.</h3>
                    <p>Shopping website on Electronic devices.</p>
                    <p>Tech Used : HTML, CSS, PHP for login And registeration,
                    Bootstrap for front end, SQL for DB.
                    </p>
                    <h3>Thirf year Project : Android App on viewing online courses.</h3>
                    <p>Tech Used : Android, Java, C++, PHP etc.</p>
                    <h3>Final year project : Recomendation System.</h3>
                    <p>Tech Used : Python and Jupyter. And did Content and Collaboration
                        based filteing, Trained dataset of hollywhood movie. </p>
                </div> : null

            }
            { !extra ?
                <div className='extraCurricular' >
                    <Heading heading={'Extra Curricular'} />
                    <Button click={extraHandler} btnName={'See'} />
                </div> : null
            }
            {
                extra ?
                    < div className='extraCurricular1'>
                        <div>
                            <Heading heading={'Extra Curricular'} />
                            < GrFormClose
                                onClick={() => { setextra(!extra) }}
                                style={{
                                    fontSize: '1.5em',
                                    marginTop: '10px',
                                }}
                            />
                        </div>
                        <p>Java Workshop.</p>
                        <p>Python Workshop.</p>
                        <p>Android Workshop.</p>
                        <p>Web Designing Workshop.</p>
                    </div> : null
            }
            { !soft ?
                <div className='softSkills' >
                    <Heading heading={'Soft Skills'} />
                    <Button click={softHandler} btnName={'See'} />
                </div> : null
            }
            {
                soft ?
                    < div className='softSkills1'>
                        <div>
                            <Heading heading={'Soft Skills'} />
                            < GrFormClose
                                onClick={() => { setsoft(!soft) }}
                                style={{
                                    fontSize: '1.5em',
                                    marginTop: '10px',
                                }}
                            />
                        </div>
                        <p>Good in communication.</p>
                        <p>Can work in group.</p>
                        <p>Better Understanding.</p>
                    </div> : null
            }
            { !strength ?
                <div className='strengths' >
                    <Heading heading={'Strengths'} />
                    <Button click={strengthHandler} btnName={'See'} />
                </div> : null
            }
            {
                strength ?
                    < div className='strengths1'>
                        <div>
                            <Heading heading={'Strength'} />
                            < GrFormClose
                                onClick={() => { setstrength(!strength) }}
                                style={{
                                    fontSize: '1.5em',
                                    marginTop: '10px',
                                }}
                            />
                        </div>
                        <p>Good in learning new tech.</p>
                        <p>Supportive.</p>
                        <p>Can work under pressure.</p>
                    </div> : null
            }
        </div>
    )
}

export default Cv
