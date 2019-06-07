import React, {Component, createRef} from 'react';
import {Modal, Button} from 'react-bootstrap';
import MarkDown from 'react-markdown';

import Dropbox from '../components/Dropbox_output/Dropbox.js'
import Admin from './Admin.js'

import {server_url} from '../extra/constants.js'
import loading_gif from '../components/loader/loading.gif'
import coin from '../extra/images/coin.png'
import gpay from '../extra/images/gpay.png'
import time_pic from '../extra/images/time_pic.svg'
import helpmd from '../extra/pro_help.js'

import './styles/pro.css'

class Pro extends Component{
  constructor(props) {
    super(props);
    this.initialstate = {
      message:null,

      user:null,
      status:'loading', // loading, loggedin, loggedout, error

      output_file:null,
      showModel:false,
      showCustomMessage:false,
      showBuyCoins:false,
    };
    this.state = this.initialstate;
    this.output_ref = createRef();
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
          },1)
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

  handleClose = () => {
    this.setState({showModel:false});
  }

  handleCloseCustomMessage = () => {
    let customMessage = document.getElementById("customMessage").value;
    this.send_mails(customMessage);
    this.setState({showCustomMessage:false});
  }

  Reset = () => {
    this.setState({output_file:null,showModel:false,showCustomMessage:false,message:null},()=>{
    });
    this.output_ref.current.Reset();
  }

  handleCloseReset = () => {
    this.Reset();
  }

  handleCloseResetCustomMessage = () => {
    this.Reset();
  }

  handleCloseBuyCoins = () => {
    this.setState({showBuyCoins:false});
  }

  signin = (e) => {
    window.location.replace(server_url + "/google_login?caller=+" +encodeURIComponent(window.location.href));
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

  buy_coins = () => {
    this.setState({showBuyCoins:true});
  }

  onFileChanged = (file_name,extra) => {
    this.setState({output_file:file_name, ...extra});
  }

  send_mails_button = () => {
    if(this.state.user['coins'] < 5) {
      this.buy_coins();
      return;
    }
    this.setState({showCustomMessage:true});
  }

  send_mails = (customMessage) => { 
    var url = `${server_url}/send_mails`
    var data = new FormData();
    data.append('output_file', this.state.output_file);
    data.append('custom_message', customMessage);
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
          this.setState({user:user,message:success['message'],showModel:true})
        }
        else {
          this.setState({message:success['message'],showModel:true})
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
                  <h2 style={{paddingTop:'3px'}}>
                    {this.state.user.username}
                    {pro_user &&
                      <i className="fas fa-crown" style={{paddingLeft:'15px', color:'gold',fontSize:'22px', marginBottom:'5px'}}></i>
                    }
                    {pro_user ||
                      <span style={{fontSize:'15px',marginLeft:'20px'}}> 
                        Coins : {this.state.user.coins}
                        <img src={coin} alt="coin" style={{height:'15px',marginLeft:'5px',marginBottom:'3px'}} />
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
                    ref={this.output_ref}
                    onFileChanged={(file_name,extra) => this.onFileChanged(file_name,extra)}
                  />
                </div>
                <div className="col-md-6 d-none d-md-block" style={{textAlign:'center'}}>
                  <img src={time_pic} height="140px"  alt="time"/>
                </div>
              </div>
              <div className="row" style={{marginTop:'10px'}}>
                <div className="col-md-6">
                  <button className="btn btn-outline-info" type="button" onClick={this.send_mails_button} disabled={!this.state.output_file}>
                    Send Mails : 5 
                    <img src={coin} alt="coin" style={{height:'14px',marginLeft:'3px',marginBottom:'3px'}} />
                  </button>
                  <button className="btn btn-outline-info" type="button" onClick={this.buy_coins} style={{marginLeft:'10px'}}>
                    Buy Coins
                    <img src={coin} alt="coin" style={{height:'14px',marginLeft:'3px',marginBottom:'3px'}} />
                  </button>
                </div>
              </div>
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
            <div className="content-section" style={{opacity:'1.0'}}>
              <div className="row">
                <div className="col-md-9" style={{textAlign:'center', paddingTop:'5px'}}>
                  <h5>
                    Login / Signup using your Google account to access Pro features
                  </h5>
                </div>
                <div className="col-md-3" style={{textAlign:'center'}}>
                  <button className="btn btn-outline-info" type="button" onClick={this.signin}>
                    <span className="fab fa-google" style={{letterSpacing:'5px'}}></span> Sign in with Google
                  </button>
                </div>
              </div>
              <hr/>
              <div className="row srb_pro">
                <div className="col-md-1 d-none d-md-block"></div>
                <div className="col-md-9" >
                  <MarkDown className="srb-markdown" source={helpmd} escapeHtml={false}></MarkDown>
                </div>
              </div>
            </div>
          }
        <Modal show={this.state.showModel} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.message}</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseReset}>
              Reset
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showCustomMessage} onHide={this.handleCloseCustomMessage}>
          <Modal.Header closeButton>
            <Modal.Title>
              Add a Custom Message with mails
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal_desc">
              <textarea id="customMessage" rows="4" style={{width:'100%'}} placeholder="add custom text to attach with each mail, you may leave it empty"/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseResetCustomMessage}>
              Reset
            </Button>
            <Button variant="primary" onClick={this.handleCloseCustomMessage}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showBuyCoins} onHide={this.handleCloseBuyCoins}>
          <Modal.Header closeButton>
            <Modal.Title>
              Buy Coins 
              <img src={coin} alt="coin" style={{height:'20px',marginLeft:'3px',marginBottom:'3px'}} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal_desc">
            <h4>1 coin = 1 &#x20B9; </h4>
            You may pay using <strong>G Pay</strong> at <code>srbcheema1@oksbi</code>
            <br/>
            <img src={gpay} alt="srbcheema1@oksbi" style={{width:'100%',marginBottom:'3px'}} />
            <br/>
            Scan and Pay, write your username and "examscheduler_coins" in description.
            <br/>
            Coins equivalent to your amount will be added to your account within 24 hours.
            <br/> <br/>
            <i class="fas fa-lightbulb" style={{color:'yellow',height:'30px', marginRight:'10px'}}></i> 
            For new users free 20 coins, mail us to avail the offer.
            <hr/>
            For more info please mail us at <strong>srbcheema2@gmail.com</strong>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Pro;
