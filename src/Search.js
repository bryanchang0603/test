import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { NavDropdown, Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
/* To add router: yarn add react-router-dom */
class Search extends React.Component{
  render(){
    
    var searchStyle={
      position: 'relative',
      right: '4px',
      top: '0px',
      width: '100%'
    }
    return(
      
    <div>
      <div class='searchBar' style={searchStyle}>
      
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Filter By</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="mr-auto">

            <NavDropdown title="Type" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">House</NavDropdown.Item>
            <NavDropdown.Item href="#">Apartment</NavDropdown.Item>
            <NavDropdown.Item href="#">Dormitory</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="All Listed" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Available</NavDropdown.Item>
            <NavDropdown.Item href="#">Unavailable</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Location" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">McMaster</NavDropdown.Item>
            <NavDropdown.Item href="#">Westdale</NavDropdown.Item>
            <NavDropdown.Item href="#">Downtown</NavDropdown.Item>
            </NavDropdown>

            {/* <NavDropdown.Divider /> */}

            <Navbar.Brand href="#">Sort By</Navbar.Brand>
            <Nav.Link href="#">Date</Nav.Link>
            <Nav.Link href="#">Distance</Nav.Link>
            <Nav.Link href="#">Rating</Nav.Link>
          </Nav>
          {/* add a grid view icon */}
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>

      </div>
          
        </div>
    );
  }
}

export default Search;
