import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Landing} /> {/* exact is the same as exact={true} */} 
                    <Route path="/surveys" component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;