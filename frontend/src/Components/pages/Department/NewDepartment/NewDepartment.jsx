import React, { useState, useEffect } from 'react';
import './NewDepartment.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';
import { ImCamera } from 'react-icons/im'

import { ToastContainer, toast } from 'react-toastify';

const NewDepartment = () => {

    const [user, setUser] = useState({
        name: "", email: "", address: "", country: "", username: "", password: ""
    })
    let name, value;

    const handleInput = (e) => {

        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }
    const sendData = async (e) => {
        e.preventDefault();

        const { name, email, address, country, username, password } = user;

        const res = await fetch("/adduser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, address, country, username, password
            })

        })
        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("invalid creation")
            console.log("user cannot  created");
        }
        if (res.status === 422) {
            window.alert("email allready exist")
            console.log("email exist already");
        }
        else {
            window.alert('user created')
            console.log("user created");
        }
    }

    const [file, setFile] = useState("");

    return (
        <>
            <Sidebar />
            <div className="create-user-wrapper">
                <h2>Add new Department</h2>
                <form action="" method='POST' className='create-company-form'>

                    <div className="department-image-wrapper">
                        <div className="department-image"><img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt="" /></div>
                        <div className="department-image-upload">
                            <input type="file" name='select-image' accept="image/*" id="select-image"
                                onChange={(e) => setFile(e.target.files[0])} />
                            <label htmlFor="select-image">upload logo</label>
                        </div>
                    </div>



                    <div className="create-form-wrapper" data-aos='fade-up'>
                        <h3>Fill Department Detail</h3>
                        <div className="field">
                            <div className="input"><label htmlFor="companyName">Department Name</label><input type="text" placeholder='HR' name='companyName' value={user.companyName} onChange={handleInput} /></div>
                            <div className="input">


                            </div>
                        </div>
                        <h3>Fill Manager Detail</h3>
                        <div className="field">
                            <div className="input"><label htmlFor="firstName">First Name</label><input type="text" placeholder='John' name='firstName' value={user.firstName} onChange={handleInput} /></div><div className="input"> <label htmlFor="">Last Name</label><input type="text" placeholder='Doe' name='lastName' value={user.lastName} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="email">Email</label><input type="text" placeholder='@gmail.com' name='email' value={user.email} onChange={handleInput} /></div><div className="input"> <label htmlFor="password">Password</label><input type="text" placeholder='@xyz#5367$' name='password' value={user.password} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="phone">Phone</label><input type="text" placeholder='+91' name='phone' value={user.phone} onChange={handleInput} /></div><div className="input auto-input">

                            </div>
                        </div>

                        <div className="field">
                            <div className="input"><button onClick={sendData}>Submit</button></div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NewDepartment;
