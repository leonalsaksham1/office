import React from "react";
import Counter from "./counter";
import { User } from "lucide-react";
import { Heart } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Award } from "lucide-react";
// import { FaUsers, FaHeartbeat, FaBriefcase, FaAward } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    { number: 120000, title: "Happy Customers", icon: <User size={32} /> },
    { number: 1890, title: "Issues Solved", icon: <Heart size={32} /> },
    {
      number: 250000,
      title: "Finished Projects",
      icon: <BriefcaseBusiness size={32} />,
    },
    { number: 786, title: "Awards Winning", icon: <Award size={32} /> },
  ];

  return (
    <div id="achievements" className="text-center py-12 achievements-section ">
      <div className="container">
        <h2 className="achievements-header">Achievements</h2>
        <p className="achievements-description">
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Pellentesque et neque id ligula mattis
          commodo.
        </p>
        <div className="counter-wrap">
          {achievements.map((achievement, index) => (
            <Counter
              key={index}
              number={achievement.number}
              title={achievement.title}
              icon={achievement.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
