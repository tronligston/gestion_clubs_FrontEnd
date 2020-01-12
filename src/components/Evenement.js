import React, {Component,Fragment} from 'react';

class Evenement extends Component {
  render() {
    return (
        <div className="col-lg-4 event_col">
        <div className="event event_left">
            <div className="event_image"><img src="images/event_1.jpg" alt=""/></div>
            <div className="event_body d-flex flex-row align-items-start justify-content-start">
                <div className="event_date">
                    <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                        <div className="event_day trans_200">{this.props.event.idEvent}</div>
                    </div>
                </div>
                <div className="event_content">
                    <div className="event_title"><a href="#">{this.props.event.titre}</a></div>
                    <div className="event_info_container">
                        <div className="event_info"><i className="fa fa-clock-o" aria-hidden="true"></i><span>15.00 - 19.30</span></div>
                        <div className="event_info"><i className="fa fa-map-marker" aria-hidden="true"></i><span>{this.props.event.lieu}</span></div>
                        <div className="event_text">
                            <p>{this.props.event.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );}

}

export default  Evenement;