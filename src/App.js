import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ReactBingmaps } from 'react-bingmaps';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { HeaderWithRouter } from './navBar';
import title from './Title.png';
import logo from './logo.jpg';
import image1 from './houseImage1.jpg';
import image2 from './T_fourBedroom.jpg';
import image3 from './T_Basement.jpg';
import image4 from './T_Apartment.jpg';
import image5 from './T_Bedroom.jpg';
import Rating from '@material-ui/lab/Rating';
import { InputGroup, DropdownButton, Dropdown, FormControl, FormGroup, Button } from 'react-bootstrap';

//import AppData from './AppData.js';
import SpecificAdPage from './SpecificAdPage';
import FindTenant from './FindTenant';
//bing map key: ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz
/* To add router: yarn add react-router-dom */
class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

          numberOfRooms: "Number Of Rooms",
          type: "Type",
          priceRange: "Price Range",
    housePost: [
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "3 bedroom house",
            shortDescription: "three bedroom, renovated last year",
            postID: 0,
            price: 600,
            rating: 4,
            coverImage: "houseImage1.jpg",
            imageList: ["houseImage1.jpg", "houseImage2.jpg", "houseImage3.jpg"],
            review: [
                { reviewRating: 5, reviewDetail: "great house" },
                { reviewRating: 4, reviewDetail: "no complians" },
                { reviewRating: 4, reviewDetail: "greate landlord" },
            ],
            landlordImage: "landLordImage.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Mb/s",
            Parking: "2"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "four bedroom house",
            shortDescription: "four bedroom, three wash room",
            postID: 1,
            rating: 3,
            coverImage: "houseImage4.jpg",
            price: 500,
            imageList: ["houseImage4.jpg", "houseImage5.jpg", "houseImage6.jpg"],
            review: [
                { reviewRating: 3, reviewDetail: "there are rats in the basement" },
                { reviewRating: 3, reviewDetail: "not too good, but worth the price" },
                { reviewRating: 4, reviewDetail: "This user did not leave comment" },
            ],
            landlordImage: "landLordImage1.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Mb/s",
            Parking: "1"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "Basement Bedroom",
            shortDescription: "one room in the basement",
            postID: 2,
            rating: 2,
            price: 550,
            coverImage: "houseImage7.jpg",
            imageList: ["houseImage7.jpg", "houseImage8.jpg"],
            review: [
                { reviewRating: 2, reviewDetail: "not a very good location" },
                { reviewRating: 3, reviewDetail: "upstairs to noisy" },
                { reviewRating: 2, reviewDetail: "bad landlord" },
            ],
            landlordImage: "landLordImage2.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 100Mb/s",
            Parking: "0"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "One bedroom apartment",
            shortDescription: "",
            postID: 3,
            price: 600,
            rating: 3,
            coverImage: "houseImage9.jpg",
            imageList: ["houseImage9.jpg", "houseImage10.jpg"],
            review: [
                { reviewRating: 2, reviewDetail: "I experienced bed bug" },
                { reviewRating: 4, reviewDetail: "the manager is very nice" },
                { reviewRating: 2, reviewDetail: "rent too high" },
            ],
            landlordImage: "landLordImage3.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "not included",
            Parking: "0"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "subLeasing a room",
            shortDescription: "sub leasing one room",
            postID: 4,
            price: 500,
            rating: 0,
            coverImage: "houseImage11.jpg",
            imageList: ["houseImage11.jpg", "houseImage12.jpg"],
            review: [
            ],
            landlordImage: "landLordImage4.jpg",
            electricy: false,
            water: false,
            Heat: false,
            WIFI: "included, 1Gb/s",
            Parking: "1"
        }
    ],
    mainPageSorting: "default",

      bingmapKey: "ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz",
      
      infoboxesWithPushPins: [
        {
          "location": [43.2600, -79.9102],
          "locationName": "threeBedroom",
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: '3 bedroom house', description: '$600' },
          "pushPinOption": { title: '3 bedroom house', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2630, -79.9250],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Four bedroom house', description: '$500' },
          "pushPinOption": { title: 'Four bedroom house', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2580, -79.9300],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Basement Bedroom', description: '$550' },
          "pushPinOption": { title: 'Basement Bedroom', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2650, -79.9310],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Basement Bedroom', description: '$550' },
          "pushPinOption": { title: 'Basement Bedroom', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2586, -79.9056],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'One bedroom apartment', description: '$600' },
          "pushPinOption": { title: 'One bedroom apartment', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2635, -79.9056],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Subleasing a room', description: '$500' },
          "pushPinOption": { title: 'Subleasing a room', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        }
      ],
    }
  }
  renderItemList() {
    switch (this.state.mainPageSorting) {
        case "default":
            return (
                <div>
                    {this.renderSingleItem(0, image1)}<br />
                    {this.renderSingleItem_nolink(1, image2)}<br />
                    {this.renderSingleItem_nolink(2, image3)}<br />
                    {this.renderSingleItem_nolink(3, image4)}<br />
                    {this.renderSingleItem_nolink(4, image5)}<br />
                </div>
            )

        case "threeBedroom":
            return (
                <div>
                    {this.renderSingleItem(0,image1)}<br />
                </div>
            )

    }
}
renderSingleItem(requiredID, image) {
    var requiredAd = this.state.housePost[requiredID]
    return (
        <a href='/adPage'>
            < div id="postContainer" >
                <div id="postImage">
                    <img class = "image" alt="Test" src={image} />
                    {/* <p> {requiredAd.imageList[0]} </p> */}
                </div>
                <div id="postPrice">${requiredAd.price}</div>
                <div id="postRating">
                    <Rating name="read-only" value={requiredAd.rating} readOnly />
                </div>
                <div id="postTitle">{requiredAd.postTitle}</div>
                <div id="postContent">{requiredAd.shortDescription}</div>
            </div >
        </a>
    )

}
renderSingleItem_nolink(requiredID, image) {
    var requiredAd = this.state.housePost[requiredID]
    return (
        
            < div id="postContainer" >
                <div id="postImage">
                    <img class="image" alt="Test" src={image} />
                    {/* <p> {requiredAd.imageList[0]} </p> */}
                </div>
                <div id="postPrice">${requiredAd.price}</div>
                <div id="postRating">
                    <Rating name="read-only" value={requiredAd.rating} readOnly />
                </div>
                <div id="postTitle">{requiredAd.postTitle}</div>
                <div id="postContent">{requiredAd.shortDescription}</div>
            </div >
    )

}

