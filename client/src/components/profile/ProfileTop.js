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
                        thumbnail
                        width={250}
                        height={200}
                        className="mr-4"
                        src={profileMe}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='text-left profileText'>
                        <h1>KAIZHI DU</h1>
                        <h5>Web Developer</h5>
                        <p>
                            I am a Web Developer with 2 years Java development experience. So I have a certain
                            understanding of web development. After coming to the United States, I learned about
                            JavaScript and I hope to find work related to Java or JavaScript. I am not a very
                            talented person, but I am very sure of my diligence and integrity.
                        </p>
                    </Media.Body>
                </Media>
            </div>
            <div className="text-center icons my-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-globe fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube fa-2x"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram fa-2x"></i>
                </a>
            </div>
        </div>
    )
}

export default ProfileTop