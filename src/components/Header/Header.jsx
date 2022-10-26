import React from "react";

//Style
import "./Header.scss";

//Icons and imgs
import logo from "../../assets/brand/logo.svg";
import heroLeft from "../../assets/svg/illustration-hero-left.svg";
import heroRight from "../../assets/svg/illustration-hero-right.svg";
import iconScroll from "../../assets/svg/icon-scroll.svg";
import heroSquiggle from "../../assets/svg/bg-hero-squiggle.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<img src={logo} alt="logo-img" className="header__logo" />
			</div>

			<section className="hero">
				<img src={heroLeft} alt="illustration-hero-left" className="hero__img left" />

				<div className="hero__content">
					<img src={heroSquiggle} alt="hero-squiggle-img" className="hero__content-squiggle" />
					<div className="container">
						<h1 className="hero__content-title">
							Get paid for the work you <span>love</span> to do.
						</h1>
						<p className="hero__content-text">The 9-5 grind is so last century. We believe in living life on your own terms. Whether you’re looking to escape the rat race or set up a side hustle, we’ve got you covered.</p>
						<img src={iconScroll} alt="icon-scroll" className="hero__content-icon" />
					</div>
				</div>

				<img src={heroRight} alt="illustration-hero-right" className="hero__img right" />
			</section>
		</header>
	);
};

export default Header;
