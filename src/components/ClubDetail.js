import React, {Component,Fragment} from 'react';
import Evenement from './Evenement.js'
import Axios from 'axios';

class ClubDetail extends Component {

constructor(props){
    super(props)
    this.state={club:{},events:[]}
}
	
componentWillMount(){
    var url1='http://localhost:8080/clubs/search/'
    url1=url1.concat(this.props.id)
    var url2='http://localhost:8080/clubs/eventsClub/'
    url2=url2.concat(this.props.id)
    
    Axios.get(url1).then(
			res=>{
				this.setState({club: res.data})
            })
    Axios.get(url2).then(
        res=>{
            this.setState({events: res.data})
        })
}
render(){
    return(
        <div className="container">
					
					<div className="course_container">
						<div className="course_title">Software Training</div>
						<div className="course_infox d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

							
							<div className="course_info_item">
								<div className="course_info_title">Club's Name</div>
								<div className="course_info_text"><a href="">{this.state.club.intitule}</a></div>
							</div>

							
							<div className="course_info_item">
								<div className="course_info_title">Reviews:</div>
								<div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
							</div>

							
							<div className="course_info_item">
								<div className="course_info_title">Date de Création:</div>
								<div className="course_info_text"><a href="">{String(this.state.club.dateCreation).substring(0,10)}</a></div>
							</div>

						</div>

						
						<div className="course_image"><img src="images/course_image.jpg" alt=""/></div>

						
						<div className="course_tabs_container">
							<div className="tabs d-flex flex-row align-items-center justify-content-start">
								<div className="tab active">Description</div>
								<div className="tab">Evenements organisés</div>
								<div className="tab">Reviews</div>
							</div>
							<div className="tab_panels">

								
								<div className="tab_panel active">
									<div className="tab_panel_title">{this.state.club.intitule}</div>
									<div className="tab_panel_content">
										<div className="tab_panel_text">
											<p>{this.state.club.description}</p>
										</div>
										<div className="tab_panel_section">
											<div className="tab_panel_subtitle">Requirements</div>
											<ul className="tab_panel_bullets">
												<li>Lorem Ipsn gravida nibh vel velit auctor aliquet. Class aptent taciti sociosquad litora torquent.</li>
												<li>Cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a.</li>
												<li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</li>
												<li>Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</li>
											</ul>
										</div>
										<div className="tab_panel_section">
											<div className="tab_panel_subtitle">What is the target audience?</div>
											<div className="tab_panel_text">
												<p>This course is intended for anyone interested in learning to master his or her own body.This course is aimed at beginners, so no previous experience with hand balancing skillts is necessary Aenean viverra tincidunt nibh, in imperdiet nunc. Suspendisse eu ante pretium, consectetur leo at, congue quam. Nullam hendrerit porta ante vitae tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
											</div>
										</div>
										<div className="tab_panel_faq">
											<div className="tab_panel_title">FAQ</div>

											
											<div className="accordions">
												
												<div className="elements_accordions">

													<div className="accordion_container">
														<div className="accordion d-flex flex-row align-items-center"><div>Can I just enroll in a single course?</div></div>
														<div className="accordion_panel">
															<p>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a.</p>
														</div>
													</div>

													<div className="accordion_container">
														<div className="accordion d-flex flex-row align-items-center active"><div>I'm not interested in the entire Specialization?</div></div>
														<div className="accordion_panel">
															<p>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a.</p>
														</div>
													</div>

													<div className="accordion_container">
														<div className="accordion d-flex flex-row align-items-center"><div>What is the refund policy?</div></div>
														<div className="accordion_panel">
															<p>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a.</p>
														</div>
													</div>

													<div className="accordion_container">
														<div className="accordion d-flex flex-row align-items-center"><div>What background knowledge is necessary?</div></div>
														<div className="accordion_panel">
															<p>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a.</p>
														</div>
													</div>

													<div className="accordion_container">
														<div className="accordion d-flex flex-row align-items-center"><div>Do i need to take the courses in a specific order?</div></div>
														<div className="accordion_panel">
															<p>Lorem ipsun gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a.</p>
														</div>
													</div>

												</div>

											</div>
										</div>
									</div>
								</div>

								
								<div className="tab_panel tab_panel_2">
        <div className="courses" style={{marginTop:0,paddingTop:0}}>
		<div className="container" >
			<div className="row courses_row">
				
				{this.state.events.map(event =>
					{
						return <Evenement event={event} key={event.idEvent}/>
					})}

				

			
		</div>
	</div>
									</div>
								</div>

								
								<div className="tab_panel tab_panel_3">
									<div className="tab_panel_title">Course Review</div>

									
									<div className="review_rating_container">
										<div className="review_rating">
											<div className="review_rating_num">4.5</div>
											<div className="review_rating_stars">
												<div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
											</div>
											<div className="review_rating_text">(28 Ratings)</div>
										</div>
										<div className="review_rating_bars">
											<ul>
												<li><span>5 Star</span><div className="review_rating_bar"><div style={{width:"90%"}}></div></div></li>
												<li><span>4 Star</span><div className="review_rating_bar"><div style={{width:"75%"}}></div></div></li>
												<li><span>3 Star</span><div className="review_rating_bar"><div style={{width:"32%"}}></div></div></li>
												<li><span>2 Star</span><div className="review_rating_bar"><div style={{width:"10%"}}></div></div></li>
												<li><span>1 Star</span><div className="review_rating_bar"><div style={{width:"3%"}}></div></div></li>
											</ul>
										</div>
									</div>
									
									
									<div className="comments_container">
										<ul className="comments_list">
											<li>
												<div className="comment_item d-flex flex-row align-items-start jutify-content-start">
													<div className="comment_image"><div><img src="images/comment_1.jpg" alt=""/></div></div>
													<div className="comment_content">
														<div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
															<div className="comment_author"><a href="#">Milley Cyrus</a></div>
															<div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
															<div className="comment_time ml-auto">1 day ago</div>
														</div>
														<div className="comment_text">
															<p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
														</div>
														<div className="comment_extras d-flex flex-row align-items-center justify-content-start">
															<div className="comment_extra comment_likes"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
															<div className="comment_extra comment_reply"><a href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
														</div>
													</div>
												</div>
												<ul>
													<li>
														<div className="comment_item d-flex flex-row align-items-start jutify-content-start">
															<div className="comment_image"><div><img src="images/comment_2.jpg" alt=""/></div></div>
															<div className="comment_content">
																<div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
																	<div className="comment_author"><a href="#">John Tyler</a></div>
																	<div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
																	<div className="comment_time ml-auto">1 day ago</div>
																</div>
																<div className="comment_text">
																	<p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
																</div>
																<div className="comment_extras d-flex flex-row align-items-center justify-content-start">
																	<div className="comment_extra comment_likes"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
																	<div className="comment_extra comment_reply"><a href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</li>
											<li>
												<div className="comment_item d-flex flex-row align-items-start jutify-content-start">
													<div className="comment_image"><div><img src="images/comment_3.jpg" alt=""/></div></div>
													<div className="comment_content">
														<div className="comment_title_container d-flex flex-row align-items-center justify-content-start">
															<div className="comment_author"><a href="#">Milley Cyrus</a></div>
															<div className="comment_rating"><div className="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
															<div className="comment_time ml-auto">1 day ago</div>
														</div>
														<div className="comment_text">
															<p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
														</div>
														<div className="comment_extras d-flex flex-row align-items-center justify-content-start">
															<div className="comment_extra comment_likes"><a href="#"><i className="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
															<div className="comment_extra comment_reply"><a href="#"><i className="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
														</div>
													</div>
												</div>
											</li>
										</ul>
										<div className="add_comment_container">
											<div className="add_comment_title">Add a review</div>
											<div className="add_comment_text">You must be <a href="#">logged</a> in to post a comment.</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
    )
}

}

export default ClubDetail;