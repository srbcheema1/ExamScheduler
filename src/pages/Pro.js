import React, {Component} from 'react';
import {server_url} from '../extra/constants.js'
import loading_gif from '../components/loader/loading.gif'

class Pro extends Component{
  constructor(props) {
    super(props);
    this.initialstate = {
      message:null,

      user:null,
      status:'loading', // loading, loggedin, loggedout, error

      output:null,
    };
    this.state = this.initialstate;
  }

  componentDidMount = () => {
    var url = `${server_url}/parse_token`
    fetch(url, { // Your POST endpoint
      method: 'POST',
      credentials: 'include',
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        if(success['done']) {
          let username = null
          if(success['data']) {
            username = success['data']['username']
          }
          setTimeout(()=> {
            this.setState({
              message:success['message'],
              user:username,
              status:success['status'],
            });
          },300)
        } else {
          let message = 'error : some problem with server';
          this.setState({message:message,status:"error"});
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

  popup = (e) => {
    //window.open('http://192.168.43.27:5000/google_login', 'Login', "height=640,width=960,toolbar=no,menubar=no,scrollbars=no,location=no,status=no");
    window.location.replace("http://127.0.0.1:5000/google_login?caller=+" +encodeURIComponent("http://localhost:3000/#/pro"));
  }

  render(){
    return(
      <div className = "container">
        <div className = "row">
          {this.state.status === "loading" &&
            <div className="col-md-12" style={{textAlign:'center',padding:'60px', height:'400px'}}>
              <img src={loading_gif} height="70" style={{verticalAlign:'middle'}} alt="verifying"/>
            </div>
          }
          {this.state.status === "loggedin" &&
            <div>
              {this.state.user} logged in
            </div>
          }
          {this.state.status === "error" &&
            <div>
              {this.state.user} error
            </div>
          }
          {this.state.status === "loggedout" &&
            <div className="content-section">
              <button className="btn btn-outline-info" type="button" onClick={this.popup}>
                <span className="fab fa-google" style={{letterSpacing:'5px'}}></span> Sign in with Google
              </button>
            </div>
          }
        </div> {/*row ends*/}
      </div>
    );
  }
}

export default Pro;
