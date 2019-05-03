import React, {Component} from 'react';

import TemplatePannel from '../components/right_pannel/templates.js'
import {server_url} from '../extra/constants.js'

class Help extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      status:null
    }
  }
  componentDidMount = () => {
    console.log('fetching version');
    var url = `${server_url}/get_version`
    fetch(url, { // Your POST endpoint
      method: 'POST',
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        console.log(success);
        if(success['done']) {
          let message = `version : ${success['version']}`;
          this.setState({message:message,status:'green'});
        } else {
          let message = 'some problem with server';
          this.setState({message:message,status:'yellow'});
        }
      }
    ).catch(
      error => {
        let message = 'server seems offile';
        this.setState({message:message,status:'red'});
        console.log(error) // Handle the error response object
      }
    );
  }
  render(){
    return(
      <main role="main" className="container">
        <div className="row">
          <div className="col-md-9">
            <p>Exam Scheduler is a tool to create a automated schedule for teacher duties</p>
            <p>
              status : {this.state.status} : {this.state.message}
            </p>
          </div>
          <div className="col-md-3">
            <TemplatePannel/>
          </div>
        </div>
      </main>
    );
  }
}
export default Help;
