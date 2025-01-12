// Bismillahirrahmanirrahim

"use client"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Mmmnavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/malper">Yekazad Software Center</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/malper">Home</Nav.Link>
            <NavDropdown title="Web" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Promotion Website</NavDropdown.Item>
              <NavDropdown.Item href="/malper/mmkinc">
                
             Blog Website
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Social Media Websites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Repairing
              </NavDropdown.Item>
            </NavDropdown>




            <NavDropdown title="Mobile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmkedkar">Android Native Apps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                Ios Native Apps
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Web Apps </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                
                Cross Platform Apps
              </NavDropdown.Item>
            </NavDropdown>



            <NavDropdown title="Desktop " id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmwesayit">Windows Apps</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>












          


            <NavDropdown title="Machine Learning" id="basic-nav-dropdown">
              <NavDropdown.Item href="/malper/mmhewcedari">NLP</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                Object Detection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Image Processing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Advanced
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Robotics" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pilot</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
                Rover
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Docs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="For Developers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Courses</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Documantations
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contribute</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Join to Yekazad
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#link">About Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mmmnavbar;