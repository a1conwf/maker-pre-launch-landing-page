import React from "react";

//Style
import "./PricingPlan.scss";

const PricingPlan = (props) => {
	return (
		<div className="card">
			<img src={props.img} alt="pricing-icon" className="card__img" />
			<span className="card__cta">{props.ctaTitle}</span>
			<p className="card__text">{props.text}</p>
			<div className="card__payment">
				<p className="card__payment-price">{props.price}</p>
				{props.period ? <span className="card__payment-period">{props.period}</span> : null}
			</div>
			<ul className="card__features">
				{props.features.map((feature) => (
					<li key={feature}>{feature}</li>
				))}
			</ul>
		</div>
	);
};

export default PricingPlan;
