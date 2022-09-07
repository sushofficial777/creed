import React, { useState, useEffect } from 'react'
import './Login.css'
import Image1 from '../../img/img4.jpg';
import { useNavigate } from 'react-router-dom'



//////////////
export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState('');
  console.log(password);
  console.log(email);
  const adminLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email, password
      })
    });
    const data = res.json();
    console.log(data);
    console.log(res.Promise);
    if (res.status === 400 || !data) {
      window.alert("invalid credencial");
    }
    else {
  
      window.localStorage.setItem("data",data);
      
  
      window.alert("login successfull");
     
    }
  }
  return (
    <>
      <div className="login-wrapper">
        <div className="bg-video">
      
        </div>
        <div className="login-form">
          <div className="login-form-left">

            <img src={Image1} alt="admin" />

          </div>
          <div className="login-form-right">

            <div className="login-box">

              <h2>Login Here</h2>
              <p>send, spend and save smarter</p>
              <div className="input-box">
                <div className="input-log"><input type="text" placeholder='email' name='email'
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} /></div>
                <div className="input-log"><input type="password" placeholder='Password' name='password'
                  onChange={(e) => setPassword(e.target.value)}
  
                  value={password} /></div>
              </div>

              <div className="input-box">
                <div className="policy-box">
                  <label>

                    <input name="privacy" type="checkbox" /> I have read and I agree to the Privacy Policy.</label>
                </div>
                <div className="input-log button-log"><button onClick={adminLogin}>Login</button></div>

              </div>
              <div className="forget-pass"><a href="#">forget password? </a></div>


            </div>

          </div>


        </div>

      </div>
    </>
  )
}
