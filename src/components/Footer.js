import React, { Fragment } from 'react';

class Footer extends React.Component {
  render() {
    return (
<footer className="footer">
        <div className="footer_background" style={{backgroundImage:"url('images/footer_background.png')"}}></div>
		<div className="container">
			<div className="row footer_row">
				<div className="col">
					<div className="footer_content">
						<div className="row">

							<div className="col-lg-3 footer_col">
					
								
								<div className="footer_section footer_about">
									<div className="footer_logo_container">
										<a href="#">
											<div className="footer_logo_text">Gestion des clubs<span></span></div>
										</a>
									</div>
									<div className="footer_about_text">
										<p></p>
									</div>
								</div>
								
							</div>

							<div className="col-lg-3 footer_col">
					
								
								<div className="footer_section footer_contact">
									<div className="footer_title">Contact Us</div>
									<div className="footer_contact_info">
										<ul>
											<li>Tél : 0523 40 07 36 </li>
											<li>Fax : 0523 40 09 69</li>
											<li>Université Hassan 1er. Faculté des Sciences et Techniques de Settat</li>
											<li>Email : figi5p@gmail.com</li>

										</ul>
									</div>
								</div>
								
							</div>

							<div className="col-lg-3 footer_col">
					
								
								
								
							</div>

							<div className="col-lg-3 footer_col clearfix">
					
								
								<div className="footer_section footer_mobile">
									<div className="footer_title">Mobile</div>
									<div className="footer_mobile_content">
										<div className="footer_image"><a href=""><img src="images/mobile_1.png" alt=""/></a></div>
										<div className="footer_image"><a href=""><img src="images/mobile_2.png" alt=""/></a></div>
									</div>
								</div>
								
							</div>

						</div>
					</div>
				</div>
			</div>

			<div className="row copyright_row">
				<div className="col">
					<div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
						<div className="cr_text">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  <i className="fa fa-heart-o" aria-hidden="true"></i> <a href="https://colorlib.com" target="_blank">Fillière ingénieur : Génie informatique</a>
</div>
						
					</div>
				</div>
			</div>
		</div>
	</footer>
    );}

}

export default Footer;
