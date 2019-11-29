/**
 * Created by Kaizhi Du on 2019/11/28.
 */
import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import LanguageProficiency from "./Proficiency/LanguageProficiency";
import DatabaseProficiency from "./Proficiency/DatabaseProficiency";
import FrameworkProficiency from "./Proficiency/FrameworkProficiency";

const ProfileProficiency = () => {

    const [ proficiency, setProficiency ] = useState("Language");

    return (
        <div className="profile bg-light p-3">
            <div className='bg-light'>
                <div className='textSpace'>
                    <h2 className='text-secondary'>Proficiency</h2>
                </div>
                <Dropdown className="text-right">
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {proficiency}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => {
                            setProficiency("Language")
                        }}>Language</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setProficiency("Framework")
                        }}>Framework</Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            setProficiency("Database")
                        }}>Database</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {proficiency === "Language" && (
                    <div className="text-center">
                        <LanguageProficiency/>
                    </div>
                )}
                {proficiency === "Framework" && (
                    <div className="text-center">
                        <FrameworkProficiency/>
                    </div>
                )}
                {proficiency === "Database" && (
                    <div className="text-center">
                        <DatabaseProficiency/>
                    </div>
                )}
            </div>
        </div>
    )
};

export default ProfileProficiency