import React from "react";

//Style
import "./Feature.scss";

const Feature = (props) => {
	return (
		<article className="feature">
			<div className="feature__img">
				<img src={props.img} alt="feature-img" />
			</div>

			<div className="feature__content">
				<h3 className="feature__content-title">{props.title}</h3>
				<p className="feature__content-text">{props.text}</p>
			</div>
		</article>
	);
};

export default Feature;
