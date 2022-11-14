import React, { useState } from "react";
import { Input, Row, Whisper, Icon, Tooltip, ButtonToolbar, Button, Alert } from "rsuite";
import { send } from 'emailjs-com';
import "./index.css";

function ContactUs() {

    const [fieldEmpty, setFieldEmpty] = useState(false);
    const toSend = {
        from_name: '',
        subject: '',
        order_number: '',
        message: '',
        reply_to: '',
    };

    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

    const handleSubmit = event => {
        event.preventDefault();
        if (event.target.reply_to.value.trim() == "" || event.target.from_name.value.trim() == "" ||
            event.target.subject.value.trim() == "" || event.target.message.value.trim() == "") {
            setFieldEmpty(true);
        }
        else {
            setFieldEmpty(false);
            toSend.reply_to = event.target.reply_to.value;
            toSend.from_name = event.target.from_name.value;
            toSend.order_number = event.target.order_number.value;
            toSend.subject = event.target.subject.value;
            toSend.message = event.target.message.value;
            send(
                'service_bjdza9y',
                'template_66k7vfu',
                toSend,
                'eZuV0x8Om7gPoImYx'
            )
                .then((response) => {
                    Alert.success('Your message was successfully sent!', 0);
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch((err) => {
                    Alert.error('Error: Something went wrong. Please try again or email us directly at shop.tamsrams@gmail.com', 0)
                    console.log('FAILED...', err);
                });
        }

    }

    const ContactUsInstance = () => {
        return (
            <div className="contact-us-frame">

                <h2 className="contact-us-header">Contact Us</h2>
                <div className="contact-us-contents">

                    <p className="to-contact-us">To contact Tam's Rams, please fill out the form below
                        or email us at <a href="mailto: shop.tamsrams@gmail.com">shop.tamsrams@gmail.com</a></p>

                    <p className="to-contact-us">If you have a question you'd like to ask, please
                        check our <a href="/FAQ">FAQ page</a> to see if your answer can be found there before
                        sending your message. Thanks!</p>
                    <div className="contact-us-form-frame">
                        <form className="contact-us-form" onSubmit={(e) => handleSubmit(e)}>
                            <Row className="input-1-col">
                                <Input className="contact-us-input" name="reply_to" type="email" placeholder="Email Address" />
                            </Row>
                            <Row className="input-1-col">
                                <Input className="contact-us-input" placeholder="Name" name="from_name" />
                            </Row>
                            <Row className="input-2-col">
                                <Input className="contact-us-input" placeholder="Subject" name="subject" />
                                <Whisper placement="top" speaker={<Tooltip>Reason for contact (e.g. cancel order, report DOA, etc.)</Tooltip>}>
                                    <Icon icon="help-o" />
                                </Whisper>
                            </Row>
                            <Row className="input-1-col">
                                <Input className="contact-us-input" placeholder="Order Number (if applicable)" name="order_number" />
                            </Row>
                            <Row className="input-1-col">
                                <Input componentClass="textarea" rows={5} name="message" className="contact-us-input" placeholder="Message" />
                            </Row>
                            <Row className="submit-button-and-message-frame">
                                <ButtonToolbar>
                                    <Button appearance="primary" type="submit" >Submit</Button>

                                </ButtonToolbar>
                                {fieldEmpty && (<div className="invalid-field-frame">
                                    <p className="invalid-field-message">Please fill out all required fields.</p>
                                </div>)}
                            </Row>
                        </form>
                    </div>


                </div>

            </div >
        );
    };

    return (
        <ContactUsInstance />
    );

}

export default ContactUs;