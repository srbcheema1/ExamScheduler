import React, { Component, useMemo } from 'react'
import Dropzone from 'react-dropzone'
import Loader from '../loader/Loader.js'
import './Dropbox.css'
import {server_url} from '../../extra/constants.js'

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '10px',
  borderWidth: 2,
  borderRadius: 2,
  minHeight:'130px',
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

class Dropbox extends Component {
  constructor(props){
    super(props);
    this.initialstate = {
      file:null,
      task:'empty', // verfying, empty, verified
      message:null,
    };
    this.state = this.initialstate;
  }

  Reset=()=>{
    this.setState({...this.initialstate});
  }

  onDropFile=(acceptedFiles)=>{
    this.setState({file:acceptedFiles[0],task:'verfying'})
    var data = new FormData();
    data.append('file', acceptedFiles[0]);

    var url = `${server_url}/upload_output`
    fetch(url, { // Your POST endpoint
      method: 'POST',
      body: data // This is your fil[e object
    }).then(
      response => response.json() // if the response is a JSON object
    ).then(
      success => {
        if(success['done']) {
          this.setState({file:acceptedFiles[0],task:'verified',message:null});
          this.props.onFileChanged(success['file'],{});
        } else {
          var message = success['message'];
          this.props.onFileChanged(false,{});
          this.setState({file:acceptedFiles[0],task:'wrong',message:message});
          message = message.replace(/\n/g, "<br />");
          message += "<br/><a href='#/Help' target='_blank' rel='noreferrer noopener'>Read the instructions</a><br/>";
          document.getElementById(this.props.filename+"_text").innerHTML = message;
        }
      }
    ).catch(
      error => console.log(error) // Handle the error response object
    );
  }

  render(props) {
    return (
      <Dropzone onDrop={this.onDropFile}>{
        ({ getRootProps, getInputProps, isDragAccept,
          isDragReject, isDragActive }) => {
          const style = useMemo(() => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
          }), [
            isDragActive,
            isDragReject
          ]);
          return (
            <section className="myTooltip">
              <div {...getRootProps({style})}>
                  <input {...getInputProps()} disabled={this.state.task==="_verified"}/>
                  <Loader {...{[this.state.task]:true, filename:this.props.filename}} />
              </div>
              {this.state.message&&
                <span className="myTooltiptext" id={this.props.filename+"_text"}>
                </span>
              }
            </section>
          )
        }
      }
      </Dropzone>
    )
  }

}
export default Dropbox;
