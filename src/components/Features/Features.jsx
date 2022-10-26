import React from "react";
import Feature from "./Feature/Feature";

//Style
import "./Features.scss";

//Data
import {featuresData} from "../../data/data";

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				<div className="features__inner">
					{featuresData.map((feature) => (
						<Feature key={feature.id} img={feature.img} title={feature.title} text={feature.text} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
