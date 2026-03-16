import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Protected = ({children}) => {
      const navigate = useNavigate();
    const user = useSelector((s)=>s.auth.user);
    const loading = useSelector((s)=>s.auth.loading);

    if(loading){
        return <h1>Loading......</h1>
    }

    if(!user){
     navigate('/login');
    }
    
  return (
    <div>{children}</div>
  )
}

export default Protected