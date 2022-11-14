import { Container, FlexboxGrid, Grid, Row, Col, Icon } from 'rsuite';
import React from "react";
import YouTubeVideo from '../../YouTubeVideo';
import "./index.css";

function FollowUsPanel() {

  const FollowUsPanelInstance = ({ ...props }) => {
    return (
      <Container className="follow-us-frame">
        <Grid fluid>

          <Row xs={24} sm={24}>
            <Col >
              <h4 className="follow-us-header">Follow Us on Social Media to Stay Notified on Updates!</h4>
            </Col>
          </Row>

          <Row>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href="https://www.instagram.com/p/CYw6WWtv3PN/" target="_blank" rel="noreferrer noopener">
                <img src="images/instagram-pic3.jpg" className="follow-us-buttonIMG"></img>
              </a>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <a href="https://www.instagram.com/p/CZSVHYgP3Cg/" target="_blank" rel="noreferrer noopener">
                <img src="images/instagram-pic2.jpg" className="follow-us-buttonIMG"></img>
              </a>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} className="bigger-pic">
              <a href="https://www.instagram.com/p/CaIwGicPonB/" target="_blank" rel="noreferrer noopener">
                <img src="images/instagram-pic1.jpg" className="follow-us-buttonIMG"></img>
              </a>
            </Col>
          </Row>


          <div className="follow">
            <a href="https://www.instagram.com/aquarist_tl/" className="follow-link" target="_blank" rel="noreferrer noopener">
              <h4 className="follow-text">@Aquarist_TL on Instagram</h4>
              <Icon icon="instagram" size="2x" />
            </a>
          </div>


          <div className="youtube-section">
            <div className="youtube-videos">
              <div className="yt-video"><YouTubeVideo embedId="-KlItv5jHlo" /></div>
              <div className="yt-video"><YouTubeVideo embedId="CBl50Yj0zUU" /></div>
            </div>

            <div className="follow">
              <a href="https://www.youtube.com/channel/UC5RiHy5Jxk_Pn-5lhjNPjAw" className="follow-link" target="_blank" rel="noreferrer noopener">
                <h4 className="follow-text">@Tam's Rams on YouTube</h4>
                <Icon icon="youtube-play" size="2x" />
              </a>
            </div>

          </div>
        </Grid>
      </Container >
    );
  };

  return (
    <FollowUsPanelInstance />
  );
}

export default FollowUsPanel;