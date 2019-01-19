import React from 'react';

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        }
        this.getIssues = this.getIssues.bind(this);
    }
    componentDidMount() {
        this.getIssues("venus11000", "github-issues-listing");
    }
    getIssues(userName, repoName) {
        fetch(`https://api.github.com/repos/${userName}/${repoName}/issues`)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data);
            this.setState({ issues: data });
        })
    }
    render() {
        return (
            <div>
                <div>Listing issues</div>
                {this.state.issues.length > 0 ? this.state.issues.map((issue, index) => {
                    return <div key={index}>
                        <div>{issue.title}</div>
                        <div>{issue.body}</div>
                    </div>
                }) :
                <div>Loading</div>}
            </div>
        );
    }
}