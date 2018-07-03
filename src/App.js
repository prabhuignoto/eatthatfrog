import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import Header from './common/header';
import Footer from './common/footer';
import AddTask from './containers/addTask/addTask';
import CompletedFrogs from './components/frogs/completedfrogs';
import HelpFrog from './components/frogs/helpfrog';
import MissedFrogs from './components/frogs/missedfrogs';
import Settings from './components/frogs/settings';
import MyFrogs from './containers/myTasks';
import AddTaskSuccessPage from './components/alerts/addTaskSuccess';


const App = () => (
  <Router>
    <Fragment>
      <div className="App">
        {/* <Header /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add" component={() => <AddTask heading="Add Task" />} />
        <Route path="/completed" component={CompletedFrogs} />
        <Route path="/help" component={HelpFrog} />
        <Route path="/missed" component={MissedFrogs} />
        <Route path="/myFrogs" component={MyFrogs} />
        <Route path="/settings" component={Settings} />

        <Route path="/addTaskSuccess" component={AddTaskSuccessPage} />
        <Footer />
      </div>
    </Fragment>
  </Router>);

export default App;
