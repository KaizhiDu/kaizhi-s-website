/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import { Media } from "react-bootstrap";
import profileMe from "../../img/profile_me.jpg";

const ProfileTop = () => {
    return (
        <div className="profile bg-light p-3">
            <div className='bg-light'>
                <Media>
                    <img
                        width={220}
                        height={200}
                        className="mr-4"
                        src={profileMe}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='text-left profileText'>
                        <h1>KAIZHI DU</h1>
                        <h5>Web Developer</h5>
                        <p>
                            Masters Student in Information Technology, dedicated to learning in the Software Developmentfield, specializing in JavaScript, React, jQuery on front-end and Java, Node, Spring, MySQL,MongoDB on back-end.
                        </p>
                    </Media.Body>
                </Media>
            </div>
            <div className="text-center icons my-2">
                <a href="https://twitter.com/KaizhiD" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="https://github.com/KaizhiDu" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/kaizhi-du-1588a8181/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/kaizhidu/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default ProfileTop