/**
 * Created by Kaizhi Du on 2019/11/21.
 */
import React, { Fragment } from 'react';
import { Col, Row, OverlayTrigger, Popover } from "react-bootstrap";
import NotesDisplay from "./NotesDisplay";
import myw from '../../img/myw.jpeg';

const popover = (
    <Popover className="popover" id="popover-basic">
        <Popover.Title as="h3">Selling oil story</Popover.Title>
        <Popover.Content>
            During the Northern Song Dynasty, there was a skilled archer. One day he drew a big crowd while he was practicing on the drill ground. He shot so accurately that the on-lookers cheered with excitement. He became very proud of his skill. But among the crowd an old oil peddler only nodded his head indifferently. This hurt his Pride.<br/>

            "Can you do this?" he asked the old oil peddler.<br/>

            "No, I can't."<br/>

            "What do you think of my skill?"<br/>

            "Just OK, but nothing special. You've gained your accuracy from persistent practice. That's all."<br/>

            "What can you do, then?"<br/>

            The old man said nothing. He put a gourd bottle on the ground and covered its mouth with a copper coin. He then scooped out a ladle of oil from his big jar, held it high and began to fill the bottle.<br/>

            Now, a thread of oil came down from the ladle into the bottle just through the hole of the coin. Everybody looking on watched with amazement. But the old man said, <strong>"This is nothing special, I can do this because I have practiced it a lot."</strong> And with these words, he left.<br/>

            <strong>Later, people use this phrase to mean "Practice makes perfect".</strong>
        </Popover.Content>
    </Popover>
);

const Notes = () => {
    return (
        <Fragment>
            <br/>
            <Row>
                <Col md={8}>
                    <NotesDisplay/>
                </Col>
                <Col></Col>
                <Col md={3}>
                    <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                        <Row>
                            <img
                                width={250}
                                height={170}
                                className="mr-4"
                                src={myw}
                                alt="Generic placeholder"
                            />
                            <br/>
                            <Row>
                                This is nothing special, I can do this because I have practiced it a lot.
                            </Row>
                            <Row>
                                <p className='small NoteDateText'>
                                    Click on this Chinese fable, if you can't understand it
                                </p>
                            </Row>

                        </Row>
                    </OverlayTrigger>

                    <hr/>
                    <Row>最近发布</Row>
                    <hr/>
                    <Row>标签分类</Row>
                </Col>
            </Row>
        </Fragment>

    )
};

export default Notes;