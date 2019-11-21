/**
 * Created by Kaizhi Du on 2019/11/18.
 */
import React, { Fragment } from 'react';
import { Row, Col } from "react-bootstrap";
import DashboardProfile from "./DashboardProfile";
import DashboardJavaNote from "./DashboardJavaNote";
import DashboardJSNote from "./DashboardJSNote";
import DashboardProject from "./DashboardProject";
import { Link } from "react-router-dom";

const dashboard = () => {

    return (
        <Fragment>
            <br/>
            <Row>
                <Col><DashboardProfile/></Col>
                <Col><DashboardJavaNote/></Col>
                <Col><DashboardJSNote/></Col>
            </Row>
            <hr/>

            <Row>
                <h2>My Project</h2>
                <small className='ProjectClick'>
                    <Link to='/project' className='text-muted' style={{ textDecoration: 'none' }}>
                        click here
                    </Link>
                </small>
                <DashboardProject/>
            </Row>
            <br/>
        </Fragment>
    )
}

export default dashboard;