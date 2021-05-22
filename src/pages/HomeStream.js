import React,{Component} from 'react';
import StreamCard from '../components/StreamCard';
import { connect } from 'react-redux'
import { fetchRentals, createRental } from '../action';


  class HomeStream extends Component {

  
     
  componentDidMount() {
    this.props.dispatch(fetchRentals());
  }

//   renderRentals = (rentals) => 
//     rentals.map(rental => 
//       <div key={rental._id} className="col-md-3">
//         <RentalCard rental={rental}/>
//       </div>
//     );

    StreamCards = (rentals) => 
    rentals.map(rental => 
      <div key={rental._id} className="col-md-3">
        <StreamCard rental={rental}/>
      </div>
    );


      createRental = () => {
        //   debugger
        const uid = Math.random().toString(32).slice(2);
        const newRental = {
          _id: uid,
          title: "Nice view on ocean",
          city: "San Francisco",
          category: "condo",
          image: "http://via.placeholder.com/350x250",
          numOfRooms: 4,
          shared: true,
          description: "Very nice apartment in center of the city.",
          dailyPrice: 43
        }
    
        this.props.dispatch(createRental(newRental));
      }    
    
     
      
    //   StreamCards=(rentals) => 
    //   rentals.map(rental => 
    //     <div key={rental._id} className="col-md-3">
    //       <StreamCard rental={rental}/>
    //     </div>
    //   );
  

    render() {
            // const { rentals } = this.state;
            const { rentals } = this.props;


      return (

        <div className="card-list">
          <h1 className="page-title">Your Home All Around the World</h1>
          <div className="row">
          { this.StreamCards(rentals) }
        </div>
        {/* <button
          onClick={this.createRental}
          className="btn btn-success">Create Rental</button> */}
      </div>
      );
    }
}

const mapStateToProps = (state) => {
    return {
      rentals: state.rentals
    }
  }
  
  export default connect(mapStateToProps)(HomeStream);
  

// export default HomeStream;