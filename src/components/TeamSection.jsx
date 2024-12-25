import React from "react";
import "../styles/TeamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Ganesh Baniya",
      title: "CEO",
      image: "gb.png",
      bio: "Experienced in managing large-scale projects with exceptional leadership skills.",
      fblink: "https://www.facebook.com/ganesh.fmail", // Ensure correct Facebook link format
    },
    // Add more team members here
  ];

  return (
    <section className="team-section">
      <h2 className="section-title">Meet Our Amazing Team</h2>
      <p className="section-description">
        Our team is comprised of skilled professionals committed to delivering
        exceptional results with dedication and passion.
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <a href={member.fblink} target="_blank" rel="noopener noreferrer">
              <div className="member-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-image"
                />
              </div>
            </a>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-title">{member.title}</p>
            <p className="member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;