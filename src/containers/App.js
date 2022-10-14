import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import '../scss/styles.scss';

import Navigation from './Navigation';
import Home from './Home';
// import News from './News';
import Highlights from './Highlights';
import Students from './Students';
import Faculty from './Faculty';
import Overview from './Overview';
import Alumni from './Alumni';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
		super(props);
	  this.state = { }
  }

  render(){

    // const routes = [
    //   { path: '/', name: 'Home', Component: Home },
    //   { path: '/news', name: 'News', Component: News },
    //   { path: '/highlights', name: 'Highlights', Component: Highlights },
    //   { path: '/students', name: 'Students', Component: Students },
    //   { path: '/faculty', name: 'Faculty', Component: Faculty },
    //   { path: '/overview', name: 'Overview', Component: Overview },
    //   { path: '/alumni', name: 'Alumni', Component: Alumni },
    // ];

    return (
      <div className="App">
        <Navigation/>
        <Switch>
          <Route path='/highlights' component={Highlights}/>
          <Route path='/students' component={Students}/>
          <Route path='/faculty' component={Faculty}/>
          <Route path='/overview' component={Overview}/>
          <Route path='/alumni' component={Alumni}/>
          <Route exact path='/' component={Home}/>
          <Route path='/highlights' render={() => <Redirect to="/highlights/intro"/>} />
          {/*
            <Route path='/intro' component={News}/>
            <Route path='/intro' render={() => <Redirect to="/intro"/>} />
            <Route path='/students' render={() => <Redirect to="/students/awardsundergrad"/>} />
            <Route path='/faculty' render={() => <Redirect to="/faculty/ces" />} />
            <Route path='/overview' render={() => <Redirect to="/overview/researchcenters"/>} />
            <Route path='/alumni' render={() => <Redirect to="/alumni/alumnae"/>} />
          */}
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
