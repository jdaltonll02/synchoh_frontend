import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Calendar from '../pages/Calendar';
import Settings from '../pages/Settings';
import CourseDetail from '../pages/CourseDetail';

export default function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/course/:id' element={<CourseDetail />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}
