/**
 * Created by Kaizhi Du on 2019/11/21.
 */
import React from 'react';
import { Media } from "react-bootstrap";
import tapSeries from "../../img/tap-series.png";
import superstar from "../../img/superstar.jpg";
import inspur from "../../img/inspur.png";

const ProfileExperience = () => {
    return (
        <div className="profile bg-light p-3">
            <div className='bg-light'>
                <div className='textSpace'>
                    <h2 className='text-secondary'>Experience</h2>
                    <br/>
                    <ul className="list-unstyled">
                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={tapSeries}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Tap Series</h5>
                                <p className='profileEducationDetail'>
                                    Full-stack Developer, Westlake,CA
                                </p>
                                <p>
                                    After I came to the United States to study, I used CPT (Current Procedural Terminology) to practice in Tap-series for three months as my intern. My job is to create an online course using React and use Python write a script to convert XML files to JSON files.                                </p>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={superstar}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Chaoxing</h5>
                                <p className='profileEducationDetail'>
                                    Full-stack Developer, Jinan,Shandong
                                </p>
                                <p>
                                    Chaoxing is a education enterprise. My project team is to implement a university back-office system. The module I am responsible for is the student graduation module. This is also the first time I have completed a module task independently. After that, I completed the presentation of the school curriculum and exported Excel functions. This has greatly improved me.                                </p>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={inspur}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Inspur</h5>
                                <p className='profileEducationDetail'>
                                    Back-end Developer, Jinan,Shandong
                                </p>
                                <p>
                                    This is my first job after graduating from college. Inspur is the largest software company in the region. My job is mainly responsible for the export of financial statements and the integration of weekly data. I am here to exercise the basic skills of programming and prepare for the work that follows.                                </p>
                            </Media.Body>
                        </Media>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileExperience