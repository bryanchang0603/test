import React from 'react';
import './personal.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { ReactBingmaps } from 'react-bingmaps';
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HeaderWithRouter } from './navBar';
import title from './Title.png';
import pen from './pen.png';
import { InputGroup, DropdownButton, Dropdown, FormControl, FormGroup, Button } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


class information extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Name: "", Phone: "", Email: "", City:"",Province: "Province", language: "language", description: "",
        line1:true, line2:true, line3:true, line4:true,line5:true, line6:true  
        }
    }
    changeProvince(text) {
        this.setState({ Province: text })
    }
    changelanguage(text) {
        this.setState({ language: text })
    }
    enable_disable4() {
         var line4=this.state.line4;
         if (line4 === false){
             line4 = true;
         }
         else{
             line4 = false;
         }
        this.setState({ line4: line4 })
    }
    enable_disable1() {
        var line1=this.state.line1;
        if (line1 === false){
            line1 = true;
        }
        else{
            line1 = false;
        }
       this.setState({ line1: line1 })
   }
   enable_disable2() {
    var line2=this.state.line2;
    if (line2 === false){
        line2 = true;
    }
    else{
        line2 = false;
    }
   this.setState({ line2: line2 })
}
    enable_disable3() {
    var line3=this.state.line3;
        if (line3 === false){
            line3 = true;
        }
        else{
            line3 = false;
        }
        this.setState({ line3: line3 })
    }
    enable_disable5() {
        var line5=this.state.line5;
            if (line5 === false){
                line5 = true;
            }
            else{
                line5 = false;
            }
            this.setState({ line5: line5 })
        }
    enable_disable6() {
        var line6=this.state.line6;
            if (line6 === false){
                line6 = true;
            }
            else{
                line6 = false;
            }
            this.setState({ line6: line6 })
        }
    render() {
        var logoStyle = {
            width: '40px',
            height: '40px'
        };
        var oneline = { display: 'inline-block' }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="personal">Name:</td>
                            <td className="personal"><input type="text" onChange={(event) => this.setState({ Name: event.target.value })}
                                value={this.state.Name} disabled={this.state.line1}/></td>
                            <td className="personal"><img src={pen} style={logoStyle} onClick={this.enable_disable1.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td className="personal">Phone:</td>
                            <td className="personal"><input type="text" onChange={(event) => this.setState({ Phone: event.target.value })}
                                value={this.state.Phone} disabled={this.state.line2}/></td>
                            <td className="personal"><img src={pen} style={logoStyle} onClick={this.enable_disable2.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td className="personal">Email:</td>
                            <td className="personal"><input type="text" onChange={(event) => this.setState({ Email: event.target.value })}
                                value={this.state.Email} disabled={this.state.line3}/></td>
                            <td className="personal"><img src={pen} style={logoStyle} onClick={this.enable_disable3.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td className="personal">Province/City:</td>
                            <td className="personal"> 
                                <div> 
                                        <DropdownButton
                                            disabled={this.state.line4}
                                            variant="outline-secondary"
                                            title={this.state.Province}>
                                            <Dropdown.Item as="button"><div onClick={(e) => this.changeProvince(e.target.textContent)}>Ontario </div></Dropdown.Item>
                                            <Dropdown.Item as="button"><div onClick={(e) => this.changeProvince(e.target.textContent)}>Quebec </div></Dropdown.Item>
                                            <Dropdown.Item as="button"><div onClick={(e) => this.changeProvince(e.target.textContent)}>Saskatoon </div></Dropdown.Item>
                                            <Dropdown.Item as="button"><div onClick={(e) => this.changeProvince(e.target.textContent)}>Nova Scotia </div></Dropdown.Item>
                                            <Dropdown.Item as="button"><div onClick={(e) => this.changeProvince(e.target.textContent)}>Alberta </div></Dropdown.Item>
                                            <Dropdown.Item as="button"><div onClick={(e) => this.changeProvince(e.target.textContent)}>British Columbia </div></Dropdown.Item>
                                        </DropdownButton>
                                        <input type="text" onChange={(event) => this.setState({ City: event.target.value })}
                                            value={this.state.City} disabled={this.state.line4}/>
                                </div></td>
                            <td className="personal"><img src={pen} style={logoStyle} onClick={this.enable_disable4.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td className="personal">language:</td>
                            <td className="personal">
                                <DropdownButton
                                disabled={this.state.line5}
                                    variant="outline-secondary"
                                    title={this.state.language}>
                                    <Dropdown.Item as="button"><div onClick={(e) => this.changelanguage(e.target.textContent)}>English </div></Dropdown.Item>
                                    <Dropdown.Item as="button"><div onClick={(e) => this.changelanguage(e.target.textContent)}>French </div></Dropdown.Item>
                                </DropdownButton></td>
                            <td className="personal"><img src={pen} style={logoStyle} onClick={this.enable_disable5.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td className="personal">About Me:</td>
                            <td className="personal">
                                <textarea type="text" onChange={(event) => this.setState({ description: event.target.value })}
                                    value={this.state.description} disabled={this.state.line6}/>
                            </td>
                            <td className="personal"><img src={pen} style={logoStyle} onClick={this.enable_disable6.bind(this)}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}
class preference extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region:"preferred region",
            type:"Property type",
            Roommate:"Roommate Preference",
            Max_budget:"",
            Min_budget:"",
            line:true,
            display1: "inherit",
            display2: "none",
            bingmapKey: "ArVAogdJTqdKlO7mo9SXp1beyv6os158VaiIjB9iAag_qcaI6j1hiJct4aby0lIz",
            infoboxesWithPushPins: [
                {
                    "location": [43.2609, -79.9192],
                    "addHandler": "mouseover", //on mouseover the pushpin, infobox shown
                    "infoboxOption": { title: 'McMaster University', description: 'University' },
                    "pushPinOption": { title: 'McMaster University', description: 'Pushpin' },
                    "infoboxAddHandler": { "type": "click", callback: this.callBackMethod },
                    "pushPinAddHandler": { "type": "click", callback: this.callBackMethod }
                }
            ],
            regularPolygons: [
                {
                    "center": [43.2609, -79.9192],
                    "radius": 1,
                    "points": 36,
                    "option": { fillColor: "rgba(0,0,0,0.5)", strokeThickness: 2 }
                }
            ],
            visible1:"visible",visible2:"visible",visible3:"visible", visible4:"visible",visible5:"visible",visible6:"visible"
        }
    }
    Change_Center_Up() {
        var polygon = this.state.regularPolygons;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        var visible1, visible2,visible3,visible4,visible5,visible6;
        if (display1 == 'inherit') {
            display1 = 'none';
            display2 = 'inherit';
            visible2="hidden";visible3="hidden"; visible4="hidden";visible5="hidden";visible6="hidden";
        } else {
            display1 = 'inherit';
            display2 = 'none';
            visible2="visible";visible3="visible"; visible4="visible";visible5="visible";visible6="visible";
        }
        polygon[0].center[0] += 0.002;
        this.setState({ regularPolygons: polygon, display1: display1, display2: display2,
        visible2:visible2,visible3:visible3, visible4:visible4,visible5:visible5,visible6:visible6}
        )
    }
    Change_Center_down() {
        var polygon = this.state.regularPolygons;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        var visible1, visible2,visible3,visible4,visible5,visible6;
        if (display1 == 'inherit') {
            display1 = 'none';
            display2 = 'inherit';
            visible1="hidden";visible3="hidden"; visible4="hidden";visible5="hidden";visible6="hidden";
        } else {
            display1 = 'inherit';
            display2 = 'none';
            visible1="visible";visible3="visible"; visible4="visible";visible5="visible";visible6="visible";
        }
        polygon[0].center[0] -= 0.002;
        this.setState({ regularPolygons: polygon, display1: display1, display2: display2,
        visible1:visible1,visible3:visible3, visible4:visible4,visible5:visible5,visible6:visible6}
        )
    }
        Change_Center_left() {
        var polygon = this.state.regularPolygons;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        var visible1, visible2,visible3,visible4,visible5,visible6;
        if (display1 == 'inherit') {
            display1 = 'none';
            display2 = 'inherit';
            visible1="hidden";visible2="hidden"; visible4="hidden";visible5="hidden";visible6="hidden";
        } else {
            display1 = 'inherit';
            display2 = 'none';
            visible1="visible";visible2="visible"; visible4="visible";visible5="visible";visible6="visible";
        }
        polygon[0].center[1] -= 0.002;
        this.setState({ regularPolygons: polygon, display1: display1, display2: display2,
        visible1:visible1,visible2:visible2, visible4:visible4,visible5:visible5,visible6:visible6}
        )
    }
    Change_Center_Right() {
        var polygon = this.state.regularPolygons;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        var visible1, visible2,visible3,visible4,visible5,visible6;
        if (display1 == 'inherit') {
            display1 = 'none';
            display2 = 'inherit';
            visible1="hidden";visible2="hidden"; visible3="hidden";visible5="hidden";visible6="hidden";
        } else {
            display1 = 'inherit';
            display2 = 'none';
            visible1="visible";visible2="visible"; visible3="visible";visible5="visible";visible6="visible";
        }
        polygon[0].center[1] += 0.002;
        this.setState({ regularPolygons: polygon, display1: display1, display2: display2,
        visible1:visible1,visible2:visible2, visible3:visible3,visible5:visible5,visible6:visible6}
        )
    }
    Change_Radius_up() {
        var polygon = this.state.regularPolygons;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        var visible1, visible2,visible3,visible4,visible5,visible6;
        if (display1 == 'inherit') {
            display1 = 'none';
            display2 = 'inherit';
            visible1="hidden";visible2="hidden"; visible3="hidden";visible4="hidden";visible6="hidden";
        } else {
            display1 = 'inherit';
            display2 = 'none';
            visible1="visible";visible2="visible"; visible3="visible";visible4="visible";visible6="visible";
        }
        polygon[0].radius += 0.05;
        this.setState({ regularPolygons: polygon, display1: display1, display2: display2,
        visible1:visible1,visible2:visible2, visible3:visible3,visible4:visible4,visible6:visible6}
        )
    }
    Change_Radius_down() {
        var polygon = this.state.regularPolygons;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        var visible1, visible2,visible3,visible4,visible5,visible6;
        if (display1 == 'inherit') {
            display1 = 'none';
            display2 = 'inherit';
            visible1="hidden";visible2="hidden"; visible3="hidden";visible4="hidden";visible5="hidden";
        } else {
            display1 = 'inherit';
            display2 = 'none';
            visible1="visible";visible2="visible"; visible3="visible";visible4="visible";visible5="visible";
        }
        polygon[0].radius -= 0.05;
        this.setState({ regularPolygons: polygon, display1: display1, display2: display2,
        visible1:visible1,visible2:visible2, visible3:visible3,visible4:visible4,visible5:visible5}
        )
    }

    renderMap() {
        if (this.state.display1 === 'inherit') {
            return(
                <div className='map'style={{display:this.state.display1}}>
                <ReactBingmaps
                bingmapKey = {this.state.bingmapKey}
                center = {[43.2609,-79.9192]}
                zoom = {11} 
                regularPolygons = {this.state.regularPolygons} 
                />
                </div>
            )
        }
        return(
            <div className='map' style={{display:this.state.display2}} >
            <ReactBingmaps
            bingmapKey = {this.state.bingmapKey}
            center = {[43.2609,-79.9192]}
            zoom = {11}
            />
            </div>
        )
    }

    changeregion(text) {
        this.setState({ region: text })
    }
    changetype(text) {
        this.setState({ type: text })
    }
    changeRoommate(text) {
        this.setState({ Roommate: text })
    }
    enable_disable() {
        var line=this.state.line;
            if (line === false){
                line = true;
            }
            else{
                line = false;
            }
            this.setState({ line: line })
        }
    render() {
        var logoStyle = {
            width: '40px',
            height: '40px'
        };
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                        <DropdownButton
                        disabled={this.state.line}
                        variant="outline-secondary"
                        title={this.state.region}>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeregion(e.target.textContent)}>West Hamilton </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeregion(e.target.textContent)}>East Hamilton </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeregion(e.target.textContent)}>Downtown Hamilton </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeregion(e.target.textContent)}>Ancaster </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeregion(e.target.textContent)}>Dundas </div></Dropdown.Item>             
                         </DropdownButton>
                         </td>
                         <td>
                        <DropdownButton
                        disabled={this.state.line}
                        variant="outline-secondary"
                        title={this.state.type}>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changetype(e.target.textContent)}>Apartment </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changetype(e.target.textContent)}>Condo </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changetype(e.target.textContent)}>House </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changetype(e.target.textContent)}>Town House </div></Dropdown.Item>            
                         </DropdownButton>
                         </td>
                         <td>
                        <DropdownButton
                        disabled={this.state.line}
                        variant="outline-secondary"
                        title={this.state.Roommate}>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeRoommate(e.target.textContent)}>All Male </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeRoommate(e.target.textContent)}>All Female </div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changeRoommate(e.target.textContent)}>Co-ed </div></Dropdown.Item>
                         </DropdownButton>
                         </td>
                         </tr>
                         <tr>
                         <td>
                        <p>Max Budget:</p>
                        <input class="inputsize" type="text" onChange={(event) => this.setState({ Max_budget: event.target.value })}
                        value={this.state.Max_budget} disabled={this.state.line}/></td>
                        <td>
                        <p>Min Budget:</p>
                        <input class="inputsize" type="text" onChange={(event) => this.setState({ Min_budget: event.target.value })}
                        value={this.state.Min_budget} disabled={this.state.line}/></td>
                        <td><img src={pen} style={logoStyle} onClick={this.enable_disable.bind(this)}/></td>
                        </tr>
                    
                     </tbody>
                </table>
                <p>Double Click on buttons to make changes on preferred area</p>
                <p>
                <button onClick={this.Change_Center_Up.bind(this)} style={{visibility:this.state.visible1}}>Latitude up</button>
                <button onClick={this.Change_Center_down.bind(this)} style={{visibility:this.state.visible2}}>Latitude down</button>
                </p>
                <p>
                <button onClick={this.Change_Center_left.bind(this)} style={{visibility:this.state.visible3}}>Longitude left</button>
                <button onClick={this.Change_Center_Right.bind(this)} style={{visibility:this.state.visible4}}>Longitude Right</button>
                </p>
                <p>
                <button onClick={this.Change_Radius_up.bind(this)} style={{visibility:this.state.visible5}}>Radius up</button>
                <button onClick={this.Change_Radius_down.bind(this)} style={{visibility:this.state.visible6}}>Radius down</button> 
                </p>
                {this.renderMap()}
            </div>
        )
    }

}
class comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter:"relationship",sort:"sort by review",display1:"inherit", display2:"none",comment:"write comment to others",
        reviews: [
            {id:1,Name:"user1",rating:2,date:"AUG,2,2018",relationship:"roommate",heart:"heart_grey",
            text:"dasdad dasdugjh dqujojoi dhjasdgjyu djaskdjq mqeqkwmelq popopdasd drhufhjb."},
            {id:2,Name:"user2",rating:3,date:"Jan,2,2018",relationship:"roommate", heart:"heart_grey",
            text:"dasdad dasdugjh dqujojoi dhjasdgjyu djaskdjq mqeqkwmelq popopdasd drhufhjb."},
            {id:3,Name:"user3",rating:5,date:"May,12,2019", relationship:"landlord",heart:"heart_grey",
            text:"dasdad dasdugjh dqujojoi dhjasdgjyu djaskdjq mqeqkwmelq popopdasd drhufhjb."},
            {id:4,Name:"user4",rating:4,date:"May,12,2019",relationship:"roommate",heart:"heart_grey",
            text:"dasdad dasdugjh dqujojoi dhjasdgjyu djaskdjq mqeqkwmelq popopdasd drhufhjb."}
        ],
        new_reviews:
            {id:1,Name:"",relationship:"",
            text:""},
    }

    }
    changeregion() {
        var comment = this.state.comment;
        var display1 = this.state.display1;
        var display2 = this.state.display2;
        if (comment === "write comment to others"){
            comment="view comment";
            display1="none";
            display2="inherit";

        }else{
            comment = "write comment to others";
            display1="inherit";
            display2="none";
        }
        this.setState({ comment: comment, 
            display1:display1, display2:display2})
    }
    changesort() {
        var sort = this.state.sort;
        if (sort === "sort by review"){
            sort="unsort";
        }
        else{
            sort = "sort by review";
        }
        this.setState({ sort: sort })
    }
    changefilter(text) {
        this.setState({ filter: text })
    }

    setheart(id){
        var reviews = this.state.reviews;
        if (reviews[id-1].heart==="heart_grey"){
            reviews[id-1].heart="heart_red";
        }else{
            reviews[id-1].heart="heart_grey";
        }
        this.setState({ reviews: reviews })
    }
    changerelationship(text){
        var new_reviews = this.state.new_reviews;
       new_reviews.relationship=text;

        this.setState({ new_reviews: new_reviews })
    }

    render(){
        var object=this.state.reviews;
        if (this.state.sort === "unsort"){
            object.sort((a,b) =>a.rating - b.rating);
        }else{
            object.sort((a,b) =>a.id - b.id);
        }

        if (this.state.filter === "roommate"){
            object=object.filter( ({id,Name,rating,date,relationship,heart,text}) => relationship == "roommate" );
        }
        else if(this.state.filter === "landlord"){
            object=object.filter( ({id,Name,rating,date,relationship,heart,text}) => relationship == "landlord" );
        }
        else{
            object=object.filter( ({id,Name,rating,date,relationship,heart,text}) => relationship != "relationship" );
        }
 
        return(
            <div>
                <button onClick={this.changeregion.bind(this)}>{this.state.comment}</button>
                <div class="top" style={{display:this.state.display1}}>
                <button onClick={this.changesort.bind(this)}>{this.state.sort}</button>
                <InputGroup size='lg'> 
                
                <span class="left">filter by relationship:</span>
                <DropdownButton
                        variant="outline-secondary"
                        title={this.state.filter}>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changefilter(e.target.textContent)}>landlord</div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changefilter(e.target.textContent)}>roommate</div></Dropdown.Item>
                        <Dropdown.Item as="button"><div onClick={(e) => this.changefilter(e.target.textContent)}>relationship</div></Dropdown.Item>  
                         </DropdownButton>
                </InputGroup>
                {object.map(
                    ({id,Name,rating,date,relationship,heart,text}) => 
                <table key={id} class="comment">
                    <tbody>
                        <tr>
                            <td> <p>Name: {Name}</p></td>
                            <td> rating:<Rating name="disabled" value={rating} disabled /></td>
                            <td><p>date: {date}</p></td>
                        </tr>
                        <tr>
                            <td>relationship:{relationship}</td>
                            <td>Review: <textarea id='comment' type="text" value={text}/></td>
                            <td>Like:<span class={heart} onClick={this.setheart.bind(this, id)}></span></td>
                        </tr>
                    </tbody>
                </table>)}
                </div>
                <div class="top" style={{display:this.state.display2}}> 
                    <h1>Write review</h1>
                <table class="comment">
                    <tbody>
                        <tr>
                            <td> <p>Name: <input type="text"/></p></td>
                            <td> rating:<Rating name="controlled" defaultValue={0}/></td>
                            <td><p>relationship:<DropdownButton
                            variant="outline-secondary"
                            title={this.state.new_reviews.relationship}>
                            <Dropdown.Item as="button"><div onClick={(e) => this.changerelationship(e.target.textContent)}>landlord</div></Dropdown.Item>
                            <Dropdown.Item as="button"><div onClick={(e) => this.changerelationship(e.target.textContent)}>roommate</div></Dropdown.Item>  
                            </DropdownButton></p></td>
                        </tr>
                        <tr>
                            <td>Review:</td>
                            <td> <textarea id='comment' type="text"/></td>
                            <td> <button>Submit</button></td>
                        </tr>
                    </tbody>
                </table>
                </div>

            </div>
        )
    }
}
class Personal extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Router>
                <div class="grid-container">
                    <div class="grid-item">

                        <div class="circle">B</div>
                        <p><NavLink exact to="/personal">Personal information</NavLink></p>
                        <p><NavLink exact to="/personal/preference">Preference</NavLink></p>
                        <p><NavLink exact to="/personal/comments">Comment</NavLink></p>

                    </div>
                    <div class="grid-item">
                        <Switch>
                            <Route exact path="/personal" component={information} />
                            <Route path="/personal/preference" component={preference} />
                            <Route path="/personal/comments" component={comments} />
                        </Switch>
                    </div>

                </div>
            </Router>
        );
    }
}
export default Personal;
