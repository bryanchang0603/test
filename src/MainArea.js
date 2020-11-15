import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import PeopleCard from './PeopleCard';
// import PeopleCard from './PeopleCard';
import './MainArea.css';

class MainArea extends Component {
  constructor(props) {
    super(props);
    
  }

  render () {
    // let peopleCards = this.state.people.map(person => {
      // return (
      //   <Col sm="6">
      //     {/* <PeopleCard key={person.id} person={person} /> */}
      //   </Col>
      // )
    // })
    return (
      // <Container fluid>
      // <Row>
      // <Col sm="6">

      <div class="row">
              <div class="col-xs-6" >
          <div class="container-lg">
          <div class="table-responsive">
              <div class="table-wrapper">
                  <div class="table-title">
                      {/* <div class="row">
                          <div class="col-sm-1">
                          </div>
                      </div> */}
                  </div>

                  
                  <table class="table1 table-bordered"> 
                      <tbody>
                        <tr>
                          <th>address2</th>
                          <img src= "/photos/house1.jpg"></img>
                          <td>description</td>
                          <td>
                            <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                          </td>
                        </tr>
                      </tbody>
                  </table>

                  
                  <table class="table2 table-bordered"> 
                      <tbody>
                        <tr>
                          <th>address1</th>
                          <img src= "/photos/house1.jpg"></img>
                          <td>description</td>
                          <td>
                            <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                          </td>
                        </tr>
                      </tbody>
                  </table>

                  <table class="table3 table-bordered"> 
                      <tbody>
                        <tr>
                          <th>address2</th>
                          <img src= "/photos/house1.jpg"></img>
                          <td>description</td>
                          <td>
                            <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                            <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                          </td>
                        </tr>
                      </tbody>
                  </table>



                  <table class="table4 table-bordered"> 
                      <tbody>
                        <tr>
                          <th>address2</th>
                          <img src= "/photos/house1.jpg"></img>
                          <td>description</td>
                          <td>
                            <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                          </td>
                        </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>         
      </div>
    </div>
      /* </Col>
</Row> */
      // </Container>
    )
  }
}

export default MainArea;
