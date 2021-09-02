import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./styles.scss";

const Card = () => {
	const data = {
		cvc: "123",
		expiry: "323",
		name: "323",
		number: "4567890-45"
	};


	return (
		<div id="PaymentForm">
			<Cards 
				cvc={data.cvc}
				expiry={data.expiry}
				focus={data.focus}
				name={data.name}
				number={data.number}
			/>
		</div>
	);
};

export default Card;