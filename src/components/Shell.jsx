import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shell({children, title}) {
  const navigate = useNavigate();
  return (
    <div className="app-shell" role="application">
      <div className="header">
        <div className="logo">SO</div>
        <div style={{flex:1}}>
          <div className="title">{title}</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Home My Calendar Settings</div>
        </div>
        <div style={{width:36}} className="center">3</div>
      </div>
      <div className="content">{children}</div>
      <div className="footer">
        <div className="nav-btn" onClick={()=>navigate('/home')}>🏠<div>Home</div></div>
        <div className="nav-btn" onClick={()=>navigate('/calendar')}>📅<div>Calendar</div></div>
        <div className="nav-btn" onClick={()=>navigate('/settings')}>⚙️<div>Settings</div></div>
      </div>
    </div>
  );
}
