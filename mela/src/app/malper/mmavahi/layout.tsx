// Bismillahirrahmanirrahim
// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd

"use client";

import React from 'react'
import ForYouFeed from './ForYouFeed'
import { Card } from 'react-bootstrap';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
      <Card style={{ marginTop: "20px", width: "100%", maxWidth: "700px", textAlign: "center", padding: "19px" }}>
        <Card.Title>You may also be interested in</Card.Title>
        <Card.Body>
          <ForYouFeed />
        </Card.Body>
      </Card>

      {/* Phone Button - Left Bottom */}
      <a
        href="tel:+905549765692"
        style={{
          position: "fixed",
          left: 24,
          bottom: 24,
          zIndex: 1000,
          background: "#28a745",
          color: "#fff",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(40,167,69,0.18)",
          fontSize: 28,
          textDecoration: "none",
        }}
        title="Call us"
      >
        <span role="img" aria-label="Phone">📞</span>
      </a>

      {/* WhatsApp Button - Right Bottom */}
      <a
        href="https://wa.me/905549765692"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1000,
          background: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 8px rgba(37,211,102,0.18)",
          fontSize: 28,
          textDecoration: "none",
        }}
        title="WhatsApp"
      >
        <span role="img" aria-label="WhatsApp">🟢</span>
      </a>
    </div>
  )
}
