import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { checkPinCode, saveCardRequest } from "../../../redux/actions";
import "../styles.scss";
import { useDispatch, useSelector } from "react-redux";


const PaymentForm = () => {
    
    const [step,setStep] = useState("card-form");
    const card = useSelector(state => state.CardReducer.card);
    
    useEffect(() => {
       if(card?.cvc){
           setStep("pincode");
       }
    }, [card]);
    const dispatch = useDispatch();
	const [data, setData] = useState({
		cvc: "",
		expiry: "",
		name: "",
		number: ""
	});
	const handleInputChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		});
	};
const handleSubmit = () => {
    dispatch(saveCardRequest(data)); 
};

	return (
		<div id="PaymentForm">
            <Row>
                <Col className="card-col-1"><Cards 
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/></Col>

            <Col className="card-col-2">
           {step == "card-form" ?  <form >
				<input
					type="number"
					name="cvc"
					placeholder="CVC"
					onChange={handleInputChange}
				/>
				<input
					type="date"
					name="expiry"
					placeholder="Expire Date"
					onChange={handleInputChange}
				/>
				<input
					type="text"
					name="name"
					placeholder="Your Name"
					onChange={handleInputChange}
				/>
				<input
					type="number"
					name="number"
					placeholder="Card Number"
					onChange={handleInputChange}
				/>   
                 <Button className="card-btn" variant="success" onClick={() => handleSubmit()}>Continue</Button>
			</form> : <Form onSubmit={(e) => { e.preventDefault(); dispatch(checkPinCode(card,e.target.code.value));}}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Pin Code</Form.Label>
    <Form.Control type="password" placeholder="Enter your pin code" name="code" />
  </Form.Group>

  <Button variant="success" type="submit" >
    Submit
  </Button>
</Form> }
       
            </Col>

			
            </Row>
			
		</div>
	);
};

export default PaymentForm;