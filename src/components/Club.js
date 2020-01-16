import React, {Component,Fragment} from 'react';

class Club extends Component {
  render() {
	{
        var url1='http://localhost:3000/club/'
        url1=url1.concat(this.props.club.idClub)
      }
    return (
        <div className="col-lg-4 course_col">
					<div className="course">
						<div className="course_image"><img src="images/club.jpg" alt=""/></div>
						<div className="course_body">
							<h3 className="course_title"><a href={url1}>{this.props.club.intitule}</a></h3>
							<div className="course_teacher">Team Leader :  {this.props.club.teamLeader.nom}</div>
							<div className="course_text">
								<p>{this.props.club.description}</p>
							</div>
						</div>
						<div className="course_footer">
							<div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
								<div className="course_info">
									<i className="fa fa-graduation-cap" aria-hidden="true"></i>
									<span>20 Etudiants</span>
								</div>
								<div className="course_info">
									<i className="fa fa-star" aria-hidden="true"></i>
									<span>5 Rating</span>
								</div>
								<div className="course_price ml-auto"></div>
							</div>
						</div>
					</div>
				</div>
    )}

}

export default Club