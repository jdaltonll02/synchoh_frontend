import React from 'react';
import Shell from '../components/Shell';
import { motion } from 'framer-motion';

export default function Calendar(){
  return (
    <Shell title="SyncOH">
      <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.35}}>
        <div className="card">
          <div style={{fontWeight:700}}>My Calendar</div>
          <div className="meta">Your upcoming bookings</div>
        </div>
        <div className="card">
          <div style={{fontWeight:700}}>Book an Office Hour</div>
          <div style={{color:'var(--muted)',marginTop:8}}>Choose course & time</div>
          <div style={{display:'flex',marginTop:8,gap:8}}>
            <button className="button">Book</button>
            <button className="small-btn">View schedules</button>
          </div>
        </div>
      </motion.div>
    </Shell>
  );
}
