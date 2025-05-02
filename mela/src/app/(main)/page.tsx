// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain
"use client"
import React from "react";
import { Alert, Container, Row, Col, Card, Button } from "react-bootstrap";

function AdminPage() {
  return (
    <Container fluid style={{ background: "#f8f9fa", minHeight: "100vh", padding: "20px" }}>
      <Row>
        <Col>
          <Alert variant="success" style={{ textAlign: "center", fontSize: "18px" }}>
            Selam Aleykum dear Customer or Developer, Welcome to Admin Panel
          </Alert>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Alert
            style={{
              background: "green",
              color: "white",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            Sernameye name nameye Allah <br />
            Be namaye nameye kemi wi Wallah
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Products</Card.Title>
              <Card.Text>Admin panelinin ana sayfasına erişim sağlayın.</Card.Text>
              <Button variant="primary" href="/mmavahi">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Courses</Card.Title>
              <Card.Text>Hakkımızda sayfasını düzenleyin veya görüntüleyin.</Card.Text>
              <Button variant="primary" href="/mmkinc">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Services</Card.Title>
              <Card.Text>Beslenme programlarını yönetin.</Card.Text>
              <Button variant="primary" href="/mmkargeh">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title> For Developers</Card.Title>
              <Card.Text>Programlarınızı düzenleyin veya görüntüleyin.</Card.Text>
              <Button variant="primary" href="/mmwesayit">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>References</Card.Title>
              <Card.Text>Blog yazılarınızı yönetin ve düzenleyin.</Card.Text>
              <Button variant="primary" href="/mmkedkar">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>The website</Card.Title>
              <Card.Text>Site ayarlarını düzenleyin veya görüntüleyin.</Card.Text>
              <Button variant="primary" href="/malper">
                Git
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminPage;