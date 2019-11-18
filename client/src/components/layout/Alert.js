/**
 * Created by Kaizhi Du on 2019/11/17.
 */
import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
    console.log(alerts);
    return (
        alerts != null &&
            <Alert key={alert.id} variant={alert.alertType}>
                {alert.msg}
            </Alert>
        )

};


const mapStateToProps = (state) => ({
    alerts: state.alert.errors
});

export default connect(mapStateToProps, {})(Alert);