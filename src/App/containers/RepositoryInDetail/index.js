import React from 'react';
import { withRouter } from "react-router";
import './style.scss';

class RepoInDetail extends React.Component {
    componentDidMount() {
        console.log("Detail",this.props);
    }
    render() {
        return <div>Detail</div>
    }
}

export default withRouter(RepoInDetail);