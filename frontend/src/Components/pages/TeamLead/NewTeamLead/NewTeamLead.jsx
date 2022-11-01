import React, { useState, useEffect } from 'react';
import './NewTeamLead.css'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../Sidebar/Sidebar';
import Menubar from '../../../Menubar/Menubar';
import { ImCamera } from 'react-icons/im'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NewTeamLead = () => {


       //////get parentId from localStorage
       const [ parentId, setParentId] = useState(0)
    
       useEffect(() => {
           const getParentId = JSON.parse(localStorage.getItem('user'));
           const parentId = getParentId._id;
           setParentId(parentId)
   
         
           }, [])
     
 
     const [user, setUser] = useState({
         firstName: "", lastName: "", email: "", phone: "", department: "", password: "",role:"teamleader"
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
 
         const { firstName, lastName, email, phone, department, password,role } = user;
 
         const res = await fetch("/adduser", {
             method: 'POST',
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify({
                 firstName, lastName, email, phone, department, password,parentId,role
             })
 
         })
 
         const data = await res.json();
         console.log(data);
 
         if (res.status === 403 || !data) {
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
        else if (res.status === 400) {
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
            toast.success('Team Successfully Created', {
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
           <Menubar />
           <div className="create-user-wrapper">
                <h2>Add new TeamLeader</h2>
                <form action="" method='POST' className='create-user-form'>

                    <div className="user-image-wrapper-employee manager-image-block">
                      <div className="manager-image"><img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt="" /></div>
                        <div className="user-image-upload">
                            <input type="file" name='select-image' accept="image/*" id="select-image"
                                onChange={(e) => setFile(e.target.files[0])} />
                            <label htmlFor="select-image">upload image</label>

                        </div> 
                    </div>
                    <div className="create-form-wrapper" data-aos='fade-up'>
                    <h3> Add Team Detail</h3>
                        <div className="field">
                            <div className="input">

                                <label htmlFor="name">First Name</label>
                                <input type="text" placeholder='John' name='firstName' value={user.firstName} onChange={handleInput} /></div>
                            <div className="input select-input" >

                                <label htmlFor="company">Last Name</label>
                                <input type="text" placeholder='Doe' name='lastName' value={user.lastName} onChange={handleInput} />

                            </div>
                        </div>
                       <h3> Add TemLeader Detail</h3>
                        <div className="field">
                            <div className="input">

                                <label htmlFor="name">First Name</label>
                                <input type="text" placeholder='John' name='firstName' value={user.firstName} onChange={handleInput} /></div>
                            <div className="input select-input" >

                                <label htmlFor="company">Last Name</label>
                                <input type="text" placeholder='Doe' name='lastName' value={user.lastName} onChange={handleInput} />


                            </div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="email">Email</label><input type="text" placeholder='robert@gmail.com' name='email' value={user.email} onChange={handleInput} /></div><div className="input"> <label htmlFor="password">password</label><input type="text" placeholder='r@b#e$' name='password' value={user.password} onChange={handleInput} /></div>
                        </div>
                        <div className="field">
                            <div className="input"><label htmlFor="phone">phone</label><input type="text" placeholder='+91' name='phone' value={user.phone} onChange={handleInput} /></div><div className="input"><label htmlFor="department">department</label> </div>
                        </div>

                        <div className="field">
                            <div className="input">

                                <button onClick={sendData}>Submit</button>


                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <ToastContainer />

        </>
    );
}

export default NewTeamLead;
