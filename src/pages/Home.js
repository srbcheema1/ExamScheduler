import React, {Component, createRef} from 'react';
import {Modal, Button} from 'react-bootstrap'

import Dropbox from '../components/Dropbox/Dropbox.js'
import TemplatePannel from '../components/right_pannel/templates.js'
import { server_url } from '../extra/constants.js';
import './styles/Home.css'


class Home extends Component{
  constructor(props) {
    super(props);
    this.initialstate = {
      teachers_list:false,
      room_list:false,
      schedule_list:false,
      work_ratio:false,
      seed:5,
      message:null,
      showModel:false,
    };
    this.state = this.initialstate;
    this.teacher_list_ref = createRef();
    this.schedule_list_ref = createRef();
    this.room_list_ref = createRef();
    this.work_ratio_ref = createRef();
  }

  onFileChanged =(file,val,extra)=>{
    this.setState({...{[file]:val}, ...extra});
  }

  handleClose = () => {
    this.setState({showModel:false});
  }

  Reset = () => {
    this.setState({...this.initialstate},()=>{
    });
    this.teacher_list_ref.current.Reset();
    this.schedule_list_ref.current.Reset();
    this.room_list_ref.current.Reset() ;
    this.work_ratio_ref.current.Reset();
  }

  handleCloseReset = () => {
    this.Reset();
  }

  onClick = (e) => {
    var data = new FormData();
    data.append('teachers_list', this.state.teachers_list);
    data.append('schedule_list', this.state.schedule_list);
    data.append('room_list', this.state.room_list);
    data.append('work_ratio', this.state.work_ratio);
    data.append('seed', this.state.seed);
    data.append('user', 'srb');
    var url = `${server_url}/output`
    fetch(url, { // Your POST endpoint
      method: 'POST',
      body: data // This is your fil[e object
    }).then(
      response => response.json()
    ).then(
      success => {
        if(success['done']){
          this.setState({message:null});
          setTimeout(() => {
            window.location.href = `${server_url}/download/${success['file']}`
          }, 1);
        }
        else {
          var message = success['message'];
          this.setState({message:message,showModel:true});
          message = message.replace(/\n/g, "<br />");
          message += "<br/><a href='#/Help' target='_blank' rel='noreferrer noopener'>Read the instructions</a><br/>";
          document.getElementById("modal_desc").innerHTML = message;
        }
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    )
  }

  render(){
    let advDisabled = !(this.state.teachers_list&&this.state.room_list&&this.state.schedule_list&&this.state.work_ratio);
    let buttonDisabled = advDisabled;
    return(
      <div className = "container">
        <div className = "row scheduler-box">
          <div className = "col-md-9 scheduler-box">
            <div className = "row" style={{minHeight:'150px'}}>
              <div className="col-md-6 srb-dropbox">
                <Dropbox filename="teachers_list"
                  ref={this.teacher_list_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("teachers_list",val,extra)}
                />
                </div>
              <div className="col-md-6 srb-dropbox">
                <Dropbox filename="schedule_list"
                  ref={this.schedule_list_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("schedule_list",val,extra)}
                />
              </div>
            </div>
            <div className = "row" style={{minHeight:'150px'}}>
              <div className="col-md-6 srb-dropbox">
                <Dropbox filename="room_list"
                  ref={this.room_list_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("room_list",val,extra)}
                />
              </div>
              <div className="col-md-6 srb-dropbox">
                <Dropbox filename="work_ratio"
                  ref={this.work_ratio_ref}
                  onFileChanged={(val,extra)=>this.onFileChanged("work_ratio",val,extra)}
                />
              </div>
            </div>

            <div className = "text-center">
              <button type="button" disabled={buttonDisabled}
                className="btn btn-primary"
                onClick={this.onClick}
                style={{marginTop:'30px'}}>
                Generate Output
              </button>
            </div>
          </div>{/*scheduler-box ends*/}
          <div className="col-md-3 scheduler-box">
            <TemplatePannel/>
          </div> {/**side bar ends */}
        </div> {/*row ends*/}
        <Modal show={this.state.showModel} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error! Incomplete Data</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modal_desc"></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseReset}>
              Reset
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Home;
