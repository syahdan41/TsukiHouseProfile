import React from "react";
import "./FoundingCard.css";
function FoundingCard({ CardData }) {
  const CardDataList = CardData.map((item, index) => (
    <div key={index}>
      <div className="profileCard">
        <img src={item.image} alt={item.title} className="profileImage" />
      </div>
      <div className="card">
        <p className="nameStyle">{item.name}</p>
        <p className="roleStyle">{item.role}</p>
        <div className="socmedContainer">
          <a href={item.linkInstagram} target="_blank" key={item.linkInstagram}>
            <img src={item.instagram} alt="linkedin" className="Icon" />
          </a>
          <a href={item.linkLinkedin} target="_blank" key={item.linkLinkedin}>
            <img src={item.linkedin} alt="linkedin" className="Icon" />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <section>
      <div className="FoundingCardLayout bg">{CardDataList}</div>
    </section>
  );
}
export default FoundingCard;
