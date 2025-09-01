import React from 'react';
import { motion } from 'framer-motion';
import './GiveReceive.css'; // we’ll create this next

const GiveReceive = () => {
  return (
    <section className="give-receive-container">
      <motion.div
        className="hand giver"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <img src="/hand-giving.png" alt="Hand giving" />
      </motion.div>

      <motion.div
        className="package"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img src="/care-package.png" alt="Care package" />
      </motion.div>

      <motion.div
        className="hand receiver"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
        viewport={{ once: true }}
      >
        <img src="/hand-receiving.png" alt="Hand receiving" />
      </motion.div>
    </section>
  );
};

export default GiveReceive;
