import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Shell from '../components/Shell';
import { motion } from 'framer-motion';
import { getCourse, joinQueue } from '../services/api';

export default function CourseDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [err, setErr] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    let mounted = true;
    getCourse(id).then(data => { if(mounted) setCourse(data); }).catch(e => setErr(e.message));
    return () => mounted = false;
  }, [id]);

  const handleJoin = async () => {
    try {
      setErr(''); setMsg('');
      const res = await joinQueue(id);
      setMsg(res.message || 'Joined');
    } catch (e) {
      setErr(e.message);
    }
  };

  if(!course) return (
    <Shell title="SyncOH"><div className="card">Loading...</div></Shell>
  );

  return (
    <Shell title="SyncOH">
      <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.35}}>
        <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:12}}>
          <button className="small-btn" onClick={()=>navigate(-1)}>Back</button>
          <div style={{fontWeight:700}}>{course.title}</div>
        </div>

        <div className="card">
          <div className="course-title">{course.title}</div>
          <div className="meta">Prof./TA: {course.staff}</div>
          <div className="meta">Time: {course.time} • Room: {course.room}</div>
          <div style={{marginTop:12,display:'flex',gap:8}}>
            <button className="button" onClick={handleJoin}>Join the queue</button>
            <button className="small-btn">Reschedule</button>
          </div>
          {msg && <div style={{marginTop:8,color:'green'}}>{msg}</div>}
          {err && <div style={{marginTop:8,color:'red'}}>{err}</div>}
        </div>

        <div className="card">
          <div style={{fontWeight:700}}>Announcements</div>
          <div style={{color:'var(--muted)',marginTop:8}}>No announcements yet.</div>
        </div>
      </motion.div>
    </Shell>
  );
}
