import React from 'react';
import './Footer.css';
import img1 from '../../images/logo.png'
import img2 from '../../images/facebook-logo-in-circular-shape@2x.png'
import img3 from '../../images/linkedin (2)@2x.png'
import img4 from '../../images/twitter (4)@2x.png'


const Footer = () => {
    return (
        <div style={{backgroundColor:"#f5f5f5"}} className="pt-5 pb-3">
            <section class="footer-area section-padding pb-5 pt-5">
			<div class="container">

				<div class="row d-flex justify-content-center ">
					<div class="col-md-3  text-center">
						<div class="footer-logo">
							<img className="w-50" src={img1} alt="" />
						</div>
						<div class="single-footer mt-3">
							<a href=""><img className="pr-2" style={{width:"40px"}} src={img2} alt="" /></a>
							<a href=""><img className="pr-2" style={{width:"40px"}} src={img3} alt="" /></a>
							<a href=""><img className="pr-2" style={{width:"40px"}} src={img4} alt="" /></a>
							
						</div>
					</div>
					<div class="col-md-3 text-center">
						<div class="single-footer">
							<ul>
								<li>Features</li>
								<li>Enterprise</li>
								<li>Pricing</li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 text-center">
						<div class="single-footer">
							<ul>
								<li>Blog</li>
								<li>Help Center</li>
								<li>Contact Us</li>
								<li>Status</li>
							</ul>
						</div>
					</div>
					<div class="col-md-3 text-center">
						<div class="single-footer">
							<ul>
								<li>About Us</li>
								<li>Terms of Service</li>
								<li>Security</li>
								<li>Login</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
			<p className="text-center text-secondary pt-2 m-0"><small> © 2020 © Krazy IT. All Rights Reserved.</small></p>
		</section>
        </div>
    );
};

export default Footer;