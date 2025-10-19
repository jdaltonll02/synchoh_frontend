const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

async function request(path, opts = {}) {
  const headers = opts.headers || {};
  // attach token if present
  const token = localStorage.getItem('syncoh_token');
  if(token) headers['Authorization'] = `Bearer ${token}`;
  headers['Content-Type'] = 'application/json';
  const res = await fetch(`${API_URL}${path}`, {...opts, headers});
  if(res.status === 204) return null;
  const data = await res.json();
  if(!res.ok) {
    const err = data && data.message ? data.message : 'API Error';
    throw new Error(err);
  }
  return data;
}

export const login = (email, password) => request('/users/login', {method:'POST', body: JSON.stringify({email, password})});
export const register = (payload) => request('/users/register', {method:'POST', body: JSON.stringify(payload)});
export const getProfile = () => request('/users/profile');
export const getCourses = () => request('/courses');
export const getCourse = (id) => request(`/courses/${id}`);
export const getOfficeHours = () => request('/officehours');
export const joinQueue = (ohId) => request(`/officehours/join/${ohId}`, {method:'POST'});
