import React, {Component} from 'react';
import MarkDown from 'react-markdown';

import {server_url} from '../extra/constants.js'
import helpmd from '../extra/help.js';
import './styles/help.css';

class Help extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      status:'yellow'
    }
  }
  componentDidMount = () => {
    var url = `${server_url}/get_version`
    fetch(url, { // Your POST endpoint
      method: 'POST',
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        if(success['done']) {
          let message = `version : ${success['version']}`;
          this.setState({message:message,status:'green'});
        } else {
          let message = 'error : some problem with server';
          this.setState({message:message,status:'blue'});
        }
      }
    ).catch(
      error => {
        let message = 'error : server seems offile';
        this.setState({message:message,status:'red'});
        console.log(error) // Handle the error response object
      }
    );
  }
  render(){
    return(
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-12">
            <MarkDown className="srb-markdown" source={helpmd} escapeHtml={false}></MarkDown>
            <br/>
            <p style={{paddingLeft:'10px'}}>
              status : <i className="status-dot fas fa-circle" style={{color:this.state.status}}></i> <br/>
              {this.state.message}
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Help;
