import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRentalById } from '../action';


class RentalDetail extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id))
  }

  render() {
    const { rental } = this.props;
    return (
    //   <section id="rentalDetails">
    

    //     <div className="details-section">
      
    //       <div className="row">
          
   
    //       </div>
    //     </div>
    //   </section> 
<section id="rentalDetails">

<div className="details-section">
      <div className="row">
    <div className="col-md-6">
    <img src={rental.image} alt={rental.title} />
 
        </div>
        <div className="col-md-4">
           
           <div className="rental">
             {/* <!-- TODO: Display shared category --> */}
             <h2 className={`rental-type type-${rental.category}`}>
               {rental.shared ? 'Shared' : 'Whole'} {rental.category}
             </h2>
             {/* <!-- TODO: Display title --> */}
             <h1 className="rental-title">{rental.title}</h1>
             {/* <!-- TODO: Display city --> */}
             <h2 className="rental-city">{rental.city}</h2>
             <div className="rental-room-info">
               {/* <!-- TODO: Display numOfRooms --> */}
               <span><i className="fa fa-building"></i>{rental.numOfRooms} bedrooms</span>
                 {/* // <!-- TODO: Display numOfRooms + 4 --> */}
               <span><i className="fa fa-user"></i> {rental.numOfRooms + 4} guests</span>
               {/* // <!-- TODO: Display numOfRooms + 2 --> */}
               <span><i className="fa fa-bed"></i> {rental.numOfRooms + 2} beds</span>
             </div>
             {/* <!-- TODO: Display description --> */}
             <p className="rental-description">
               {rental.description}
             </p>
             <hr/>
            
           </div>
         </div>
    
  </div>
</div>
</section>
    )
  }
}

const mapStateToProps = ({rental}) => ({ rental })

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);