import React, {useEffect, useState} from 'react';
import Shell from '../components/Shell';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../services/api';
import { motion } from 'framer-motion';

export default function Home(){
  const [courses, setCourses] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    let mounted = true;
    getCourses().then(data => {
      if(mounted) setCourses(data);
    }).catch(e => setErr(e.message));
    return () => mounted = false;
  }, []);

  return (
    <Shell title="SyncOH">
      <motion.div initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{duration:0.35}}>
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:800}}>Upcoming Activities</div>
              <div style={{color:'var(--muted)',fontSize:12}}>Office hours & recitations near you</div>
            </div>
            <button className="small-btn">See all</button>
          </div>
        </div>

        {err && <div style={{color:'red'}}>{err}</div>}
        {courses.map(c=> <CourseCard key={c._id || c.id} course={c} />)}
      </motion.div>
    </Shell>
  );
}
