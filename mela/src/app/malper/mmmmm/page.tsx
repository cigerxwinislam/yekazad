// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
"use client";

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
export default function page() {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Card
        style={{
          opacity: 0.97,
          color: "black",
          textAlign: "center",
          maxWidth: "700px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Card.Body>
          <h3>  In the Name of Allah, the Most Gracious, the Most Merciful<br />

            All Praise is due to Allah, the Lord of all the worlds
          <br />
            And Peace and Blessings be upon our Prophet Muhammad, his family, and companions
           </h3>
           <br />
          <Card.Title style={{ fontSize: "2rem", fontWeight: 700 }}>
          
            Welcome to Yekazad Software Center
          </Card.Title>
          <Row className="g-4">
            {/* Left Column */}
            <Col xs={12} md={7} className="mb-3 mb-md-0">
              <div style={{ textAlign: "left" }}>
                <h3 style={{ color: "#28a745", fontWeight: 600, marginTop: 24 }}>About Us</h3>
                <p>
                  Yekazad Software Center is dedicated to providing high-quality software solutions and services. Our team of experts specializes in web development, mobile app development, AI solutions, and more.
                </p>
                <h4 style={{ color: "#007bff", fontWeight: 500, marginTop: 20 }}>Our Services</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    {
                      title: "Web Development",
                      desc: "Building responsive and dynamic websites using the latest technologies."
                    },
                    {
                      title: "Mobile App Development",
                      desc: "Creating user-friendly mobile applications for Android and iOS platforms."
                    },
                    {
                      title: "AI Solutions",
                      desc: "Implementing AI-driven applications to enhance business processes."
                    },
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 10 }}>
                      <strong>{item.title}</strong>: {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Right Column */}
            <Col xs={12} md={5}>
              <Image
                src="/images/about-us.jpg"
                alt="About Us"
                fluid
                style={{
                  borderRadius: 10,
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            </Col>  
          </Row>
        </Card.Body>
      </Card>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p style={{ color: "#6c757d" }}>
          © 2023 Yekazad Software Center. All rights reserved.
        </p>
      </div>

    </div>
  );
}