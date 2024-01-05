import React from 'react';

export default function Highlight({children, color}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '20px',
        fontFamily:'Roboto',
        color: '#fff',
        padding: '.5rem',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        fontWeight: 'Bold',        
      }}>
      {children}
    </span>
  );
}