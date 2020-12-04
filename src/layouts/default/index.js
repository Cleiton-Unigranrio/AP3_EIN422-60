import React from 'react';
import './index.css';

export default function DefaultLayout({ children }) {
  return (
    <div className="page">
      <div className="box">
        { children }
      </div>
    </div>
  );
}