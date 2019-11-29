/**
 * Created by Kaizhi Du on 2019/11/28.
 */
import React, { Component, Fragment } from 'react';
import { Radar } from 'react-chartjs-2';
import { Col, Row } from "react-bootstrap";

class DashboardSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageData: {
                labels: [ 'java', 'javascript', 'python', 'PHP', 'c' ],
                datasets: [ {
                    label: "Language proficiency",
                    borderColor: "rgba(122,197,205,0.8)",
                    pointBackgroundColor: "rgba(122,197,205,0.8)",
                    backgroundColor: "rgba(142,229,238,0.3)",
                    data: [ 80, 75, 50, 50, 60 ]
                }, {}
                ]
            },
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
            },
            databaseData: {
                labels: [ 'mongoDB', 'SQL Server', 'mysql', 'oracle', 'redis' ],
                datasets: [ {
                    label: "database proficiency",
                    borderColor: "rgba(154,205,50,0.8)",
                    pointBackgroundColor: "rgba(154,205,50,0.8)",
                    backgroundColor: "rgba(179,238,58,0.3)",
                    data: [ 70, 50, 90, 85, 40 ]
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
                    <Col>
                        <Radar
                            width={350}
                            height={350}
                            data={this.state.languageData}
                            options={{
                                legend: {
                                    display: false
                                },
                                scale: {
                                    angleLines: {
                                        display: false
                                    },
                                    pointLabels: { fontSize:15 },
                                    ticks: {
                                        suggestedMin: 20,
                                        suggestedMax: 100,
                                        fontSize: 13
                                    }
                                }
                            }}
                        />
                    </Col>
                    <Col>
                        <Radar
                            width={350}
                            height={350}
                            data={this.state.frameworkData}
                            options={{
                                legend: {
                                    display: false
                                },
                                scale: {
                                    angleLines: {
                                        display: false
                                    },
                                    pointLabels: { fontSize:15 },
                                    ticks: {
                                        suggestedMin: 20,
                                        suggestedMax: 100,
                                        fontSize: 13
                                    }
                                }
                            }}
                        />
                    </Col>
                    <Col>
                        <Radar
                            width={350}
                            height={350}
                            data={this.state.databaseData}
                            options={{
                                legend: {
                                    display: false
                                },
                                scale: {
                                    angleLines: {
                                        display: false
                                    },
                                    pointLabels: { fontSize:15 },
                                    ticks: {
                                        suggestedMin: 20,
                                        suggestedMax: 100,
                                    }
                                }
                            }}
                        />
                    </Col>
                </Row>
            </Fragment>


        )
    }
}

export default DashboardSkills