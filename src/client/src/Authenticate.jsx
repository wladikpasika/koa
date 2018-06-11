import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

class Authenticate extends Component {

    render (){
        console.log( this.props );
        return (<div>Authenticate Page</div>)
    }
};

export default withRouter(Authenticate);