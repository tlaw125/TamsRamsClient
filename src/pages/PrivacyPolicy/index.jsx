import React from "react";
import { Panel, PanelGroup } from "rsuite";
import "./index.css";

function PrivacyPolicy() {

    const PrivacyPolicyInstance = () => {
        return (
            <div className="privacy-frame">
                <div className="privacy-contents">
                    <h2 className="privacy-header">Privacy Policy </h2>

                    <PanelGroup>
                        <Panel>
                            <p className="privacy-info">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.tamsrams.com.</ p>
                            <h5 className="privacy-sub-sub-header">WHAT DO WE DO WITH YOUR INFORMATION?</h5>
                            <p className="privacy-info">When you purchase something from our store, as part of the buying and selling process, we collect the personal
                                information you give us such as your name, address and email address. We will save this info, as long as items you have ordered, into our database.
                                <br /><br />
                                When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system.
                                <br /><br />
                                Email marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">CONSENT</h5>
                            <p className="privacy-info">How do you get my consent?
                                <br /><br />
                                When you provide us with personal information to complete a transaction, place an order, arrange for a delivery or return a purchase,
                                we imply that you consent to our collecting it and using it for that specific reason only.
                                <br /><br />
                                If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.
                                <br /><br />
                                How do I withdraw my consent?
                                <br /><br />
                                If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at any time, by contacting us at shop.tamsrams@gmail.com.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">DISCLOSURE</h5>
                            <p className="privacy-info">We may disclose your personal information if we are required by law to do so or if you violate our Terms and Conditions.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">STRIPE</h5>
                            <p className="privacy-info">Our store uses Stripe Inc. to process payments. Tam’s Rams does not save your credit card information when you place an order. This information is sent to Stripe, where they
                                can verify and complete credit/debit card transactions.
                                <br /><br />
                                For more insight, you may also want to read Stripe's Privacy Statement (https://stripe.com/privacy).
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">THIRD-PARTY SERVICES</h5>
                            <p className="privacy-info">In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.
                                <br /><br />
                                However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to
                                provide to them for your purchase-related transactions.
                                <br /><br />
                                For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.
                                <br /><br />
                                In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with
                                a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.
                                <br /><br />
                                As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation, including the Patriot Act.
                                <br /><br />
                                Once you leave our store's website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website's Terms and Conditions.
                                <br /><br />
                                Links
                                <br /><br />
                                When you click on links on our store, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">SECURITY</h5>
                            <p className="privacy-info">To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
                                <br /><br />
                                If you provide us with your credit card information, the card numbers are encrypted at rest with AES-256. Decryption keys are stored on separate machines. None of Stripe's internal servers and daemons can obtain plain text card
                                numbers but can request that cards are sent to a service provider on a static allowlist. Stripe's infrastructure for storing, decrypting, and transmitting card numbers runs in a separate hosting environment, and doesn't share any
                                credentials with Stripe's primary services including our API and website.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">COOKIES</h5>
                            <p className="privacy-info">Currently we are not using any cookies, but this may change in future updates.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">AGE OF CONSENT</h5>
                            <p className="privacy-info">By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of
                                residence and you have given us your consent to allow any of your minor dependents to use this site.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">CHANGES TO THIS PRIVACY POLICY</h5>
                            <p className="privacy-info">We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make
                                material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it
                                <br /><br />
                                If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
                            </p>
                        </Panel>

                        <Panel>
                            <h5 className="privacy-sub-sub-header">QUESTIONS AND CONTACT INFORMATION</h5>
                            <p className="privacy-info">If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact us at shop.tamsrams@gmail.com.
                            </p>
                        </Panel>

                    </PanelGroup>

                </div>

            </div>
        );
    };

    return (
        <PrivacyPolicyInstance />
    );

}

export default PrivacyPolicy;