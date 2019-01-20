import React from 'react';
import { withRouter } from "react-router";
import SwipeableViews from 'react-swipeable-views';
import { Grid, AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import './style.scss';
import Repositories from '../Repositories';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            activeTab: 0,
        }
    }
    handleTabChange = (event, value) => {
        this.setState({ activeTab: value });
    };

    handleTabChangeIndex = index => {
        this.setState({ activeTab: index });
    };
    componentDidMount() {
        if (this.props.userName) {
            fetch(`https://api.github.com/users/${this.props.userName}`)
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        this.props.history.push("/");
                    }
                })
                .then((data) => {
                    console.log(data);
                    this.setState({ user: data });
                })
        }
    }
    render() {
        let user = { ...this.state.user };
        // console.log(this.props);
        return (
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={3} className={"profile-container"}>
                        <div className="profile-card">
                            <img className="profile-image" src={user.avatar_url} alt={user.name} />
                            <div className="card-desc">
                                <p className="card-content">Set your Status</p>
                                <p className="card-content">Give us feedback</p>
                            </div>
                        </div>
                        {/* <Paper>xs=12</Paper> */}
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={this.state.activeTab}
                                    onChange={this.handleTabChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                >
                                    <Tab label="Overview" />
                                    <Tab label="Repositories" />
                                    <Tab label="Stars" />
                                    <Tab label="Followers" />
                                    <Tab label="Following" />
                                </Tabs>
                                <SwipeableViews
                                    axis={'x'}
                                    index={this.state.activeTab}
                                    onChangeIndex={this.handleTabChangeIndex}
                                >
                                    <TabContainer>Overview</TabContainer>
                                    <TabContainer><Repositories user={this.state.user}/></TabContainer>
                                    <TabContainer>Stars</TabContainer>
                                    <TabContainer>Followers</TabContainer>
                                    <TabContainer>Following</TabContainer>
                                </SwipeableViews>
                            </AppBar>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Dashboard);