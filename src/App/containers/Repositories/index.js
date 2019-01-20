import React from 'react';
import './style.scss';
import Repository from '../../components/Repository';

class Repositories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: [],
        }
    }
    componentDidMount() {
        this.props.user && fetch(this.props.user.repos_url).then(response => response.json()).then(data => {
            console.log(data);
            this.setState({ repositories: data });
        })
    }
    render() {
        return <div>
            {this.state.repositories.map((repository, index) => {
                return <Repository key={repository.id} repository={repository}/>
            })}
        </div>
    }
}

export default Repositories;