import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component { /* Refactor from functional component to stateful component in order to centralize the use of our action creator. 
If the header were the only component that cared about whether the user was logged in or not, we would add the action creator there but in this app
other components also have use for it.*/
    componentDidMount() {
        this.props.fetchUser();
    }
    
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} /> {/* exact is the same as exact={true} */} 
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }    
};

export default connect(null, actions)(App);