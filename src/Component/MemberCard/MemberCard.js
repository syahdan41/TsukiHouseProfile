import React from "react";
import "./MemberCard.css";
function MemberCard({ SoftwareMemberCardData, MediaCardData }) {
  const SoftwareMemberCardDataList = SoftwareMemberCardData.map((item, index) => (
    <div>
      <div key={index} className="MemberCard">
        <div className="profileImageCont">
          <img src={item.Memberimage} alt={item.title} className="profileMemberImage" />
        </div>
        <div>
          <p className="MemberCardName">{item.MemberName}</p>
          <div className="MemberCardRoleCont">
            <p className="MemberCardRole">{item.MemberRole[0]}</p>
            <p className="MemberCardRole">{item.MemberRole[1]}</p>
          </div>
        </div>
        <div className="socmedCont">
          <a href={item.MemberIg} target="_blank" key={item.MemberIg}>
            <img src={item.instagram} alt="linkedin" className="Icon" />
          </a>
          <a href={item.MemberLinkedin} target="_blank" key={item.MemberLinkedin}>
            <img src={item.linkedin} alt="linkedin" className="Icon" />
          </a>
        </div>
      </div>
    </div>
  ));
  const MediaCardDataList = MediaCardData.map((item, index) => (
    <div>
      <div key={index} className="MemberCard">
        <div className="profileImageCont">
          <img src={item.Memberimage} alt={item.title} className="profileMemberImage" />
        </div>
        <div>
          <p className="MemberCardName">{item.MemberName}</p>
          <div className="MemberCardRoleCont">
            <p className="MemberCardRole">{item.MemberRole[0]}</p>
            <p className="MemberCardRole">{item.MemberRole[1]}</p>
          </div>
        </div>
        <div className="socmedCont2">
          <a href={item.MemberIg} target="_blank" key={item.MemberIg}>
            <img src={item.instagram} alt="linkedin" className="Icon" />
          </a>
          <a href={item.MemberLinkedin} target="_blank" key={item.MemberLinkedin}>
            <img src={item.linkedin} alt="linkedin" className="Icon" />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <section>
      <div className="gridCont">
        <div className="grid-container">{MediaCardDataList}</div>
        <div className="grid-container">{SoftwareMemberCardDataList}</div>
      </div>
    </section>
  );
}
export default MemberCard;
