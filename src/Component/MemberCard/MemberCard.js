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
    <div>
      <div>
        <div className="MemberSectionTittle">
          <p className="secTittle">OUR TEAMS</p>
          <div className="two-color-text">
            Meet Our <span>Unique Talents</span>
          </div>
          <div className="MemberSectionDescCont">
            <p className="MemberSectionDesc">
              Meet the teams that create our high-quality products. These talented individuals understand their craft, and how their work impacts you. They are good at their jobs, and we believe in rewarding that.
            </p>
          </div>
          <div className="DivisionCont">
            <div className="SoftwareDivisionGrid">Software House Division</div>
            <div className="CreativeDivisionGrid">Creative House Division</div>
          </div>
          <div className="DivisionDescCont">
            <div className="SoftwareDivisionDesc">Develop, deliver and support custom-made software applications and services</div>
            <div className="CreativeDivisionDesc">Produces, manages and distributes content, invests in media-related businesses.</div>
          </div>
        </div>
      </div>
      <div className="gridCont">
        <div className="grid-container">{MediaCardDataList}</div>
        <div className="grid-container">{SoftwareMemberCardDataList}</div>
      </div>
    </div>
  );
}
export default MemberCard;
