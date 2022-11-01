import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const LoginProtection = (props) => {

    const navigate = useNavigate();
    const { Component } = props;

    const [path, setPath] = useState(["/"]);
    console.log(path);
    useEffect(() => {

        setPath(window.location.pathname);
        fetch('/authentication').then((res) => {
            if (res.status === 200) {
             
                navigate('/admin/Dashboard');
               
            }
            else {
                console.log("ok done");
            }
        })

    }, [])
    return (
        <div>
            <Component />
        </div>
    );
}

export default LoginProtection;
