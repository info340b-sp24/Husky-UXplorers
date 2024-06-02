import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Gallery (props) {
  return (
    <div>
      <Outlet/>
    </div>
  );
}