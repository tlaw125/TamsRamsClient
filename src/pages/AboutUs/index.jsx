import React from "react";
import { Icon, Panel, PanelGroup } from "rsuite";
import "./index.css";

function AboutUs() {

    const AboutUsInstance = ({ ...props }) => {
        return (
            <div className="about-us-frame">
                <div className="about-us-bg">
                    <h2 className="about-us-header">About Us</h2>
                    <p className="about-us-bg-text">From our fish room to yours!</p>
                    <p className="about-us-bg-text2">We work hard to
                        breed high quality specimens that are rare to find locally in the hobby
                        so that we can share them all with you! </p>
                </div>
                <div className="about-us-contents">
                    <PanelGroup>
                        <Panel bordered>
                        <h3 className="about-us-sub-header">Social Media</h3>

                        <p className="about-us-social-media-text">Check us out on Instagram and YouTube! You can find more pictures 
                            and vides of our fish, and even see our breeding projects! There might 
                            even be giveaways that may take place on these platforms, so make sure 
                            to follow us for a chance to win!
                        </p>

                            <div className="about-us-social-media">

                                <a href="https://www.instagram.com/aquarist_tl/" target="_blank" rel="noreferrer noopener">
                                    <div className="about-us-ig-yt">
                                        <Icon icon="instagram" size="2x" />
                                        <h4 className="about-us-ig-yt-text">@Aquarist_TL</h4>
                                    </div>
                                </a>

                                <a href="https://www.youtube.com/channel/UC5RiHy5Jxk_Pn-5lhjNPjAw" target="_blank" rel="noreferrer noopener">
                                    <div className="about-us-ig-yt">
                                        <Icon icon="youtube-play" size="2x" />
                                        <h4 className="about-us-ig-yt-text">@Tam's Rams</h4>
                                    </div>
                                </a>

                            </div>
                        </Panel>


                        <Panel>
                            <h3 className="about-us-sub-header">Our Story</h3>
                            <p className="about-us-our-story-text">Tam's Rams all started with a spontaneous trip to a local
                                fish store in the city of San Francisco. Shortly after, my first fish tank was set up, but
                                the visits to the fish store never stopped. Fascinated by all the different species, I wanted
                                to be able to keep and raise them all! Unfortunately, that was not possible, but it did not stop
                                me from trying! More and more tanks were set up over time, and I gained experience keeping a lot of
                                the fish that were often seen at the local fish stores. However, it got to a point where I wanted
                                something different.<br /><br />

                                That's when a fellow hobbyist friend of mine informed me of the possibility of buying fish online. It opened
                                up an entirely new range of fish that were now accessible to me! The very first fish I ordered online were a
                                beautiful group of Philippine Blue Angelfish. The first group sent to me arrived all DOA, but the breeder was
                                luckily a kind and upstanding seller that sent me replacements for free. I remember the anxiety of waiting for
                                the fish to arrive while they were in transport, hoping they would still be fine and healthy once they got to me. Now
                                that I've ordered quite a few fish online, I'm happy to say I worry a lot less than when I started! <br /><br />

                                After a while of growing these Angelfish, I was able to get one pair to form. I had always been fascinated by breeding, but
                                at this point in time I hadn't even been able to successfully get livebearer fry to survive! Then began my rabbit hole down into
                                researching how to breed Angelfish. I failed many many times, but one day finally got it right! Raising those tiny fry into
                                young juveniles gave me such a rewarding feeling. It was then that my passion for breeding began, and hasn't stopped since. <br /><br />

                                I've been accumulating fish that aren't normally seen at local fish stores for some time now, and breeding and selling them online for
                                others like me that are passionate about fishkeeping. I've been predominantly working with rams (Mikrogeophagus ramirezi), trying to bring out
                                different color variations. Since I was a buyer long before I became a seller, I know firsthand
                                what expectations I should meet for the health of my fish and the satisfaction of my customers. With the help of some friends and family,
                                I'm overjoyed to be able to bring Tam's Rams to life. Thank you for checking out my website and I hope you find what you're looking for!<br /><br />

                                Happy fishkeeping! <br /><br />
                                - Tammy
                            </p>
                        </Panel>
                    </PanelGroup>
                </div>

            </div>
        );
    };

    return (
        <AboutUsInstance />
    );

}

export default AboutUs;