import React from "react";
import PricingPlan from "./PricingCard/PricingPlan";

//Style
import "./Pricing.scss";

//Data
import {pricingPlansData} from "../../data/data";

const Pricing = () => {
	return (
		<section className="pricing">
			<div className="container">
				<h2 className="pricing__title">Our pricing plans</h2>
				<p className="pricing__text">We only make money when our creators make money. Our plans are always affordable, and it’s completely free to get started.</p>
				<div className="pricing__cards">
					{pricingPlansData.map((plan) => (
						<PricingPlan key={plan.id} img={plan.img} ctaTitle={plan.ctaTitle} text={plan.text} price={plan.price} period={plan.period} features={plan.features} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
