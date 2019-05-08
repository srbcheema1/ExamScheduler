import React, {Component} from 'react';

import ProfilePic from '../components/ProfilePic/ProfilePic.js';

import anjali_dp from '../extra/images/anjali.jpg';
import prafull_dp from '../extra/images/prafull.jpg';
import rakesh_dp from '../extra/images/rakesh.jpg';
import srb_dp from '../extra/images/srb.jpeg';
import vinod_dp from '../extra/images/vinod.jpeg';

import email_logo from '../extra/images/email.svg';
import github_logo from '../extra/images/github.svg';
import facebook_logo from '../extra/images/facebook.svg';
import linkedin_logo from '../extra/images/linkedin.svg';

import './styles/About.css'

class About extends Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br/>
            <div className="row">
              <div className="col-sm-3 srb-profile-pic">
                <ProfilePic src={srb_dp}>
                  <div className="srb-profile-cover">
                    <h3 className="srb-profile-name">Srb Cheema</h3>
                    <br/>
                    <div className="srb-profile-links">
                      <a href="http://www.linkedin.com/in/srbcheema1/" target="_blank" rel="noreferrer noopener">
                        <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                      </a>
                      <a href="http://github.com/srbcheema1" target="_blank" rel="noreferrer noopener">
                        <img src={github_logo} className="srb-logo" alt="github"/>
                      </a>   
                      <a href="http://facebook.com/srbcheema" target="_blank" rel="noreferrer noopener">
                        <img src={facebook_logo} className="srb-logo" alt="facebook"/>
                      </a>
                      <a href="mailto:srbcheema2@gmail.com" target="_blank" rel="noreferrer noopener">
                        <img src={email_logo} className="srb-logo" alt="email"/>
                      </a>
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
                  <a href="http://www.linkedin.com/in/rakesh-kumar-2b05a4138" target="_blank" rel="noreferrer noopener">
                   <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                  </a>
                  <a href="http://github.com/spider34" target="_blank" rel="noreferrer noopener">
                    <img src={github_logo} className="srb-logo" alt="github"/>
                  </a>
                  <a href="mailto:rakekum34@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
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
                  <a href="http://www.linkedin.com/in/picasadhiman" target="_blank" rel="noreferrer noopener">
                   <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                  </a>
                  <a href="https://www.facebook.com/prafull.dhiman" target="_blank" rel="noreferrer noopener">
                    <img src={facebook_logo} className="srb-logo" alt="facebook"/>
                  </a>
                  <a href="mailto:picasadhiman@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
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
                  <a href="https://www.linkedin.com/in/anjali-kaushal-068566162" target="_blank" rel="noreferrer noopener">
                   <img src={linkedin_logo} className="srb-logo" alt="linkedin"/>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100009926718610" target="_blank" rel="noreferrer noopener">
                    <img src={facebook_logo} className="srb-logo" alt="facebook"/>
                  </a>
                  <a href="mailto:njlkaushal@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
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
                    <img src={facebook_logo} className="srb-logo" alt="facebook"/>
                  </a>
                  <a href="mailto:Kumarvinod.nith@gmail.com" target="_blank" rel="noreferrer noopener">
                    <img src={email_logo} className="srb-logo" alt="email"/>
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
