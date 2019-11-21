/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import {CardDeck,Card} from "react-bootstrap";
import test from '../../img/javascript.jpg';

const DashboardProject = () => {
    return (
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={test} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="text-right">
                        <span className="text-muted">see detail</span>
                    </div>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={test} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="text-right">
                        <span className="text-muted">see detail</span>
                    </div>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={test} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="text-right">
                        <span className="text-muted">see detail</span>
                    </div>
                </Card.Footer>
            </Card>
        </CardDeck>
    )
}

export default DashboardProject