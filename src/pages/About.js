import React, {Component} from 'react';

import ProfilePic from '../components/ProfilePic/ProfilePic.js';

import anjali_dp from '../extra/images/anjali.jpg';
import prafull_dp from '../extra/images/prafull.jpg';
import rakesh_dp from '../extra/images/rakesh.jpg';
import srb_dp from '../extra/images/srb.jpeg';
import vinod_dp from '../extra/images/vinod.jpeg';

import './styles/About.css'

class About extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2></h2>
            <br/>
            <div className="row">
              <div className="col-sm-3 srb-profile-pic">
                <ProfilePic src={srb_dp}>
                  <div className="srb-profile-cover">
                    <h3 className="srb-profile-name">Srb Cheema</h3>
                    <br/>
                    <div className="srb-profile-links">
                      <a href="http://www.linkedin.com/in/srbcheema1/" target="_blank" rel="noreferrer noopener">
                        <i class="fa fa-linkedin"></i>
                      </a>
                      <a href="http://github.com/srbcheema1" target="_blank" rel="noreferrer noopener">
                        <i className="fa fa-github"></i>
                      </a>   
                      <a href="http://facebook.com/srbcheema" target="_blank" rel="noreferrer noopener">
                        <i class="fa fa-facebook-square"></i>
                      </a>
                      <a href="mailto:srbcheema2@gmail.com" target="_blank" rel="noreferrer noopener">
                        <i class="fas fa-envelope-open-text"></i>
                      </a>
                      {/* <a href="http://github.com/srbcheema1" target="_blank" rel="noreferrer noopener">
                        <i className="fa fa-twitter"></i>
                      </a> */}
                    </div>
                  </div>
                </ProfilePic>
              </div>
              <div className="col-sm-6 srb-desc">
                <h3>Srb Cheema</h3>
                <p>
                A curious guy who is in love with problems.
                I am student of Computer Science at Nit Hamirpur,
                enthusiastic about learning new algorithms and technologies related to computer science. 
                Those who know me say me a lazy programmer as I am quite lazy at repeating the stuff,
                I am habitual of writing down script to automate almost everthing that I feel like boring in repeating everytime.
                I am a compitive programmer as well as an Open Source lover.
                </p>
              </div>
              <div clasName="col-sm-3">
                      
              </div>
            </div>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row col-sm-12">
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={rakesh_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Rakesh Kumar</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="mailto:rakekum34@gmail.com" target="_blank" rel="noreferrer noopener">
                    <i class="fas fa-envelope-open-text"></i>
                  </a>
                  <a href="https://www.facebook.com/rakesh.choudhary.1710" target="_blank" rel="noreferrer noopener">
                    <i class="fa fa-facebook-square"></i>
                  </a>
                  <a href="http://github.com/spider34" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={prafull_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Prafull Dhiman</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="http://facebook.com/srbcheema" target="_blank" rel="noreferrer noopener">
                    <i class="fa fa-facebook-square"></i>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={anjali_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Anjali Kaushal</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="https://www.facebook.com/profile.php?id=100009926718610" target="_blank" rel="noreferrer noopener">
                    <i class="fa fa-facebook-square"></i>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
          <div className="col-sm-3 srb-profile-pic">
            <ProfilePic src={vinod_dp}>
              <div className="srb-profile-cover">
                <h3 className="srb-profile-name">Vinod Kumar</h3>
                <br/>
                <div className="srb-profile-links">
                  <a href="https://www.facebook.com/profile.php?id=100010074459602" target="_blank" rel="noreferrer noopener">
                    <i class="fa fa-facebook-square"></i>
                  </a>
                </div>
              </div>
            </ProfilePic>
          </div>
        </div>
      </div>
    );
  }
}
export default About
