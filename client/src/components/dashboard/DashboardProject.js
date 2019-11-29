/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import { CardDeck, Card } from "react-bootstrap";
import community from "../../img/project/community.jpg";
import erp from "../../img/project/erp.png";
import personWeb from "../../img/project/personWeb.jpg";

const DashboardProject = () => {
    return (
        <CardDeck>
            <Card className="project">
                <Card.Img variant="top" src={personWeb} height='150px'/>
                <Card.Body>
                    <Card.Title>
                        <a href="https://github.com/KaizhiDu/kaizhi-s-website" target="_blank">Person Webpage</a>
                    </Card.Title>
                    <Card.Text>
                        After I finished the course of react + node by Brad Traversy and Stephen Grider, I decided to
                        combine the advantages of both to develop my own personal webpage, which is the page you are
                        currently browsing.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">javascript, react, node, express, mongoDB, mongoose</small>
                </Card.Footer>
            </Card>
            <Card className="project">
                <Card.Img variant="top" src={community} height='150px'/>
                <Card.Body>
                    <Card.Title>
                        <a href="https://github.com/KaizhiDu/community" target="_blank">Programmer Blog System</a>
                    </Card.Title>
                    <Card.Text>
                        Since I have a habit of taking notes, I developed a blog that supports markdown format, supports
                        comments and likes
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">javascript, java, springboot, mysql, mybatis</small>
                </Card.Footer>
            </Card>
            <Card className="project">
                <Card.Img variant="top" src={erp} height='150px'/>
                <Card.Body>
                    <Card.Title>
                        <a href="https://github.com/KaizhiDu/Bingzheng-Mechanical-Management-System" target="_blank">Bingzheng
                            Machinery Management System</a>
                    </Card.Title>
                    <Card.Text>
                        My father does mechanical product processing. Due to the company's growth and business growth, a
                        management software is needed to manage the company. I bought a general machine management
                        software before, but it is not suitable for company use. So I developed a software based on my
                        father's request.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">javascript, java, spring, mysql, mybatis</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default DashboardProject