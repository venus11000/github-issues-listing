import React from 'react';
import { withRouter } from "react-router";
import './style.scss';

class RepoInDetail extends React.Component {
    componentDidMount() {
        console.log("Detail",this.props);
        fetch(`https://api.github.com/repos/${this.props.userName}/${this.props.repoName}`)
        .then((response) => response.json()).then((data) => {
            console.log(data);
        })
    }
    render() {
        return <div>
            <div>
                <svg className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                <div className="breadcrumb-links"><div className="cursor-pointer">{this.props.userName}</div><div>/</div><div className="cursor-pointer">{this.props.repoName}</div></div>
            </div>
            <div>
                <ul>
                    <li>Code</li>
                    <li>Issues</li>
                    <li>Pull Requests</li>
                    <li>Projects</li>
                    <li>Wiki</li>
                    <li>Insights</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    }
}

export default withRouter(RepoInDetail);