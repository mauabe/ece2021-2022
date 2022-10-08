import React, {Component} from 'react';
import { Link, withRouter, BrowserRouter } from "react-router-dom";
// import {Router} from 'react-router';
import * as data from '../assets/data';
import ReactHtmlParser from 'react-html-parser';

// function usePanel(active) {
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     if (!ref.current || !active) {
//       return;
//     }
//     console.log('React usePanelFunc useEffect ref:', ref)

//     const state = {
//       rect: undefined,
//       mouseX: undefined,
//       mouseY: undefined
//     };
//     console.log('React useEffect state:', state)

//     let element = ref.current;
//     // console.log('React useEffect element:', element)

//     const handleMouseMove = (e) => {
//       if (!element) {
//         return;
//       }
//       if (!state.rect) {
//         state.rect = element.getBoundingClientRect();
//       }
//       state.mouseX = e.clientX;
//       state.mouseY = e.clientY;
//       const px = (state.mouseX - state.rect.left) / state.rect.width;
//       const py = (state.mouseY - state.rect.top) / state.rect.height;

//       element.style.setProperty("--px", px);
//       element.style.setProperty("--py", py);
//     };

//     element.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       element.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [active]);
//   console.log('React useEffect return ref::', ref)

//   return ref;
// }

// const initialState = {
//   panelIndex: 0
// };

// const panelReducer = (state, event) => {
//   if (event.type === "NEXT") {
//     return {
//       ...state,
//       panelIndex: (state.panelIndex + 1) % data.panels.length
//     };
//   }
//   if (event.type === "PREV") {
//     return {
//       ...state,
//       panelIndex: state.panelIndex === 0 ? data.panels.length - 1 : state.panelIndex - 1
//     };
//   }
// };


class Home extends Component{
  constructor(props) {
		super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentPanel: data.panels[0].id
    };
  }

  handleClick = panelId => {
    console.log("state before", this.state);
    this.setState({currentPanel: panelId});
    console.log("state after", this.state);
  }

  panelContainer = () => {
    let html = [];
    data.panels.map((panel) => {
      const activeClassName = this.state.currentPanel === panel.id ? "active" : null;
      console.log('html inside panelContainer', html);
      html.push(
        <div className={`panel ${panel.id}`} data-active={activeClassName}>
          <div className={`panelImage ${activeClassName}`}></div>
          <div className="panelContent" onClick={e => this.handleClick(panel.id, e)}>
            <div className="panelTextBox">
              <div className="panelTitle">{panel.title}</div>
              <div className="panelFirstName">{panel.firstName}</div>
              <div className="panelLastName">{panel.lastName}</div>
            </div>
            <div className="panelText">
              {ReactHtmlParser(panel.text)}
            </div>
            <BrowserRouter/>
            <Link to={`/${panel.link}`} >
              <div className="linkText">
                {panel.linkText}
              </div>
            </Link>
          </div>
      </div>
      );
    });

    return html;
  }

  render() {
    return(
      <div className="content-area">
        <div className="panelsContainer">
          {this.panelContainer()}
        </div>
      </div>
    );
  };
};


export default withRouter(Home);
