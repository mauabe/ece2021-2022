import React, {Component} from 'react';
import{withRouter} from 'react-router-dom';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Story extends Component{

  constructor(props) {
		super(props);
	  this.state = {
      pageView: this.props.pageView,
      articleSelection: this.props.articleSelection,
    }
		// console.log('%c PROPS at ARTICLE COMPONENTS constructor', 'color:black;background:magenta;padding:6px;border:1px dashed black', this.props)
  }

  render (){
    return(
      <div><h3>There is nothing here.</h3> This content is not available.</div>
    )
  }

}
export default withRouter(Story);
