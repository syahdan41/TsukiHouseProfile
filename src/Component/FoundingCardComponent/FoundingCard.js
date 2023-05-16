import React from "react";
import "./FoundingCard.css";
function FoundingCard({ CardData }) {
  const CardDataList = CardData.map((item, index) => (
    <div key={index} className="CardCont">
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
    <div className="border">
      <div className="headingFounding">
        <p className="firstTittle">FOUNDERS</p>
        <div className="two-color-text2">
          <p className="firstTxt">Our Beloved</p>
          <p className="secTxt">Founding members</p>
        </div>
        <p className="foundingDesc">
          Our beloved founding members were the visionaries who paved the way for the establishment of our organization. They were driven by a passion to create something meaningful and impactful that would benefit society in a significant
          way. Their unwavering commitment, tireless efforts, and countless sacrifices laid the foundation for our success today.
        </p>
      </div>
      <div className="FoundingCont">
        <div className="FoundingCardLayout">{CardDataList}</div>
      </div>
    </div>
  );
}
export default FoundingCard;