filterItem(){
    this.setState({
        housePost: this.state.housePost.filter(h => h.postTitle === "3 bedroom house"),
        mainPageSorting: "threeBedroom",
        infoboxesWithPushPins: this.state.infoboxesWithPushPins.filter(x => x.locationName === "threeBedroom")
    })
}

  render() {
    var mapStyle = {
      width: "70%",
      height: "65%",
      position: 'absolute',
      bottom: '5px',
      right: '3px'
    }
    var searchStyle = {
      position: 'relative',
      left: '37%',
      top:"80px",
      width: '60%'
    }
  var tableStyle ={
      position: 'relative',
      right: '10%',
      width: '50%',
      bottom: '5px',
      height: '70%'
  }
    var bingmapKey = this.state.bingmapKey;
    var infoboxesWithPushPins = this.state.infoboxesWithPushPins;
    
    
    return (
      <div>
          <div class='searchBar' style={searchStyle}>
          <InputGroup size='lg'>
            <FormControl
              placeholder="Search nearby"
              aria-label="Search nearby"
              aria-describedby="basic-addon2"
            />
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={this.state.numberOfRooms}
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#" onClick={()=>{this.setState({ numberOfRooms:"3" })}}>3</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={this.state.type}
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#" onClick={()=>{this.setState({ type:"House" })}}>House</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title={this.state.priceRange}
              id="input-group-dropdown-2"
            >
              <Dropdown.Item href="#" onClick={()=>{this.setState({ priceRange:"500-1200" })}}>500-1200</Dropdown.Item>
            </DropdownButton>

            <Button variant="dark" onClick={this.filterItem.bind(this)}>Search</Button>
          </InputGroup>

        </div>
            <div id="table" style={tableStyle}>
            {this.renderItemList()}
            </div>
        <div>
            <div className="map-one" style={mapStyle}>
              <ReactBingmaps
                id="one"
                bingmapKey={bingmapKey}
                center={[43.2609, -79.9192]}
                zoom={14}
                infoboxesWithPushPins={infoboxesWithPushPins}
              >
              </ReactBingmaps>
            </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

          numberOfRooms: "Number Of Rooms",
          type: "Type",
          priceRange: "Price Range",
    housePost: [
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "3 bedroom house",
            shortDescription: "three bedroom, renovated last year",
            postID: 0,
            price: 600,
            rating: 4,
            coverImage: "houseImage1.jpg",
            imageList: ["houseImage1.jpg", "houseImage2.jpg", "houseImage3.jpg"],
            review: [
                { reviewRating: 5, reviewDetail: "great house" },
                { reviewRating: 4, reviewDetail: "no complians" },
                { reviewRating: 4, reviewDetail: "greate landlord" },
            ],
            landlordImage: "landLordImage.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Mb/s",
            Parking: "2"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "four bedroom house",
            shortDescription: "four bedroom, three wash room",
            postID: 1,
            rating: 3,
            coverImage: "houseImage4.jpg",
            price: 500,
            imageList: ["houseImage4.jpg", "houseImage5.jpg", "houseImage6.jpg"],
            review: [
                { reviewRating: 3, reviewDetail: "there are rats in the basement" },
                { reviewRating: 3, reviewDetail: "not too good, but worth the price" },
                { reviewRating: 4, reviewDetail: "This user did not leave comment" },
            ],
            landlordImage: "landLordImage1.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 50Mb/s",
            Parking: "1"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "Basement Bedroom",
            shortDescription: "one room in the basement",
            postID: 2,
            rating: 2,
            price: 550,
            coverImage: "houseImage7.jpg",
            imageList: ["houseImage7.jpg", "houseImage8.jpg"],
            review: [
                { reviewRating: 2, reviewDetail: "not a very good location" },
                { reviewRating: 3, reviewDetail: "upstairs to noisy" },
                { reviewRating: 2, reviewDetail: "bad landlord" },
            ],
            landlordImage: "landLordImage2.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "included, 100Mb/s",
            Parking: "0"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "One bedroom apartment",
            shortDescription: "",
            postID: 3,
            price: 600,
            rating: 3,
            coverImage: "houseImage9.jpg",
            imageList: ["houseImage9.jpg", "houseImage10.jpg"],
            review: [
                { reviewRating: 2, reviewDetail: "I experienced bed bug" },
                { reviewRating: 4, reviewDetail: "the manager is very nice" },
                { reviewRating: 2, reviewDetail: "rent too high" },
            ],
            landlordImage: "landLordImage3.jpg",
            electricy: true,
            water: true,
            Heat: true,
            WIFI: "not included",
            Parking: "0"
        },
        {
            location: [43.2069, -79.9192],
            houseCategory: "Mcmaster University",
            postTitle: "subLeasing a room",
            shortDescription: "sub leasing one room",
            postID: 4,
            price: 500,
            rating: 0,
            coverImage: "houseImage11.jpg",
            imageList: ["houseImage11.jpg", "houseImage12.jpg"],
            review: [
            ],
            landlordImage: "landLordImage4.jpg",
            electricy: false,
            water: false,
            Heat: false,
            WIFI: "included, 1Gb/s",
            Parking: "1"
        }
    ],
    mainPageSorting: "default",

      bingmapKey: "ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz",
      
      infoboxesWithPushPins: [
        {
          "location": [43.2600, -79.9102],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: '3 bedroom house', description: '$600' },
          "pushPinOption": { title: '3 bedroom house', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2630, -79.9250],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Four bedroom house', description: '$500' },
          "pushPinOption": { title: 'Four bedroom house', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2580, -79.9300],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Basement Bedroom', description: '$550' },
          "pushPinOption": { title: 'Basement Bedroom', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2650, -79.9310],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Basement Bedroom', description: '$550' },
          "pushPinOption": { title: 'Basement Bedroom', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2586, -79.9056],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'One bedroom apartment', description: '$600' },
          "pushPinOption": { title: 'One bedroom apartment', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        },
        {
          "location": [43.2635, -79.9056],
          "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
          "infoboxOption": { title: 'Subleasing a room', description: '$500' },
          "pushPinOption": { title: 'Subleasing a room', description: 'Pushpin' },
          "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
          "pushPinAddHandler": { "type": "click", callback: this.callBackMethod },
        }
      ],
    }
  }

  render() {
    
    var headerStyle = {
      padding: '5px'
    }
    var logoStyle = {
      width: '50px',
      height: '50px'
    }
    var titleStyle = {
      width: '30%',
      height: '20%',
      right: '4px'
    }

    return (
      <React.Fragment>
        <div class='header' style={headerStyle}>
          <img src={logo} alt='logo' style={logoStyle} />
          <img src={title} alt='title' style={titleStyle} />
        </div>

        <Router>
          <HeaderWithRouter />
          <Switch>
            <Route exact path='/' render={(props) => <MapView {...props} bingmapKey={this.state.bingmapKey} infoboxesWithPushPins={this.state.infoboxesWithPushPins} />} />
            <Route path='/home' render={(props) => <MapView {...props} bingmapKey={this.state.bingmapKey} infoboxesWithPushPins={this.state.infoboxesWithPushPins} />} />
            <Route path='/adPage' component={SpecificAdPage} />
            <Route path='/FindTenant' component={FindTenant} />
          </Switch>
        </Router>
      </React.Fragment>

    );
  }
}

export default App;
