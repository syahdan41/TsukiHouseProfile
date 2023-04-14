import "./App.css";
import FoundingCard from "./Component/FoundingCardComponent/FoundingCard";
import MemberCard from "./Component/MemberCard/MemberCard";
import React from "react";
import profile1 from "./Assets/image/Chaewon (6).png";
import profile2 from "./Assets/image/syahdansayangseulgi.png";
import profile3 from "./Assets/image/gantengnyajaran.png";
import profile4 from "./Assets/image/hanif.png";
import profile5 from "./Assets/image/ikramhentai.png";
import igIcon from "./Assets/image/iconig.png";
import linkedinPict from "./Assets/image/linkedin.png";
import imageDummy from "./Assets/image/cantiknyasyhdn.jpg";
function App() {
  const FounderData = [
    {
      name: "Putra Bangsa W.",
      role: "Founding Member",
      image: profile1,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/putra-bangsa-widjanarko-0890b2223/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/sapikayang/",
    },
    {
      name: "Syahdan Triantoro",
      role: "Founding Member",
      image: profile2,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/syahdan-triantoro/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/syhdn_t/",
    },
    {
      name: "Pandu Wirakusuma",
      role: "President",
      image: profile3,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/muhammad-pandu-549977207/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/pandu_wirakusuma/",
    },
    {
      name: "Hanif Faiq",
      role: "Founding Member",
      image: profile4,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/haniffaiq13/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/lama2dingin/",
    },
    {
      name: "Ikram Andika Ukar",
      role: "Founding Member",
      image: profile5,
      linkedin: linkedinPict,
      linkLinkedin: "https://www.linkedin.com/in/ikramau/",
      instagram: igIcon,
      linkInstagram: "https://www.instagram.com/ikramau/",
    },
  ];
  const SofwareMemberData = [
    { MemberName: "Hanif Faiq", MemberRole: ["Engineering Director", "| Full Stack Developer"], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Ikram Andika Ukar", MemberRole: ["Software House Project Manager", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Putra Bangsa W.", MemberRole: ["Creative Director", "| UI/UX Designer"], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Syahdan Triantoro", MemberRole: ["Lead Mobile App Developer", "| Front-End Developer"], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Imam Nurhaq", MemberRole: ["Full Stack Developer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Arifitantito Oktarian H.", MemberRole: ["Full Stack Developer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "M. Irwan Zamroni", MemberRole: ["Back-End Developer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Donny Ali Sanjaya", MemberRole: ["Internet of Things Engineer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
  ];
  const MediaMemberData = [
    { MemberName: "Gustin Aldiansyah", MemberRole: ["Media House Project Manager", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "David Nicholas", MemberRole: ["Graphic Designer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Hasnan Muhammad", MemberRole: ["Graphic Designer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Hafiz Wiraokta", MemberRole: ["Video Editor", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Bagus Angkasa", MemberRole: ["Video Editor", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Naufal Mirza", MemberRole: ["Photographer", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
    { MemberName: "Ridho Al Harits", MemberRole: ["3D Animator", ""], Memberimage: imageDummy, MemberLinkedin: "", MemberIg: "", linkedin: linkedinPict, instagram: igIcon },
  ];
  return (
    <div>
      <div>
        <div className="headingFounding">
          <p className="firstTittle">FOUNDERS</p>
          <div className="two-color-text2">
            Our Beloved <span>Founding Members</span>
          </div>
          <p className="foundingDesc">
            Our beloved founding members were the visionaries who paved the way for the establishment of our organization. They were driven by a passion to create something meaningful and impactful that would benefit society in a
            significant way. Their unwavering commitment, tireless efforts, and countless sacrifices laid the foundation for our success today.
          </p>
        </div>
        <div className="bg">
          <FoundingCard CardData={FounderData} />
        </div>
      </div>
      <section>
        <div className="MemberSectionTittle">
          <p className="firstTittle">OUR TEAMS</p>
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
        <div>
          <MemberCard SoftwareMemberCardData={SofwareMemberData} MediaCardData={MediaMemberData} />
        </div>
      </section>
    </div>
  );
}

export default App;
