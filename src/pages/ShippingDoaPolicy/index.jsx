import React from "react";
import { Icon, Panel, PanelGroup } from "rsuite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faShield, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { Helmet } from "react-helmet-async";

function ShippingDoaPolicy() {

    let pathname = window.location.pathname;

    const ShippingDoaPolicyInstance = ({ ...props }) => {
        return (
            <div className="shipping-doa-frame">
                <Helmet>
                    <title>Shipping and DOA Policy</title>
                    <meta name="description" content="All fish ordered from Tam's Rams have a Live Arrival Guarantee as long as these guidelines are followed." />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Tam's Rams - Shipping and DOA Policy" />
                    <meta property="og:description" content="All fish ordered from Tam's Rams have a Live Arrival Guarantee as long as these guidelines are followed." />
                    <meta property="og:image" content="https://lh3.googleusercontent.com/tjTuVWllfm44_xebwQjBrPhJxmlWKMl25U3tz5KDGQ-9jJ7YEBpsrHFlhXMruNJiRN1LOBpS4wzO7rNCCkZaArKa5pCtbHMRwjFjAHUS3qDTmWUmb3SRy8M_dd8GzNXeT2Z6NFOs=w2400" />
                    <meta
                        property="og:url"
                        content={"https://www.tamsrams.com" + pathname}
                    />
                    <link rel="canonical" href={pathname} />
                </Helmet>
                <div className="shipping-doa-contents">
                    <h2 className="shipping-doa-header">Shipping &amp; DOA Policy </h2>
                    <h3 className="shipping-doa-sub-header">Shipping Information</h3>
                    <p className="shipping-doa-lower-48"><b>Please Note: </b>We can only ship to the lower 48 states of the U.S. Hawaiian customers may place an order only if they have a permit to import fish.
                        If you're from Hawaii and want to order, please <a href="/contact-us">contact us</a>.</p>

                    <PanelGroup>
                        <Panel>
                            <div className="header-with-icon">
                                <h5 className="shipping-doa-sub-sub-header">Shipping Options &amp; Rates</h5>
                                <Icon icon="truck" size="lg" />
                            </div>
                            <p className="shipping-doa-info"><b className="shipping-doa-bold">UPS Next Day Air:</b> Overnight shipping that arrives as early as 8am.
                                Highly recommended to ensure the health and safety of the fish, especially during extreme temperatures.
                                <br /><br />
                                <b className="shipping-doa-bold">UPS Next Day Air Saver:</b> A slightly cheaper overnight option compared to Next Day Air. Packages are usually delivered
                                by 3 - 4PM. This option is only available to certain locations in the country.
                                Highly recommended to ensure the health and safety of the fish, especially during extreme temperatures.
                                <br /><br />
                                <b className="shipping-doa-bold">UPS 2nd Day Air:</b> 2-day shipping, an option that is more cost-friendly
                                but still quick to deliver.
                                <br /><br />
                                <b className="shipping-doa-bold">UPS Ground:</b> Only available for customers in California. Packages are
                                usually delivered within 2 days.
                                <br /><br />
                                <b className="shipping-doa-bold">USPS Priority:</b> A more budget-friendly option for those closer to the East Coast. 
                                It can take as fast as 2 days or as slow as 4 days to deliver (depending on delays). It's usually the cheapest
                                option available, and should be considered only if weather conditions look good. <br /><br />
                                Shipping rates are calculated by the distance in which the package must travel, as well as the weight/size of the package.
                                We are located in San Francisco, CA so the further you are from there, the greater the cost of shipping.
                            </p>

                        </Panel>

                        <Panel>
                            <div className="header-with-icon">
                                <h5 className="shipping-doa-sub-sub-header">Shipping Schedule</h5>
                                <Icon icon="calendar" size="lg" />
                            </div>
                            <p className="shipping-doa-info">Shipping days are every Monday. If a federal holiday falls
                                on Monday, then the fish will be shipped on the next available day
                                that post offices are open. If you place an order on Sunday, it is not guaranteed to go out
                                the following day, as the fish need to be fasted at least 24 hours in advance to being shipped.<br /><br />
                                <b>NOTE:</b> Shipping may be postponed if weather conditions are too extreme in either
                                origin or destination locations.</p>
                        </Panel>

                        <Panel>
                            <div className="header-with-icon">
                                <h5 className="shipping-doa-sub-sub-header">Shipping Process</h5>
                                <FontAwesomeIcon icon={faBox} size="lg" />
                            </div>
                            <p className="shipping-doa-info">The fish are fasted for at least 24 hours so that there will be less
                                waste in the bags during transport. Boxes are lined with 1 inch thick foam boards to help insulate
                                the package. All of the fish are double-bagged to lower the chances of any water leaking.
                                If possible, fish are individually bagged to prevent the water from going bad for all of the fish in the
                                case of a DOA. If the order contains a lot of fish, then they are divided into small groups to fit
                                as many bags as the box can hold. 72-hour heat packs are added if deemed necessary (usually if
                                origin or destination locations have highs below 60F).</p>
                        </Panel>
                    </PanelGroup>
                    <h3 className="shipping-doa-sub-header">DOA Policy</h3>

                    <PanelGroup>
                        <Panel>
                            <div className="header-with-icon">
                                <h5 className="shipping-doa-sub-sub-header">Live Arrival Guarantee</h5>
                                <FontAwesomeIcon icon={faShield} size="lg" />
                            </div>
                            <p className="shipping-doa-info">
                                All fish ordered from Tam's Rams have a Live Arrival Guarantee as long as these guidelines are followed: <br /><br />

                                If any fish arrives DOA (dead on arrival), please <a href="/contact-us">contact us </a>and send two clear photos of the dead fish in
                                the original unopened packaging within 2 hours of the first delivery attempt for a refund or replacement.
                                Shipping charges will not be refunded and the buyer will have to pay for shipping again in the case of replacements.
                                This DOA policy only applies to the fish purchased, not extras.
                            </p>
                        </Panel>

                        <Panel>
                            <div className="header-with-icon">
                                <h5 className="shipping-doa-sub-sub-header">Return Policy</h5>
                                <FontAwesomeIcon icon={faRotateLeft} size="lg" />
                            </div>
                            <p className="shipping-doa-info">
                                We do not accept returns for any livestock, plant, or perishable items.
                            </p>
                        </Panel>
                    </PanelGroup>

                </div>

            </div>
        );
    };

    return (
        <ShippingDoaPolicyInstance />
    );

}

export default ShippingDoaPolicy;