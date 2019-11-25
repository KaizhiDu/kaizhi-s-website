/**
 * Created by Kaizhi Du on 2019/11/21.
 */
import React from 'react';
import { Media } from "react-bootstrap";
import clu from '../../img/clu.jpg';
import cut from '../../img/cut.png';
import zqsz from '../../img/zqsz.jpg';

const ProfileEducation = () => {
    return (

        <div className="profile bg-light p-3">
            <div className='bg-light'>
                <div className='textSpace'>
                    <h2 className='text-secondary'>Education</h2>
                    <br/>
                    <ul className="list-unstyled">
                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={clu}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>California Lutheran University</h5>
                                <p className='profileEducationDetail'>
                                    Master's degree, Information Technology
                                </p>
                                <p>
                                    I chose CLU because it's IT major is very good. During my time at school, I learned a lot about IT, distributed systems, data warehousing, big data and other courses. And self-learning JS web development related knowledge, and AWS cloud data services.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={cut}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Changchun University of Technology</h5>
                                <p className='profileEducationDetail'>
                                    Bachelor's degree, Computer Science
                                </p>
                                <p>
                                    During my college time, I gradually learned a lot about web development. Mainly learn about Java. In the last year of the university, I was touched the spring framework. This gave me the basis of my work.
                                </p>
                            </Media.Body>
                        </Media>

                        <Media as="li">
                            <img
                                width={64}
                                height={64}
                                className="mr-3"
                                src={zqsz}
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5>Fourth middle school, Zhangqiu</h5>
                                <p className='profileEducationDetail'>
                                    High school
                                </p>
                                <p>
                                    In high school for three years, I have been searching for the value of my existence ,and my academic record is average. Fortunately, I finally got into college.
                                </p>
                            </Media.Body>
                        </Media>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileEducation