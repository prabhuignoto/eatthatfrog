import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './common/footer';
import MyFrogs from './containers/myTasks';


const App = () => (
  <Router>
    <Fragment>
      <div className="App">
        <Route path="/" component={MyFrogs} />
        <Footer />
      </div>
    </Fragment>
  </Router>);

export default App;
