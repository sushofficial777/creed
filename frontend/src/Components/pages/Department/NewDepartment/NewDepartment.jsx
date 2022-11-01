import React, { useState, useEffect } from 'react';
import './NewDepartment.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';
import { ImCamera } from 'react-icons/im'
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewDepartment = () => {

     

    const [user, setUser] = useState({
        firstName: "", lastName: "", email: "", departmentName:"", address: "", country: "", username: "", password: "", companyType:"",phone:"",role:"Manager"
    })

    //////get parentId from localStorage
    const [ parentId, setParentId] = useState(0)
    
    useEffect(() => {
        const getParentId = JSON.parse(localStorage.getItem('user'));
        const parentId = getParentId._id;
        setParentId(parentId)

      
        }, [])

    let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const sendData = async (e) => {
        e.preventDefault();

        const { firstName, email, lastName, phone, departmentName, password,address,role  } = user;
        const saveInDepatrment = await fetch("/adddepartment", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, email, lastName, phone, departmentName, password,   
            })

        })
        const data1 = await saveInDepatrment.json();

        const res = await fetch("/adduser", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, email, lastName, phone, departmentName, password,address, parentId  ,role
            })

        })
        const data = await res.json();

        if (saveInDepatrment.status === 400 || !data) {
            toast.error('All Fields are Required', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }   
       else if (saveInDepatrment.status === 401) {
            toast.error('Email Allready Exists', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            const sendMail = async () => {
                const res1 = await fetch("/sendmail", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName, email, lastName, phone, departmentName, password, role,
    
                    })
                })
                const mailData = await res1.json();
                console.log( "jrghjufhj"+sendMail.status);
               
            }
            sendMail();
            toast.success('Department Successfully Created', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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



                    <div className="create-form-wrapper-dep" data-aos='fade-up'>
                        <h3>Fill Department Detail</h3>
                        <div className="field">
                            <div className="input"><label htmlFor="departmentName">Department Name</label><input type="text" placeholder='HR' name='departmentName' value={user.departmentName} onChange={handleInput} /></div>
                            <div className="input">
                            <label htmlFor="companyType">Department Type</label><input type="text" placeholder='' name='companyType' value={user.companyType} onChange={handleInput} />
                            


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
                            <div className="input"><label htmlFor="phone">Phone</label><input type="text" placeholder='+91' name='phone' value={user.phone} onChange={handleInput} /></div><div className="input ">
                            <label htmlFor="address">Address</label><input type="text" placeholder='LA,USA' name='address' value={user.address} onChange={handleInput} />
                            </div>
                        </div>

                        <div className="field">
                            <div className="input"><button onClick={sendData}>Submit</button></div>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
}

export default NewDepartment;
