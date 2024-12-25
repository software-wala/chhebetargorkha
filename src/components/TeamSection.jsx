import React from "react";
import "../styles/TeamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jenny Doson",
      title: "Site Manager",
      image: "jenny-doson.jpg",
      bio: "Experienced in managing large-scale projects with exceptional leadership skills.",
    },
    {
      name: "Mark Taylor",
      title: "Project Engineer",
      image: "mark-taylor.jpg",
      bio: "Expert in technical project planning and execution, ensuring top-notch quality.",
    },
    {
      name: "Sophia Lee",
      title: "Architect",
      image: "sophia-lee.jpg",
      bio: "Creative designer specializing in sustainable architecture and innovative designs.",
    },
    {
      name: "Ethan Carter",
      title: "Safety Officer",
      image: "ethan-carter.jpg",
      bio: "Dedicated to maintaining safety and compliance on all project sites.",
    },
  ];

  return (
    <section className="team-section">
      <h2 className="section-title">Meet Our Amazing Team</h2>
      <p className="section-description">
        Our team is comprised of skilled professionals committed to delivering exceptional results with dedication and passion.
      </p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-image-container">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
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
