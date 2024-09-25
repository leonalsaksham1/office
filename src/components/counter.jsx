import React from "react";
import CountUp from "react-countup";
// import PropTypes from "prop-types";

export default function Counter({ number, title, icon }) {
  return (
    <div className="counter-div">
      <div className="block">
        <div className="bg-blue-500 text-white rounded-full p-4 mb-2">
          {icon}
        </div>
      </div>
      <div className="number">
        <CountUp duration={3} className="counter" end={number} />
      </div>
      <p className="title">{title}</p>
    </div>
  );
}

// Counter.propTypes = {
//   number: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   icon: PropTypes.element.isRequired,
// };
