/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React, { Fragment } from 'react';
import { CardDeck, Card, Row } from "react-bootstrap";
import carInsurance from '../../img/project/carInsurance.jpg';
import community from '../../img/project/community.jpg';
import emaily from '../../img/project/emaily.jpg';
import erp from '../../img/project/erp.png';
import personWeb from '../../img/project/personWeb.jpg';
import profile from '../../img/project/profile.jpg';
import eshopping from '../../img/eshopping.png';
import mongame from '../../img/mongame.png';

const Project = () => {
  return (
    <Fragment>
      <Row>
        <br/>
        <CardDeck>
          <Card className="project">
            <Card.Img variant="top" height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href=""> To be determined</a>
              </Card.Title>
              <Card.Text>
                Next step I want to complete a project that is closer to real life, which will takes time to plan and think
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted"></small>
            </Card.Footer>
          </Card>
          <Card className="project">
            <Card.Img variant="top" src={eshopping} height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KaizhiDu/eshopping-clothing.git" target="_blank">Eshopping-clothing</a>
              </Card.Title>
              <Card.Text>
                I followed Yihua Zhang's course to complete this code. Except GeaphQL, redux saga, and etc. Yihua also give me more think about why we need to use react. how to make the code more readable and reuseable
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, react</small>
            </Card.Footer>
          </Card>
          <Card className="project">
            <Card.Img variant="top" src={mongame} height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KaizhiDu/monster-rolodex.git" target="_blank">monster-rolodex</a>
              </Card.Title>
              <Card.Text>
                I followed Yihua Zhang's course to complete this code. Yihua bring me new idea and think for the react component. I start think the benefit of component. It is great!!!
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, react</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>
      <br/>
      <Row>
        <br/>
        <CardDeck>
          <Card className="project">
            <Card.Img variant="top" src={personWeb} height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KaizhiDu/kaizhi-s-website" target="_blank">Person Webpage</a>
              </Card.Title>
              <Card.Text>
                After I finished the course of react + node by Brad Traversy and Stephen Grider, I decided to combine
                the advantages of both to develop my own personal webpage, which is the page you are currently browsing.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, react, node, express, mongoDB, mongoose</small>
            </Card.Footer>
          </Card>
          <Card className="project">
            <Card.Img variant="top" src={profile} height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KaizhiDu/profile" target="_blank">Profile</a>
              </Card.Title>
              <Card.Text>
                I followed Brad Traversy's course to complete this code. Brad taught me how to use JWT, Hooks and other
                knowledge. Helped me a lot
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, react, node, express, mongoDB, mongoose</small>
            </Card.Footer>
          </Card>
          <Card className="project">
            <Card.Img variant="top" src={emaily} height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KaizhiDu/Emaily" target="_blank">Emaily</a>
              </Card.Title>
              <Card.Text>
                I followed this code by Stephen Grider. In addition to basic knowledge of react, redux, and node,
                Stephen also teaches how to use useful knowledge such as Stript, sendGrid, Oauth, and redux-form. I
                learned a lot of new things.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, react, node, express, mongoDB, mongoose</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>
      <br/>
      <Row>
        <br/>
        <CardDeck>
          <Card className="project">
            <Card.Img variant="top" src={carInsurance} height='150px'/>
            <Card.Body>
              <Card.Title>
                <a href="https://github.com/KaizhiDu/carInsurance" target="_blank">Car Insurance</a>
              </Card.Title>
              <Card.Text>
                We have a course called IT-510 Software Development. The professor asked us to complete a project. I
                decided to use the node and MongoDB I just learned with javascript to construct this project.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, node, express, mongoDB, mongoose</small>
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
                management software is needed to manage the company. I bought a general machine management software
                before, but it is not suitable for company use. So I developed a software based on my father's request.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">javascript, java, spring, mysql, mybatis</small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </Row>
      <br/>
    </Fragment>
  );
};

export default Project;