import React from "react";
import { Panel, PanelGroup } from "rsuite";
import { Helmet } from "react-helmet-async";
import "./index.css";

function FAQ_Page() {

    let pathname = window.location.pathname;

    const FAQ_Page_Instance = ({ ...props }) => {
        return (
            <div className="faq-frame">
                <Helmet>
                    <title>FAQ</title>
                    <meta name="description" content="Questions about your order, fish in stock, or making requests? Check to see if we answered your question on our FAQ page." />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Tam's Rams - FAQ" />
                    <meta property="og:description" content="Questions about your order, fish in stock, or making requests? Check to see if we answered your question on our FAQ page." />
                    <meta property="og:image" content="https://lh3.googleusercontent.com/tjTuVWllfm44_xebwQjBrPhJxmlWKMl25U3tz5KDGQ-9jJ7YEBpsrHFlhXMruNJiRN1LOBpS4wzO7rNCCkZaArKa5pCtbHMRwjFjAHUS3qDTmWUmb3SRy8M_dd8GzNXeT2Z6NFOs=w2400" />
                    <meta
                        property="og:url"
                        content={"https://www.tamsrams.com" + pathname}
                    />
                    <link rel="canonical" href={pathname} />
                </Helmet>
                <div className="faq-contents">
                    <h2 className="faq-header">Frequently Asked Questions</h2>

                    <h3 className="faq-sub-header">Questions on Requests:</h3>
                    <PanelGroup accordion bordered>

                        <Panel className="faq-panel" header="Can I request a breeding pair?" collapsible bordered defaultExpanded>
                            <p className="faq-info">Unless the item is specifically listed as a breeding pair,
                                then the fish you'll receive will not be a proven breeding pair.
                            </p>
                        </Panel>

                        <Panel className="faq-panel" header="Can I request a certain amount of males/females?" collapsible bordered>
                            <p className="faq-info">You may request a certain number of males/females for your order,
                                but it is not guaranteed that we can fulfill it. We will do our best to accommodate
                                your request, but it depends on multiple factors such as quantity left in stock, availability, maturity of fish,
                                etc. If no request is made, we still try to send a good ratio of both sexes.
                            </p>
                        </Panel>

                        <Panel className="faq-panel" header="How do I add a heat pack for my order?" collapsible bordered>
                            <p className="faq-info">Prices for heat packs are already included in the total cost of shipping. A
                                heat pack will be added depending on the weather conditions over the period of days it will be in transport. We always
                                check the forecast of each destination before deciding whether to add a heat pack or not.
                            </p>
                        </Panel>

                        <Panel className="faq-panel" header="Can you hold off on shipping until I'm ready?" collapsible bordered>
                            <p className="faq-info">Yes, we can hold onto the fish you've ordered until you're ready. We just
                                ask that the holding period is not longer than 2 weeks after the order has been placed. Make your
                                request in the notes before you place your order or <a href="/contact-us">contact us </a> with your request.
                            </p>
                        </Panel>

                        <Panel className="faq-panel" header="Are local pickups available?" collapsible bordered>
                            <p className="faq-info">Unfortunately, we cannot offer local pickups at this time. On the bright side, if you are local,
                                shipping prices should be heavily reduced.
                            </p>
                        </Panel>
                    </PanelGroup>

                    <h3 className="faq-sub-header">Questions about My Order:</h3>
                    <PanelGroup accordion bordered>

                        <Panel header="When will I receive my tracking number?" collapsible bordered defaultExpanded>
                            <p className="faq-info">You should receive your tracking number by the end of
                                the day that the fish are set to ship. Feel free to <a href="/contact-us">contact us </a>
                                and ask us directly to send you your tracking number.
                            </p>
                        </Panel>

                        <Panel header="My package is delayed/lost. What can I do?" collapsible bordered>
                            <p className="faq-info">Once the package is shipped out, it is unfortunately out of
                                our control. We completely understand how stressful it can be waiting for live fish
                                to arrive. In most cases, the longest a package is delayed for is just one day. On the
                                off chance that it is lost, please <a href="/contact-us">contact us</a> and we'll do our best to figure out
                                a solution. Usually with these shipping services, we have to wait until the package arrives
                                before we can take action.
                            </p>
                        </Panel>

                        <Panel header="Can I change the shipping address after my order has been placed?" collapsible bordered>
                            <p className="faq-info">Yes, as long as the package hasn't been shipped yet.
                                Please <a href="/contact-us">contact us</a> immediately if you entered the wrong shipping address.
                                Once it is shipped out, it is unlikely we will be able to change it.
                            </p>
                        </Panel>

                        <Panel header="Can I add on to an order I already placed?" collapsible bordered>
                            <p className="faq-info">Yes you can add on to your order as long as it hasn't shipped out yet. Depending on
                                how much more you're adding, additional shipping charges may be added to accommodate the new addtions. Please <a href="/contact-us">contact us </a>
                                ASAP regarding what you would like added to your order.
                            </p>
                        </Panel>

                        <Panel header="Can I return my order?" collapsible bordered>
                            <p className="faq-info">We do not accept returns for any livestock, plant, or perishable items.
                            </p>
                        </Panel>
                    </PanelGroup>

                    <h3 className="faq-sub-header">Questions Related to Fish / Aquariums:</h3>
                    <PanelGroup accordion bordered>

                        <Panel header="What water parameters are the fish kept in?" collapsible bordered defaultExpanded>
                            <p className="faq-info">Water parameters for a specific fish can be found in that fish's
                                page under "Water Parameters". The parameters listed represent the ones they're currently kept in.
                            </p>
                        </Panel>

                        <Panel header="What foods do you feed?" collapsible bordered>
                            <p className="faq-info">Our fish have been feeding on a variety of different products,
                                including: flake food, nano pellets, baby brine shrimp, frozen brine shrimp, wafers, etc.
                                We make sure our fish get a healthy and balanced diet!
                            </p>
                        </Panel>

                    </PanelGroup>

                    <h3 className="faq-sub-header">Questions about Shipping or DOA:</h3>
                    <p className="faq-shipping-doa-info">Please check out our <a href="/shipping-doa-policy">Shipping &amp; DOA Policy</a> section for details
                        regarding our shipping process and DOA policy.</p>


                </div>

            </div>
        );
    };

    return (
        <FAQ_Page_Instance />
    );

}

export default FAQ_Page;