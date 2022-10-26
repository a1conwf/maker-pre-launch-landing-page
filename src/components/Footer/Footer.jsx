import React from "react";
import {useState} from "react";

//Style
import "./Footer.scss";

const Footer = () => {
	const [emailValue, setEmailValue] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		const emailRegex = /\S+@\S+\.\S+/;

		if (emailValue === "") {
			setError("Oops! Please add your email");
		} else if (!emailValue.match(emailRegex)) {
			setError("Oops! That doesn’t look like an email address");
		} else {
			setError(null);
		}
	};

	return (
		<footer className="footer">
			<div className="container">
				<h2 className="footer__title">Get notified when we launch</h2>
				<form className={error ? "form error" : "form"} onSubmit={handleSubmit}>
					<div className="form__input">
						<input type="text" placeholder="Email address" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
						<p className="form__input-text">{error}</p>
					</div>
					<button className="btn">Get notified</button>
				</form>
			</div>
		</footer>
	);
};

export default Footer;
