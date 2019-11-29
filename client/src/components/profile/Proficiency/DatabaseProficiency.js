/**
 * Created by Kaizhi Du on 2019/11/28.
 */
import React, { Component, Fragment } from 'react';
import { Radar } from 'react-chartjs-2';
import { Row } from "react-bootstrap";

class DatabaseProficiency extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <Radar
                        width={600}
                        height={320}
                        data={this.state.databaseData}
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

export default DatabaseProficiency;