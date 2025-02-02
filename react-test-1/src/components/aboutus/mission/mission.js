import React from "react";
import { FixedSizeList as List } from "react-window";
import "./mission.css"
const missions = [
  "Provide high-quality coding education for all ages.",
  "Prepare students for future careers in technology.",
  "Make programming fun, engaging, and accessible.",
  "Develop problem-solving and critical thinking skills.",
  "Create a supportive and inclusive learning environment.",
  "Help students build real-world projects and portfolios.",
  "Encourage creativity and innovation in coding.",
  "Offer hands-on experience with modern technologies.",
  "Teach collaboration and teamwork through coding challenges.",
  "Empower students with skills for lifelong success.",
];

// Component to render each mission item
const MissionItem = ({ index, style }) => (
  <div style={style} className="mission-item">
    <p>{missions[index]}</p>
  </div>
);

// Main OurMission component
const OurMission = () => {
  return (
    <div className="our-mission">
      <h2>Our Mission</h2>
      <p>
        We are dedicated to providing the best coding education for students and
        preparing them for a successful future.
      </p>
      <List
        height={300}
        itemCount={missions.length}
        itemSize={50}
        width="100%"
        style={{ overflowY: "auto" }} // تفعيل التمرير بدون إظهار الشريط
      >
        {MissionItem}
      </List>
    </div>
  );
};

export default OurMission;