import React, {Component} from 'react';
import {server_url} from '../extra/constants.js'

class Admin extends Component{
    constructor(props) {
        super(props);
        this.initialstate = {
          message:null,
          list:[],
          status:'loading', // loading
        };
        this.state = this.initialstate;
      }

      componentDidMount = () => {
        var url = `${server_url}/admin_list_users`
        fetch(url, { // Your POST endpoint
          method: 'POST',
          credentials: 'include',
        }).then(
          response => response.json() // if the response is a JSON object
        ).then(
          success => {
            if(success['done']) {
              let list = JSON.parse(JSON.stringify(success['data']))
              this.setState({list:list})
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

      update_user = (username,action) => {
        var url = `${server_url}/admin_update_user`
        var data = new FormData();
        data.append('username', username);
        data.append('action', action);
        fetch(url, { // Your POST endpoint
          method: 'POST',
          credentials: 'include',
          body: data,
        }).then(
          response => response.json() // if the response is a JSON object
        ).then(
          success => {
            if(success['done']) {
              let list = JSON.parse(JSON.stringify(success['data']))
              this.setState({list:list})
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

      render(){
        const users_list = this.state.list.map((item, key) =>
            <tr>
            <td>{item.username}</td>
            {item.level >= 1 &&
              <td>pro</td>
            }
            {item.level >= 1 ||
              <td>{item.coins}</td>
            }
            <td>
              {item.level >= 1 ||
                <span>
                  <button className="btn btn-outline-info" type="button" style={{marginLeft:'5px'}} onClick={() => this.update_user(item.username,'add')}>+</button>
                  <button className="btn btn-outline-info" type="button" style={{marginLeft:'5px'}} onClick={() => this.update_user(item.username,'sub')}>-</button>
                  <button className="btn btn-outline-info" type="button" style={{marginLeft:'5px'}} onClick={() => this.update_user(item.username,'pro')}>
                  <i className="fas fa-crown" style={{color:'gold',fontSize:'18px'}}></i>
                  </button>
                </span>
              }
              {item.level >= 1 &&
                <button className="btn btn-outline-info" type="button" style={{marginLeft:'5px'}} onClick={() => this.update_user(item.username,'unpro')}>
                  un-pro
                </button>
              }
            </td>
            </tr>
          );
        return(
            <div>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>username</th>
                      <th>coins</th>
                      <th>inc/dec</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users_list}
                  </tbody>
                </table>
              
            </div>
        )
    }
}

export default Admin;