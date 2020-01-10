import React from 'react';

class Home extends React.Component {
  render() {
    return (

        <div className="home">
		<div className="home_slider_container">
			
			
			<div className="owl-carousel owl-theme home_slider">
				
				
				<div className="owl-item">
                    <div className="home_slider_background" style={{backgroundImage:"url('images/home_slider_1.jpg')"}}></div>
					<div className="home_slider_content">
						<div className="container">
							<div className="row">
								<div className="col text-center">
									<div className="home_slider_title">The Premium System Education</div>
									<div className="home_slider_subtitle">Future Of Education Technology</div>
									<div className="home_slider_form_container">
										<form action="#" id="home_search_form_1" className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
											<div className="d-flex flex-row align-items-center justify-content-start">
												<input type="search" className="home_search_input" placeholder="Keyword Search" required="required"/>
												<select className="dropdown_item_select home_search_input">
													<option>Category Courses</option>
													<option>Category</option>
													<option>Category</option>
												</select>
												<select className="dropdown_item_select home_search_input">
													<option>Select Price Type</option>
													<option>Price Type</option>
													<option>Price Type</option>
												</select>
											</div>
											<button type="submit" className="home_search_button">search</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				
				<div className="owl-item">
					<div className="home_slider_background" style={{backgroundImage:"url('images/home_slider_1.jpg')"}}></div>
					<div className="home_slider_content">
						<div className="container">
							<div className="row">
								<div className="col text-center">
									<div className="home_slider_title">The Premium System Education</div>
									<div className="home_slider_subtitle">Future Of Education Technology</div>
									<div className="home_slider_form_container">
										<form action="#" id="home_search_form_2" className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
											<div className="d-flex flex-row align-items-center justify-content-start">
												<input type="search" className="home_search_input" placeholder="Keyword Search" required="required"/>
												<select className="dropdown_item_select home_search_input">
													<option>Category Courses</option>
													<option>Category</option>
													<option>Category</option>
												</select>
												<select className="dropdown_item_select home_search_input">
													<option>Select Price Type</option>
													<option>Price Type</option>
													<option>Price Type</option>
												</select>
											</div>
											<button type="submit" className="home_search_button">search</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				
				<div className="owl-item">
					<div className="home_slider_background" style={{backgroundImage:"url('images/home_slider_1.jpg')"}}></div>
					<div className="home_slider_content">
						<div className="container">
							<div className="row">
								<div className="col text-center">
									<div className="home_slider_title">The Premium System Education</div>
									<div className="home_slider_subtitle">Future Of Education Technology</div>
									<div className="home_slider_form_container">
										<form action="#" id="home_search_form_3" className="home_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between">
											<div className="d-flex flex-row align-items-center justify-content-start">
												<input type="search" className="home_search_input" placeholder="Keyword Search" required="required"/>
												<select className="dropdown_item_select home_search_input">
													<option>Category Courses</option>
													<option>Category</option>
													<option>Category</option>
												</select>
												<select className="dropdown_item_select home_search_input">
													<option>Select Price Type</option>
													<option>Price Type</option>
													<option>Price Type</option>
												</select>
											</div>
											<button type="submit" className="home_search_button">search</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

		

		<div className="home_slider_nav home_slider_prev"><i className="fa fa-angle-left" aria-hidden="true"></i></div>
		<div className="home_slider_nav home_slider_next"><i className="fa fa-angle-right" aria-hidden="true"></i></div>
	</div>

    );}

}

export default Home
