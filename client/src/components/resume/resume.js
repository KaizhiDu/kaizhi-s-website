/**
 * Created by Kaizhi Du on 2019/11/20.
 */
import React from 'react';
import Pdf from "react-pdf-js"
import resume from '../../kaizhidu.pdf';
import { Col, Row } from "react-bootstrap";

const Resume = () => {
    return (
        <div className='ResumeLayout'>
          <br/>
          <Row>
            <a className='ResumeButton btn btn-outline-primary' href={resume} download="Kaizhi Du - Resume">Click Download</a>
          </Row>
          <Row>
            <Pdf
              scale={2}
              file={resume}
            />
          </Row>
        </div>
    )
};

export default Resume