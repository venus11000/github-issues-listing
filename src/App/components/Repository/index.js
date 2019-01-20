import React from 'react';
import { withRouter } from "react-router";
import './style.scss';

class Repository extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repository: {},
        }
    }
    componentDidMount() {
        this.setState({ repository: this.props.repository });
    }
    handleClick(repository) {
        // fetch(url).then(response => response.json()).then((data) => {
        //     console.log(data);
            this.props.history.push(`/${repository.owner.login}/${repository.name}`);
        // })
    }
    render() {
        const repository = {...this.state.repository}
    return <div className="repository-list">
        <div onClick={() => this.handleClick(repository)}><h3 className="cursor-pointer">{repository.name}</h3></div>
        <div>
            <div>{repository.language}</div>
            <div>Updated {repository.updated_at} ago</div>
        </div>
    </div>
}
}

export default withRouter(Repository);