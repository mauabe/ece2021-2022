import React from 'react';
import ReactDOM from 'react-dom';
import '../src/scss/styles.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
// import {Router} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from "history";



const history = createBrowserHistory({basename:"/2021-2022"});
// const router = () => {<Router/>};

ReactDOM.render(
  <BrowserRouter basename="/2021-2022" history={history} >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
