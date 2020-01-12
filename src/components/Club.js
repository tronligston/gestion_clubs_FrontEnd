import React, {Component,Fragment} from 'react';

class Club extends Component {
  render() {
    return (
        <div className="col-lg-4 course_col">
					<div className="course">
						<div className="course_image"><img src="images/course_1.jpg" alt=""/></div>
						<div className="course_body">
							<h3 className="course_title"><a href="course.html">{this.props.club.intitule}</a></h3>
							<div className="course_teacher">Team Leader :  {this.props.club.teamLeader.nom}</div>
							<div className="course_text">
								<p>Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</p>
							</div>
						</div>
						<div className="course_footer">
							<div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
								<div className="course_info">
									<i className="fa fa-graduation-cap" aria-hidden="true"></i>
									<span>20 Student</span>
								</div>
								<div className="course_info">
									<i className="fa fa-star" aria-hidden="true"></i>
									<span>5 Ratings</span>
								</div>
								<div className="course_price ml-auto">$130</div>
							</div>
						</div>
					</div>
				</div>
    )}

}

export default Club