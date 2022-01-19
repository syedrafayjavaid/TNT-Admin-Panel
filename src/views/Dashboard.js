import React from "react";
import ChartistGraph from "react-chartist";
import {useState, useEffect} from 'react';
import axios from 'axios';

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import config from "config";

function Dashboard() {



  const [posts, setPosts ]= React.useState('');
  const [users, setUsers ]= React.useState('');
  const [editors, setEditors] = React.useState('');






// getting  all Post data

const viewPostsData = async () => {
   
    
  const res = await axios.get(config.base_url+'/allarticle')

  .then(res =>{
      setPosts(res.data.data);

  }).catch(err =>{
      console.log(err)
  });
}




// getting all Users data

  const viewUsersData = async () => {
   
    console.log(config.base_url);
    
    console.log("This is the base url",config.base_url);
     const res = await axios.get(config.base_url+'/user/alluser')

     .then(res =>{
         console.log('viewProductData - res: ', res);
         setUsers(res.data.data);

     }).catch(err =>{
         console.log(err)
     });
 }





// getting all Editors data

 const viewEditorData = async () => {
   
  console.log(config.base_url);
  
  console.log("This is the base url",config.base_url);
   const res = await axios.get(config.base_url+'/admin/alleditor')

   .then(res =>{
       console.log('viewProductData - res: ', res);
       setEditors(res.data.data);

   }).catch(err =>{
       console.log(err)
   });
}





///// Counting Totals

let TotalPosts = Object.keys(posts).length;
let TotalUsers = Object.keys(users).length;
let TotalEditors = Object.keys(editors).length;



useEffect(() => {
  viewPostsData();
  viewUsersData();
  viewEditorData();
 
}, [])








  return (
    <>
      <Container fluid>
         <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-single-02 text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Users</p>
                      <Card.Title as="h4">{TotalUsers}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Last Updated Today
                 
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-ruler-pencil text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Editors</p>
                      <Card.Title as="h4">{TotalEditors}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last Updated Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-paper-2 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total Posts</p>
                      <Card.Title as="h4">{TotalPosts}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Last Updated Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-notes text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Active Posts</p>
                      <Card.Title as="h4">{TotalPosts-2}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                <i className="far fa-calendar-alt mr-1"></i>
                  Last Updated Today
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row> 
        <Row>
          {/* <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Articles Reviews</Card.Title>
                <p className="card-category">Last two months Performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={{
                      labels: [
                        "1st Week",
                        "2nd Week",
                        "3rd Week",
                        "4th week",
                        "5th week",
                        "6th week",
                        "7th week",
                        "8th week",
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type="Line"
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  liked <i className="fas fa-circle text-danger"></i>
                  Disliked <i className="fas fa-circle text-warning"></i>
                  Not Reviewed Yet
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Last updated today
                </div>
              </Card.Footer>
            </Card>
          </Col> */}
  {/* 
  <Row>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Number</p>
                        <Card.Title as="h4">150GB</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i>
                    Update Now
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-light-3 text-success"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <Card.Title as="h4">$ 1,345</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="far fa-calendar-alt mr-1"></i>
                    Last day
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <Card.Title as="h4">23</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="far fa-clock-o mr-1"></i>
                    In the last hour
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <Card.Title as="h4">+45K</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i>
                    Update now
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row> */}

          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">2021 Users & Editors</Card.Title>
                <p className="card-category">All user and editors record</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          TotalUsers,
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          TotalEditors,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                 Users <i className="fas fa-circle text-danger"></i>
                  Editors
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Last Updated Today
                </div>
              </Card.Footer>
            </Card>
          </Col>




          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Articles Statistics</Card.Title>
                <p className="card-category">Articles Approvel Ratio</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                    data={{
                      labels: ["70%", "20%", "10%"],
                      series: [70, 20, 10],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Approved <i className="fas fa-circle text-danger"></i>
                  Rejected <i className="fas fa-circle text-warning"></i>
                  Awaiting
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Last updated today
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>





        </Row>
        
      </Container>
    </>
  );
}

export default Dashboard;
