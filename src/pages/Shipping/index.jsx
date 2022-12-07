import React, { useState, useEffect } from "react";
import { Row, Loader, Input, Icon, Breadcrumb, ButtonToolbar, Button, Schema, Tooltip, Whisper } from "rsuite";
import StatePicker from "../../components/StatePicker";
import { Link, useLocation } from "react-router-dom";
import Axios from 'axios';
import "./index.css";

function ShippingPage() {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('')
    const [isEmpty, setEmpty] = useState(true);
    const [isValidated, setValidated] = useState(false);
    const [isInvalid, setInvalid] = useState(false);
    const [shippingOptions, setShippingOptions] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [fieldEmpty, setFieldEmpty] = useState(false);
    const [shippingSelected, setShippingSelected] = useState(false);
    const [serviceName, setServiceName] = useState('');
    const [servicePrice, setServicePrice] = useState(0);
    const [finalCart, setFinalCart] = useState([]);
    // const [orderRequest, setOrderRequest] = useState('');

    const location = useLocation();
    let cart = location.state.cart, shipOptions = [];
    let box_size = location.state.boxSize, box_length = 0,
        box_width = 0, box_height = 0, box_weight = 0, box_dimensions = "";
    let usps_price = 22;

    // console.log(location.state.subtotal);
    // console.log("Box Size: " + box_size);
    // console.log("Cart: " + cart);

    if (box_size == "small" || box_size == "plants_only") {
        box_length = 8; box_width = 8; box_height = 8, box_weight = 3, usps_price = 22;
    }
    else if (box_size == "medium") {
        box_length = 10; box_width = 10; box_height = 8, box_weight = 5, usps_price = 29;
    }
    else if (box_size == "large") {
        box_length = 12; box_width = 10; box_height = 8, box_weight = 6, usps_price = 33;
    }
    box_dimensions = box_length + "x" + box_width + "x" + box_height;

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            // if (localStorage.getItem("tamsramscart")) {
            //     cart = (JSON.parse(localStorage.getItem("tamsramscart")));
            if (Object.entries(cart).length > 0) {
                setEmpty(false);
                // let count = 0;
                var tempCart = [];

                for (const prod of cart) {
                    let item = {};
                    item["id"] = prod[0].id;
                    item["product_name"] = `${prod[0].product_name} - ${prod[0].variation_name}`;
                    item["quantity"] = prod[0].quantity_in_cart;
                    item["priceInCents"] = (prod[0].price * 100).toFixed();
                    tempCart.push(item);
                }
                // console.log(tempCart);
                setFinalCart(tempCart);
            }
            else { setEmpty(true); }
            // }
            // console.log("finalCart: "+  finalCart);
            // console.log("finalCart: "+ JSON.stringify(finalCart));
        }
        return () => {
            isMounted = false;
        }
    }, []);

    // console.log("finalCart: " + JSON.stringify(finalCart));


    const handleSubmit = event => {
        event.preventDefault();
        setInvalid(false);
        setEmail(event.target.email.value);
        setFirstName(event.target.first_name.value);
        setLastName(event.target.last_name.value);
        setAddress1(event.target.address1.value);
        setAddress2(event.target.address2.value);
        setCity(event.target.city.value);
        setState(event.target.state.value);
        setZipcode(event.target.zip_code.value);
        // console.log(event.target.email.value);
        // console.log(event.target.first_name.value);
        // console.log(event.target.last_name.value);
        if (event.target.email.value.trim() == "" || event.target.first_name.value.trim() == "" || event.target.last_name.value.trim() == "") {
            // console.log("EMPTY FIELD");
            setFieldEmpty(true);
        }
        else {
            setFieldEmpty(false);
            Axios.get("https://tams-rams.herokuapp.com/api/validate-shipping-address", {
                params:
                {
                    address1: event.target.address1.value,
                    address2: event.target.address2.value,
                    city: event.target.city.value,
                    state: event.target.state.value,
                    zip_code: event.target.zip_code.value
                }
            }).then((response) => {
                // console.log(JSON.stringify(response.data));
                let validated_address = response.data;
                if ("Error" in validated_address.AddressValidateResponse.Address) {
                    // console.log("ERROR IN ADDRESS");
                    setInvalid(true);
                }
                else {
                    setAddress1(validated_address.AddressValidateResponse.Address.Address2);
                    setAddress2(validated_address.AddressValidateResponse.Address.Address1);
                    setCity(validated_address.AddressValidateResponse.Address.City);
                    setState(validated_address.AddressValidateResponse.Address.State);
                    setZipcode(validated_address.AddressValidateResponse.Address.Zip5);
                    setValidated(true);
                    // console.log("info: " + validated_address.AddressValidateResponse.Address.City, validated_address.AddressValidateResponse.Address.State, validated_address.AddressValidateResponse.Address.Zip5);
                    // console.log("box dimensions: " + box_length + box_width + box_height + box_weight);
                    Axios.get("https://tams-rams.herokuapp.com/api/get-shipping-rates", {
                        params:
                        {
                            // address1: address1,
                            // address2: address2,
                            city: validated_address.AddressValidateResponse.Address.City,
                            state: validated_address.AddressValidateResponse.Address.State,
                            zip_code: validated_address.AddressValidateResponse.Address.Zip5,
                            box_length: box_length,
                            box_width: box_width,
                            box_height: box_height,
                            box_weight: box_weight
                            // city: city,
                            // state: state,
                            // zip_code: zipcode
                        }
                    }).then((response) => {
                        // console.log(JSON.stringify(response.data));
                        setShippingOptions(response.data);
                        setLoading(false);
                        // if (shippingOptions.length > 0) { setLoading(false); }

                    }
                    )
                }
            })
                .catch((error => {
                    console.log(error);
                }))
        }

    }


    const handleValidatedChange = () => {
        setValidated(false);
        setLoading(true);
        setShippingSelected(false);
    }

    const handleRadioChange = (e) => {
        // setValidated(false);
        // e.preventDefault();
        setServiceName(e.target.getAttribute("service_name"));
        let serviceCode = e.target.getAttribute("service_code");
        setServicePrice(e.target.value);
        // console.log("radio: " + serviceName + serviceCode + servicePrice);
        setShippingSelected(true);

        let tempCart = finalCart;
        const shipping_exists = tempCart.findIndex(element => { return element.id === "shipping_method" });
        // console.log("Shipping exists: " + shipping_exists);
        if (shipping_exists == -1) {
            let item = {};
            item["id"] = "shipping_method";
            item["product_name"] = e.target.getAttribute("service_name");
            item["quantity"] = 1;
            item["priceInCents"] = (e.target.value * 100).toFixed();
            tempCart.push(item);
        }
        else {
            tempCart[shipping_exists].product_name = e.target.getAttribute("service_name");
            tempCart[shipping_exists].priceInCents = (e.target.value * 100).toFixed();
        }

        setFinalCart(tempCart);
    }

    // if (isLoading && !isEmpty) {
    //     return <div>Loading...</div>;
    //   }
    //   else {
    if (!isLoading) {
        shipOptions.push(shippingOptions.map((val) => {
            if (val.serviceCode == "ups_next_day_air" || val.serviceCode == "ups_next_day_air_saver" || val.serviceCode == "ups_2nd_day_air" || (val.serviceCode == "ups_ground" && state == "CA")) {
                let adjustedShippingCost = (val.shipmentCost + 5).toFixed(2);
                return (
                    <label key={val.serviceCode} className="shipping-options-radio-select">
                        <div><input type="radio" checked={serviceName === val.serviceName} service_name={val.serviceName} service_code={val.serviceCode} value={adjustedShippingCost} name={`shipping-option-${val.serviceCode}`} className="shipping-options-radio-button" onChange={(e) => handleRadioChange(e)} />
                            {val.serviceName}</div>
                        <div>${adjustedShippingCost}</div>
                    </label>)
            }

        }));

        if (box_size == "plants_only") {
            shipOptions.push(
                <label key="plants_only_shipping" className="shipping-options-radio-select">
                    <div><input type="radio" checked={serviceName === "USPS Priority (PLANTS ONLY)"} service_name="USPS Priority (PLANTS ONLY)" service_code="plants_only_option" value={11.50} name={`shipping-option-plants-only`} className="shipping-options-radio-button" onChange={(e) => handleRadioChange(e)} />
                        USPS Priority (PLANTS ONLY)</div>
                    <div>$11.50</div>
                </label>);
        }

        shipOptions.push(
            <form key="order-req" onSubmit={(e) => handleContinueToPayment(e)}>
                <Input componentClass="textarea" rows={5} name="order_request" className="order-request-text-box"
                    placeholder="Any requests you'd like to make regarding your order? Please note, we cannot guarantee every request. (255 character limit)" />
                <ButtonToolbar className="continue-to-payment-button">
                    <Button appearance="primary" type="submit">Continue to Payment</Button>
                </ButtonToolbar>
            </form>)

        shipOptions.push(
            <label key="usps_priority_shipping" className="shipping-options-radio-select">
                <div><input type="radio" checked={serviceName === "USPS Priority Flat Rate"} service_name="USPS Priority Flat Rate" service_code="usps_priority_option" value={11.50} name={`usps_priority`} className="shipping-options-radio-button" onChange={(e) => handleRadioChange(e)} />
                    USPS Priority Flat Rate</div>
                <div>${usps_price}.00</div>
            </label>);
    }

    const handleContinueToPayment = (e) => {
        e.preventDefault();
        fetch("https://tams-rams.herokuapp.com/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cart: finalCart, email: email, first_name: firstName, last_name: lastName,
                address1: address1, address2: address2, city: city, state: state,
                zip_code: zipcode, box_dimensions: box_dimensions, order_request: e.target.order_request.value
            })
        }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        })
            .catch(e => {
                console.error(e.error)
            })
    }

    // }

    const ShippingForm = (<form className="shipping-page-form" onSubmit={(e) => handleSubmit(e)}>
        <p className="shipping-address-header">Shipping Address &amp; Contact Info</p>
        <Row className="address-input-1-col">
            <Input name="email" type="email" defaultValue={email} placeholder="Email Address" />
        </Row>
        <Row className="address-input-2-col">
            <Input placeholder="First Name" defaultValue={firstName} name="first_name" className="address-input-2-col-1" />
            <Input placeholder="Last Name" defaultValue={lastName} name="last_name" className="address-input-2-col-2" />
        </Row>
        <Row className="address-input-1-col">
            <Input placeholder="Address" defaultValue={address1} name="address1" />
        </Row>
        <Row className="address-input-1-col">
            <Input placeholder="Apartment, suite, etc. (optional)" defaultValue={address2} name="address2" />
        </Row>
        <Row className="address-input-1-col">
            <Input placeholder="City" defaultValue={city} name="city" />
        </Row>
        <Row className="address-input-2-col">
            <div className="state-picker"><StatePicker defaultValue={state} name="state" /></div>
            <Input placeholder="ZIP Code" defaultValue={zipcode} name="zip_code" className="address-input-2-col-2" />
        </Row>
        <Row className="val-ad-button-and-message-frame">
            <ButtonToolbar>
                <Button appearance="primary" type="submit" >Validate Address</Button>
                <Whisper speaker={<Tooltip>Checks if address is valid and converts it into proper formatting if needed. </Tooltip>}>
                    <Icon icon="help-o" />
                </Whisper>
            </ButtonToolbar>
            {isInvalid && (<div className="invalidAddressFrame">
                <p className="invalidAddressMessage">Invalid address entered.</p>
            </div>)}
            {fieldEmpty && (<div className="invalidAddressFrame">
                <p className="invalidAddressMessage">Please fill out all required fields.</p>
            </div>)}
        </Row>
    </form>);

    const ValidatedShippingForm = (<div className="validated-shipping-frame">
        <form className="validated-shipping-page-form" onSubmit={(e) => handleSubmit(e)}>
            <p className="shipping-address-header">Shipping Address &amp; Contact Info</p>
            <Row className="address-input-1-col">
                <Input name="email" type="email" placeholder="Email Address" value={email} onChange={() => handleValidatedChange()} />
            </Row>
            <Row className="address-input-2-col">
                <Input placeholder="First Name" name="first_name" className="address-input-2-col-1" value={firstName} onChange={() => handleValidatedChange()} />
                <Input placeholder="Last Name" name="last_name" className="address-input-2-col-2" value={lastName} onChange={() => handleValidatedChange()} />
            </Row>
            <Row className="address-input-1-col">
                <Input placeholder="Address" name="address1" value={address1} onChange={() => handleValidatedChange()} />
            </Row>
            <Row className="address-input-1-col">
                <Input placeholder="Apartment, suite, etc. (optional)" name="address2" value={address2} onChange={() => handleValidatedChange()} />
            </Row>
            <Row className="address-input-1-col">
                <Input placeholder="City" name="city" value={city} onChange={() => handleValidatedChange()} />
            </Row>
            <Row className="address-input-2-col">
                <div className="state-picker"><StatePicker name="state" defaultValue={state} onChange={() => handleValidatedChange()} /></div>
                <Input placeholder="ZIP Code" name="zip_code" className="address-input-2-col-2" value={zipcode} onChange={() => handleValidatedChange()} />
            </Row>
            <Row className="val-ad-button-and-message-frame">
                <div className="validAddressFrame">
                    <Icon className="validAddressIcon" icon="check-circle" />
                    <p className="validAddressMessage">Address has been validated!</p>
                </div>
            </Row>
            <Row className="val-ad-button-and-message-frame">
                <div className="validAddressFrame">
                    <Icon className="checkAddressIcon" icon="info" />
                    <p className="checkAddressMessage">Please verify the address is correct.</p>
                </div>
            </Row>
        </form>
        <div className="shipping-options-frame">
            <p className="shipping-options-header">Shipping Options</p>
            <div className="shipping-options-radio-group" >
                {isLoading && <Loader />}
                {!isLoading && shipOptions}
                {/* <label className="shipping-options-radio-select"><input type="radio" value="Male" name="shipping-option" className="shipping-options-radio-button" />Male</label>
                <label className="shipping-options-radio-select"><input type="radio" value="Female" name="shipping-option" className="shipping-options-radio-button" />Female</label>
                <label className="shipping-options-radio-select"><input type="radio" value="Other" name="shipping-option" className="shipping-options-radio-button" />Other</label> */}
            </div>
            {shippingSelected}
            {/* && (<div className="continue-to-payment-button"> */}
            {/* <form action="/create-checkout-session" method="POST"> */}
            {/* <ButtonToolbar>
                    <Button appearance="primary" onClick={() => handleContinueToPayment()} >Continue to Payment</Button>
                </ButtonToolbar> */}
            {/* </form> */}
            {/* </div>)} */}
        </div>
    </div >);

    const ShippingPageInstance = () => {
        return (
            <>
                {!isEmpty && (<div className="shipping-page-with-image">
                    <div className="shipping-page-frame">
                        <div className="shipping-breadcrumb">
                            <Breadcrumb separator={<Icon icon="angle-right" />}>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="/cart">Shopping Cart</Breadcrumb.Item>
                                <Breadcrumb.Item active>Shipping</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <h2 className="shipping-page-header">Shipping</h2>
                        <div className="shipping-page-contents">
                            {isValidated ? ValidatedShippingForm : ShippingForm}
                        </div>
                    </div >
                    <div className="shipping-image"></div>
                </div>)}
                {isEmpty && (<div className="EmptyShippingPage">

                    <Breadcrumb separator={<Icon icon="angle-right" />}>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="/cart">Shopping Cart</Breadcrumb.Item>
                        <Breadcrumb.Item active>Shipping</Breadcrumb.Item>
                    </Breadcrumb>

                    <h2 className="shipping-page-header">Shipping</h2>

                    <div className="cart-is-empty-frame">
                        <p className="cart-is-empty-header">There are no items in your cart.</p>
                    </div>

                    <Link to="/browse/fish/all?sortby=product_name&orderby=asc">
                        <div className="continue-shopping-frame">
                            <Icon icon="long-arrow-left" />
                            <p className="continue-shopping-text">Continue Shopping</p>
                        </div>
                    </Link>

                </div>)}
            </>
        );
    };

    return (
        <ShippingPageInstance />
    );

}

export default ShippingPage;