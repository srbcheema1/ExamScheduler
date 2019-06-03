import React, {Component} from 'react';
import {server_url} from '../extra/constants.js'
import loading_gif from '../components/loader/loading.gif'
import Dropbox from '../components/Dropbox_output/Dropbox.js'
import Admin from './Admin.js'

import coin from '../extra/images/coin.png'

class Pro extends Component{
  constructor(props) {
    super(props);
    this.initialstate = {
      message:null,

      user:null,
      status:'loading', // loading, loggedin, loggedout, error

      output_file:null,
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
          let user = null
          if(success['data']) {
            user = JSON.parse(JSON.stringify(success['data']))
          }
          setTimeout(()=> {
            this.setState({
              message:success['message'],
              user:user,
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

  logout = (e) => {
    var url = `${server_url}/logout`
    fetch(url,{
      method:'POST',
      credentials: 'include',
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        if(success['done']) {
          this.setState({user:null, status:'loggedout' })
        } else {
          this.setState({user:null, status:'loggedout',message:'unable to logout properly' })
        }
      }
    ).catch(
      error => {
        let message = 'error : server seems offile';
        console.log(message) // Handle the error response object
      }
    )
  }

  onFileChanged = (file_name,extra) => {
    this.setState({output_file:file_name, ...extra});
  }

  send_mails = () => {
    var url = `${server_url}/send_mails`
    var data = new FormData();
    data.append('output_file', this.state.output_file);
    fetch(url,{
      method:'POST',
      credentials: 'include',
      body:data,
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        if(success['done']) {
          let user = this.state.user
          user.coins = success['data']['coins']
          this.setState({user:user})
        }
      }
    ).catch(
      error => {
        let message = 'error : server seems offile';
        console.log(message) // Handle the error response object
      }
    )
  }

  render(){
    let pro_user = false
    if (this.state.user && this.state.user.level >= 1){
      pro_user = true
    }
    return(
      <div className = "container">
          {this.state.status === "loading" &&
            <div className="col-md-12" style={{textAlign:'center',padding:'60px', height:'400px'}}>
              <img src={loading_gif} height="70" style={{verticalAlign:'middle'}} alt="verifying"/>
            </div>
          }
          {this.state.status === "loggedin" &&
            <div>
              <div className="row">
                <div className="col-md-9">
                  <h2>
                    {this.state.user.username}
                    {pro_user &&
                      <i className="fas fa-crown" style={{paddingLeft:'15px', color:'gold',fontSize:'22px'}}></i>
                    }
                    {pro_user ||
                      <span style={{fontSize:'15px',marginLeft:'20px'}}> 
                        Coins : {this.state.user.coins}
                        <img src={coin} alt="coin" style={{height:'15px',marginLeft:'5px'}} />
                      </span>
                    }
                  </h2>
                  
                </div>
                <div className="col-md-3" style={{textAlign:'center'}}>
                  <button className="btn btn-outline-info" type="button" onClick={this.logout}>
                    Sign Out
                  </button>
                </div>
              </div>
              <hr/><br/>
              <div className="row">
                <div className="col-md-6 srb-dropbox">
                  <Dropbox filename="output_file"
                    ref={this.schedule_list_ref}
                    onFileChanged={(file_name,extra) => this.onFileChanged(file_name,extra)}
                  />
                </div>
              </div>
              {this.state.output_file &&
                <div className="row">
                  <br/>
                  <button className="btn btn-outline-info" type="button" onClick={this.send_mails}>
                    Send Mails
                  </button>
                </div>
              }
              {this.state.user.username ==="srbcheema2" &&
                <div>
                  <br/><hr/>
                  <div className="row">
                    <Admin/>
                  </div>
                </div>
              }
            </div>
          }
          {this.state.status === "error" &&
            <div>
              error : {this.state.message}
            </div>
          }
          {this.state.status === "loggedout" &&
            <div className="content-section">
              <button className="btn btn-outline-info" type="button" onClick={this.popup}>
                <span className="fab fa-google" style={{letterSpacing:'5px'}}></span> Sign in with Google
              </button>
            </div>
          }
      </div>
    );
  }
}

export default Pro;
