import React,{useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
const navigate = useNavigate();
    const {Component} = props;

    const [path, setPath] = useState(["/"]);

    useEffect(()=>{
      
      setPath(window.location.pathname);
      // console.log(`hjsdbhjdgfhj ${path}`);
      
        fetch('/authentication').then((res)=>{
            if(res.status === 400){
    
             
              navigate('/',{replace:true}); 
            }
            else if(res.status ===200){
              navigate(path);

            }
            else{

              console.log("ok done");

            }
  
          })

    },[])
    return (
        <div>
            <Component/>
        </div>
    );
}

export default ProtectedRoute;
