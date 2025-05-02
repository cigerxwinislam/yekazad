// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
"use client";
import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function page() {
  return (
    <main className="flex-grow py-8">
      <Container>
        {/* Dashboard Grid */}
        <Row className="g-4">
          {/* Card 1: Active Projects */}
          <Col md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x150"
                alt="Active Projects"
              />
              <Card.Body>
                <Card.Title>Active Projects</Card.Title>
                <Card.Text>You currently have 5 active projects.</Card.Text>
                <Button variant="primary" href="#projects">
                  View Projects
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2: Team Members */}
          <Col md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x150"
                alt="Team Members"
              />
              <Card.Body>
                <Card.Title>Team Members</Card.Title>
                <Card.Text>Your team consists of 12 members.</Card.Text>
                <Button variant="primary" href="#team">
                  Manage Team
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3: Upcoming Deadlines */}
          <Col md={6} lg={4}>
            <Card className="shadow-lg">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/300x150"
                alt="Upcoming Deadlines"
              />
              <Card.Body>
                <Card.Title>Upcoming Deadlines</Card.Title>
                <Card.Text>3 deadlines are approaching this week.</Card.Text>
                <Button variant="primary" href="#deadlines">
                  Check Deadlines
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Recent Updates Section */}
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>New feature added to the project management tool.</li>
            <li>Weekly team meeting scheduled for Friday.</li>
            <li>System maintenance planned for Saturday night.</li>
          </ul>
        </div>
      </Container>
    </main>
  );
}

export default page;