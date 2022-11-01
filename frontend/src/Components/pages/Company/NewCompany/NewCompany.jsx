import React, { useState, useEffect } from 'react';
import './NewCompany.css'
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';
import { useNavigate } from 'react-router-dom';
import MapWrapper from './Cmpany-location-map/MapWrapper';
import AutocompleteLocation from '../../Autocomplete-location/Autocomplete-location';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";


const NewCompany = () => {


    const [ parentId, setParentId] = useState({})
    
   
      
      
    const navigate = useNavigate();

    const [file, setFile] = useState("");
   
    const [user, setUser] = useState({
        firstName: "", email: "", lastName: "", phone: "", companyName: "", password: "", companyLocation: "huwai", location_lat: "656565",  location_lon:"83784",role:"CEO"
    })


    let name, value;


    const handleInput = (e) => {

        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }
    const sendData = async (e) => {
        e.preventDefault();
        const { firstName, email, lastName, phone, companyName, password, companyLocation, location_lat, location_lon,role } = user;

        const saveInUser = async () => {
            const res1 = await fetch("/adduser", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName, email, lastName, phone, companyName, password, role,companyName

                })
            })
            const data1 = await res1.json();
            console.log(res1.status);
        }

        const res = await fetch("/addcompany", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName, email, lastName, phone, companyName, password, companyLocation,location_lat, location_lon
            })
        })
        const data = await res.json();
        saveInUser();

        if (res.status === 400 || !data) {
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
        else if (res.status === 401) {
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
        else if (res.status === 403) {
            toast.error('Company Name Allready Exists', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        }
        else if (res.status === 500) {
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
        else if (res.status === 501) {
           navigate("/")

        }
        else {
            const sendMail = async () => {
                const res1 = await fetch("/sendmail", {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        firstName, email, lastName, phone, companyName, password, role,companyName
    
                    })
                })
                const mailData = await res1.json();
                console.log( "jrghjufhj"+sendMail.status);
            }
            sendMail();
    

            toast.success('Company Successfully Created', {
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
    return (
        <>
            <Sidebar />
            <Menubar />
            <div className="create-user-wrapper">
            
                    <h2>Add new Company</h2>
                <form action="" method='POST' className='create-company-form'>
                 
                    <div className="location-map">
                       <MapWrapper/>
                    </div>
                 <div className="create-form-wrapper" data-aos='fade-up'>
                        <h3>Fill Company Detail</h3>
                        <div className="field">
                            <div className="input"><label htmlFor="companyName">Company Name</label><input type="text" placeholder='Creed' name='companyName' value={user.companyName} onChange={handleInput} /></div>
                            <div className="input">
                                <div className="company-image-wrapper-employee">
                                    <div className="company-image"><img
                                        src={
                                            file
                                                ? URL.createObjectURL(file)
                                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                                        }
                                        alt="" /></div>
                                    <div className="company-image-upload">
                                        <input type="file" name='select-image' accept="image/*" id="select-image"
                                            onChange={(e) => setFile(e.target.files[0])} />

                                        <label htmlFor="select-image">upload logo</label>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <h3>Fill CEO Detail</h3>
                        <div className="field">
                            <div className="input"><label htmlFor="firstName">First Name</label><input type="text" placeholder='John' name='firstName' value={user.firstName} onChange={handleInput} /></div><div className="input"> <label htmlFor="">Last Name</label><input type="text" placeholder='Doe' name='lastName' value={user.lastName} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="email">Email</label><input type="text" placeholder='@gmail.com' name='email' value={user.email} onChange={handleInput} /></div><div className="input"> <label htmlFor="password">Password</label><input type="text" placeholder='@xyz#5367$' name='password' value={user.password} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="phone">Phone</label><input type="text" placeholder='+91' name='phone' value={user.phone} onChange={handleInput} /></div><div className="input auto-input">
                              <input type="text" placeholder='Address' />
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

export default NewCompany;
