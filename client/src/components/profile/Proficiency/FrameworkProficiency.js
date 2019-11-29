/**
 * Created by Kaizhi Du on 2019/11/28.
 */
import React, { Component, Fragment } from 'react';
import { Radar } from 'react-chartjs-2';
import { Row } from "react-bootstrap";

class FrameworkProficiency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frameworkData: {
                labels: [ 'spring', 'express', 'react', 'angular', 'mybatis', 'mongoose' ],
                datasets: [ {
                    label: "Framework proficiency",
                    borderColor: "rgba(0,205,102,0.8)",
                    pointBackgroundColor: "rgba(0,205,102,0.8)",
                    backgroundColor: "rgba(0,238,118,0.3)",
                    data: [ 90, 70, 70, 50, 90, 70 ]
                }, {}
                ]
            }
        }
    }

    render() {
        return (
            <Fragment>
                <br/>
                <Row>
                    <Radar
                        width={600}
                        height={320}
                        data={this.state.frameworkData}
                        options={{
                            legend: {
                                display: false
                            },
                            scale: {
                                angleLines: {
                                    display: false
                                },
                                pointLabels: { fontSize: 15 },
                                ticks: {
                                    suggestedMin: 20,
                                    suggestedMax: 100,
                                    fontSize: 13
                                }
                            }
                        }}
                    />
                </Row>
            </Fragment>

        )
    }
}

export default FrameworkProficiency;