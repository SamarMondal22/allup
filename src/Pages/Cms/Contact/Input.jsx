import React from 'react';

export default function Input({type,placeholder,className}) {
  return (
    <>
       <input className={className} type={type} placeholder={placeholder} />
    </>
  )
};
