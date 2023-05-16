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
        <div className="circle-container">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
        <FoundingCard CardData={FounderData} />
      </div>
      <div>
        <MemberCard SoftwareMemberCardData={SofwareMemberData} MediaCardData={MediaMemberData} />
      </div>
    </div>
  );
}

export default App;
