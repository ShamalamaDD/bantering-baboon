import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-gray-800/60 border border-gray-700 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:border-blue-400 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-3">
        {Icon && <Icon className="w-6 h-6 text-blue-400" />}
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};
