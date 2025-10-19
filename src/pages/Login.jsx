import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [err,setErr]=useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setErr('');
      const data = await login(email, password);
      localStorage.setItem('syncoh_token', data.token);
      navigate('/home');
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="app-shell">
      <div style={{padding:24,display:'flex',flexDirection:'column',gap:12}}>
        <h2 style={{margin:0}}>SyncOH</h2>
        <p style={{margin:0,color:'var(--muted)'}}>Login</p>
        <input className="input" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {err && <div style={{color:'red'}}>{err}</div>}
        <button className="button" onClick={handleLogin}>Login with Andrew ID</button>
        <div style={{textAlign:'center',color:'var(--muted)',marginTop:8}}>or login</div>
        <div style={{display:'flex',gap:8,justifyContent:'center'}}>
          <button className="small-btn">Google</button>
          <button className="small-btn">Apple</button>
        </div>
      </div>
    </div>
  );
}
