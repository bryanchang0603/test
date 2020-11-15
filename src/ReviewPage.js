import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BeautyStars from 'beauty-stars';

import { InputGroup, DropdownButton, Dropdown, FormControl, Button } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import './ReviewPage.css';

class Table extends React.Component {
    state = { value: 0 };

    renderStar1() {
        return (
            <div class="starR">
                <BeautyStars
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                />
            </div>
        );
    }

    renderfilter() {
        if (this.props.match.params.filterMethod === "Available") {
            if (this.props.match.params.sortMethod === "Name") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center">
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Distance L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Distance H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            }
        }
        else if (this.props.match.params.filterMethod === "House") {
            if (this.props.match.params.sortMethod === "Name") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                    </Grid>
                </Grid >)





            } else if (this.props.match.params.sortMethod === "Distance L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Distance H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                    </Grid>
                </Grid >)

            } else {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            }
        }
        else if (this.props.match.params.filterMethod === "Apartment") {
            if (this.props.match.params.sortMethod === "Name") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Distance L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Distance H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                    </Grid>
                </Grid >)
            }
        }
        //Only click on sort by
        else {
            if (this.props.match.params.sortMethod === "Name") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Rating L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)

            } else if (this.props.match.params.sortMethod === "Rating H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                    </Grid>
                </Grid >)

            } else if (this.props.match.params.sortMethod === "Distance L-H") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else if (this.props.match.params.sortMethod === "Distance H-L") {
                return (< Grid container xs={12} direction="column" justify="flex-start" alignItems="center" >
                    <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                        <Grid item>
                            {this.renderTable6()}
                        </Grid>
                        <Grid item>
                            {this.renderTable4()}
                        </Grid>
                        <Grid item>
                            {this.renderTable3()}
                        </Grid>
                        <Grid item>
                            {this.renderTable1()}
                        </Grid>
                        <Grid item>
                            {this.renderTable5()}
                        </Grid>
                        <Grid item>
                            {this.renderTable2()}
                        </Grid>
                    </Grid>
                </Grid >)
            } else {
                return (
                    <Grid container xs={12} direction="column" justify="flex-start" alignItems="center">
                        <Grid item xs={12} container direction="row" justify="space-evenly" alignItems="center">
                            <Grid item>
                                {this.renderTable1()}
                            </Grid>
                            <Grid item>
                                {this.renderTable2()}
                            </Grid>
                            <Grid item>
                                {this.renderTable3()}
                            </Grid>
                            <Grid item>
                                {this.renderTable4()}
                            </Grid>
                            <Grid item>
                                {this.renderTable5()}
                            </Grid>
                            <Grid item>
                                {this.renderTable6()}
                            </Grid>
                        </Grid>
                    </Grid>
                )
            }
        }
    }

    renderTable1() {

        return (
            <div>
                <div class="table1">

                    <div class="container1">
                        {/* <div class="container"> */}

                        <div class="table-wrapper">
                            {/* <div class="table-title"> */}
                            <div class="row">
                                <div class="col-sm-3"><h2>149 Main St W</h2> <p><b>Distance to McMaster:4.1km</b></p></div>
                                {/* <div class="col-sm-3"></div> */}

                                <div><img src="/photos/149.jpg"></img></div>

                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-info add-new1">Write a Review</button>
                                </div>

                                <div class="col-sm-2">
                                    <div class="star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star "></span>
                                    </div>
                                </div>
                                {/* {SimpleRating()} */}

                                <table1>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Review</th>
                                                <th> {this.renderStar1()}</th>
                                                <th> </th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2020-07-09</td>
                                                <td>morgan</td>
                                                <td>The landlord is really nice...</td>

                                                <td>
                                                    <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                                    <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                                    <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td>2020-08-09</td>
                                                <td>Peter</td>
                                                <td>A good place to live...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </table1>

                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

            </div>

        )
    }

    renderTable2() {

        return (
            <div>
                <div class="table2">
                    <div class="container2">
                        <div class="table-wrapper">
                            <div class="row">
                                <div class="col-sm-3"><h2>49 Emerson St</h2> <p><b>Distance to McMaster:1.3km</b></p></div>
                                <div><img src="/photos/mcm49.jpg"></img></div>

                                <div class="col-sm-2">
                                    <button type="button" class="btn btn-info add-new2">Write a Review</button>
                                </div>

                                <div class="col-sm-2">
                                    <div class="star">
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star "></span>
                                        <span class="fa fa-star "></span>
                                        <span class="fa fa-star "></span>
                                    </div>
                                </div>

                                <table2>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Name</th>
                                                <th>Review</th>
                                                <th></th>
                                                <th></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2020-07-09</td>
                                                <td>Morgan</td>
                                                <td>The landlord is really nice...</td>
                                                <td>
                                                    <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                                    <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                                    <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2020-08-09</td>
                                                <td>Peter</td>
                                                <td>A good place to live...</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </table2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTable3() {

        return (
            <div>
                <div class="table3">
                    <div class="table-wrapper">
                        <div class="row">
                            <div class="col-sm-3"><h2> 20 Rebecca St</h2> <p><b>Distance to McMaster:5.4km</b></p></div>
                            <div><img src="/photos/20.jpg"></img></div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-info add-new3">Write a Review</button>
                            </div>

                            <div class="col-sm-2">
                                <div class="star">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star "></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>

                            <table3>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Review</th>
                                            <th> </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>2020-07-09</td>
                                            <td>Morgan</td>
                                            <td>The landlord is really nice...</td>
                                            <td>
                                                <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                                <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                                <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2020-08-09</td>
                                            <td>Peter</td>
                                            <td>A good place to live...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </table3>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTable4() {
        return (
            <div>
                <div class="table4">
                    <div class="table-wrapper">
                        <div class="row">
                            <div class="col-sm-3"><h2>254 Holton Avenue South</h2> <p><b>Distance to McMaster:7.5km</b></p></div>
                            <div><img src="/photos/254G.png"></img></div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-info add-new4">Write a Review</button>
                            </div>

                            <div class="col-sm-2">
                                <div class="star">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>

                            <table4>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Review</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2020-07-09</td>
                                            <td>Morgan</td>
                                            <td>The landlord is really nice...</td>
                                            <td>
                                                <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                                <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                                <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2020-08-09</td>
                                            <td>Peter</td>
                                            <td>A good place to live...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </table4>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTable5() {

        return (
            <div>
                <div class="table5">
                    <div class="table-wrapper">
                        <div class="row">
                            <div class="col-sm-3"><h2>153 Haddon Ave S</h2> <p><b>Distance to McMaster:1.4km</b></p></div>
                            <div><img src="/photos/mcm153.jpg"></img></div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-info add-new5">Write a Review</button>
                            </div>

                            <div class="col-sm-2">
                                <div class="star">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                </div>
                            </div>

                            <table5>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Review</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2020-07-09</td>
                                            <td>Morgan</td>
                                            <td>The landlord is really nice...</td>
                                            <td>
                                                <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                                <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                                <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2020-08-09</td>
                                            <td>Peter</td>
                                            <td>A good place to live...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </table5>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderTable6() {

        return (
            <div>
                <div class="table6">
                    <div class="table-wrapper">
                        <div class="row">
                            <div class="col-sm-3"><h2>100 Quigley Rd #36</h2> <p><b>Distance to McMaster:13.2km</b></p></div>
                            <div><img src="/photos/100.jpg"></img></div>
                            <div class="col-sm-2">
                                <button type="button" class="btn btn-info add-new6">Write a Review</button>
                            </div>

                            <div class="col-sm-2">
                                <div class="star">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                            </div>

                            <table6>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Name</th>
                                            <th>Review</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2020-07-09</td>
                                            <td>Morgan</td>
                                            <td>The landlord is really nice...</td>
                                            <td>
                                                <a class="add" title="Add" ><i class="material-icons">&#xE03B;</i></a>
                                                <a class="edit" title="Edit"><i class="material-icons">&#xE254;</i></a>
                                                <a class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2020-08-09</td>
                                            <td>Peter</td>
                                            <td>A good place to live...</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </table6>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderfilter()}
            </div>
        );
    }
}




class ReviewPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sortingOrder: "Sort By...",
            filterOrder: "Filter By..."
        };
    }
    render() {
        return (
            <div>
                <div class='searchBar' >
                    <InputGroup size='lg'>
                        {/* <FormControl
                            placeholder="Search Review"
                            aria-label="Search Review"
                            aria-describedby="basic-addon2"
                        /> */}
                        <tr>
                            <td>
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title={this.state.sortingOrder}
                                    id="input-group-dropdown-2">
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ sortingOrder: "Name" }) }}
                                    >Name</Dropdown.Item>
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ sortingOrder: "Rating L-H" }) }}>
                                        Rating: Low to High</Dropdown.Item>
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ sortingOrder: "Rating H-L" }) }}>
                                        Rating: High to Low</Dropdown.Item>
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ sortingOrder: "Distance L-H" }) }}>
                                        Distance Close to Far</Dropdown.Item>
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ sortingOrder: "Distance H-L" }) }}>
                                        Distance Far to Close</Dropdown.Item>
                                </DropdownButton>
                            </td>

                            <td>
                                <DropdownButton
                                    as={InputGroup.Append}
                                    variant="outline-secondary"
                                    title={this.state.filterOrder}
                                    id="input-group-dropdown-2">
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ filterOrder: "Available" }) }}>
                                        Available</Dropdown.Item>
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ filterOrder: "House" }) }}>
                                        House</Dropdown.Item>
                                    <Dropdown.Item href="#"
                                        onClick={() => { this.setState({ filterOrder: "Apartment" }) }}>
                                        Apartment</Dropdown.Item>
                                </DropdownButton>
                            </td>

                            <td>
                                <Button variant="dark " href={'/ReviewPage/' + this.state.sortingOrder + '/' + this.state.filterOrder}>Apply</Button>
                            </td>
                        </tr>
                    </InputGroup>
                    <div>
                        <Route exact path='/ReviewPage' component={Table} />
                        <Route path='/ReviewPage/:sortMethod/:filterMethod' component={Table} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ReviewPage
