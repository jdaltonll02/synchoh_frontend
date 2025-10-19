import React from 'react';
import Shell from '../components/Shell';
import { motion } from 'framer-motion';

export default function Settings(){
  return (
    <Shell title="SyncOH">
      <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.35}}>
        <div className="card">
          <div style={{fontWeight:700}}>Account Settings</div>
          <div className="meta">First Name • Last Name</div>
          <div style={{marginTop:8}}>
            <input className="input" placeholder="andrewid@andrew.cmu.edu" />
          </div>
        </div>

        <div className="card">
          <div style={{fontWeight:700}}>Office Hours Schedules</div>
          <div className="meta">Create or edit your schedules</div>
          <div style={{marginTop:8}} className="settings-grid">
            <button className="small-btn">Book</button>
            <button className="small-btn">Recitations</button>
            <button className="small-btn">Professors' OH</button>
            <button className="small-btn">TAs' OH</button>
          </div>
        </div>

        <div className="card">
          <div style={{fontWeight:700}}>AI Chatbot</div>
          <div className="meta">AI-powered chatbot for quick queries</div>
        </div>
      </motion.div>
    </Shell>
  );
}
