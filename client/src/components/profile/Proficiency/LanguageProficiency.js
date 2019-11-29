/**
 * Created by Kaizhi Du on 2019/11/28.
 */
import React, { Component, Fragment } from 'react';
import { Radar } from 'react-chartjs-2';
import { Row } from "react-bootstrap";

class LanguageProficiency extends Component {
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
                        data={this.state.languageData}
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

export default LanguageProficiency