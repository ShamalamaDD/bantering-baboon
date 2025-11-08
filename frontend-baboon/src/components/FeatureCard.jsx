import React from "react";
import PropTypes from "prop-types";

export default function FeatureCard({ title, desc }) {
  return (
    <div className="p-4 bg-gray-800 rounded-2xl shadow-md hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 mt-2">{desc}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
