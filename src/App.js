import "./App.css";
import FoundingCard from "./Component/FoundingCardComponent/FoundingCard";
import React from "react";
import profile1 from "./Assets/image/Chaewon (6).png";
import profile2 from "./Assets/image/syahdansayangseulgi.png";
import profile3 from "./Assets/image/gantengnyajaran.png";
import profile4 from "./Assets/image/hanif.png";
import profile5 from "./Assets/image/ikramhentai.png";
import igIcon from "./Assets/image/iconig.png";
import linkedinPict from "./Assets/image/linkedin.png";
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
  return (
    <div>
      <div className="headingFounding">
        <p className="foundingTittle">Our Beloved Founding Members</p>
        <p className="foundingDesc">
          Our beloved founding members were the visionaries who paved the way for the establishment of our organization. They were driven by a passion to create something meaningful and impactful that would benefit society in a significant
          way. Their unwavering commitment, tireless efforts, and countless sacrifices laid the foundation for our success today.
        </p>
      </div>
      <FoundingCard CardData={FounderData} />
    </div>
  );
}

export default App;
