import React, { useState, useEffect } from 'react'
import './Login.css'
import Image1 from '../../img/img14.png';
import { useNavigate } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//////////////
export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState('');


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
    }).then((res) => {

              return res.json();

          })
    console.log(res);

   


      if (res.email === undefined ) {
        toast.error('Invalid credencial', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
       
        console.log("hdjfdshj");

      }
      else {


        window.localStorage.setItem("user",JSON.stringify(res));
      


        toast.success('Logged in Successfully!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

          setTimeout(() => {
            navigate('/admin/Dashboard');
          }, 2000); 
      

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
        <ToastContainer />
      </>
    )
  }
