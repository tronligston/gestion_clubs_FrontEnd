import React, {Component,Fragment} from 'react';

class Recrutement extends Component {

    

      Click = () => {
        this.context.router.push({
          pathname: "/CompDetails",
          state: {data: this.props.event}
        }); 
      }

  render() {
      {
        var url1='http://localhost:3000/recrutement/'
        url1=url1.concat(this.props.event.idEvent).concat('/').concat(this.props.idUser)
      }
    return (
        <div className="col-lg-4 event_col">
        <div className="event event_left">
            <div className="event_image"><img src="images/rec2.jpg" alt="" onClick={this.Click}/>
            
            </div>
            <div className="event_body d-flex flex-row align-items-start justify-content-start">
                <div className="event_date">
                    <div className="d-flex flex-column align-items-center justify-content-center trans_200">
                        <div className="event_day trans_200">{this.props.event.idEvent}</div>
                    </div>
                </div>
                <div className="event_content">
                    <div className="event_title"><a href={url1}>{this.props.event.titre}</a></div>
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

export default  Recrutement;