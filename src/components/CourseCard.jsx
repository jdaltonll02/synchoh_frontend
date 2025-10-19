import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CourseCard({course}) {
  const navigate = useNavigate();
  return (
    <div className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{flex:1}}>
        <div className="course-title">{course.title}</div>
        <div className="meta">Prof./TA: {course.staff} • {course.time} • Room: {course.room}</div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8}}>
        <div className="queue-pill">{course.queue || 0} in queue</div>
        <button className="small-btn" onClick={()=>navigate(`/course/${course._id || course.id}`)}>View</button>
      </div>
    </div>
  );
}
