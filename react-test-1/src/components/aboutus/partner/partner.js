import React from "react";

const partners = [
  { name: "Slmplon", logo: "SM.jpeg" },
  { name: "Amro", logo: "Amro.jpeg" },
  { name: "Leen", logo: "Leen.jpeg" },
];

const PartnersSection = () => {
  return (
    <div className="partners">
      <h2 className="partners-title">Our Trusted Partners</h2>
      <p className="partners-text">
        We are proud to collaborate with top companies to support our students and provide the best learning experience.
      </p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PartnersSection;